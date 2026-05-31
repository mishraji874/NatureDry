import "server-only";
import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export interface CatalogProduct {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  categoryName: string;
  categorySlug: string;
  primaryImage: {
    url: string;
    altText: string;
  } | null;
  minPrice: number;
  maxPrice: number;
  reviewCount: number;
  averageRating: number;
  inStock: boolean;
}

export interface CatalogFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  limit?: number;
}

export interface CatalogFilterMetadata {
  categories: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
  minPrice: number;
  maxPrice: number;
}

export interface ProductDetail {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  detailedDescription: string;
  category: {
    name: string;
    slug: string;
  };
  images: Array<{
    id: string;
    url: string;
    altText: string;
    isPrimary: boolean;
    sortOrder: number;
  }>;
  variants: Array<{
    id: string;
    sku: string;
    weightGrams: number;
    price: number;
    stockQuantity: number;
  }>;
  ingredients: string[];
  nutritionalInfo: Record<string, string | number | boolean>;
  reviewCount: number;
  averageRating: number;
  reviews: Array<{
    id: string;
    rating: number;
    comment: string;
    createdAt: Date;
    authorName: string;
  }>;
}

const catalogInclude = {
  category: {
    select: {
      name: true,
      slug: true,
    },
  },
  images: {
    orderBy: [{ isPrimary: "desc" }, { sortOrder: "asc" }],
    select: {
      url: true,
      altText: true,
    },
  },
  variants: {
    orderBy: { price: "asc" },
    select: {
      id: true,
      weightGrams: true,
      price: true,
      stockQuantity: true,
    },
  },
  reviews: {
    where: { isApproved: true },
    select: {
      rating: true,
    },
  },
} satisfies Prisma.ProductInclude;

const detailInclude = {
  category: {
    select: {
      name: true,
      slug: true,
    },
  },
  images: {
    orderBy: [{ isPrimary: "desc" }, { sortOrder: "asc" }],
    select: {
      id: true,
      url: true,
      altText: true,
      isPrimary: true,
      sortOrder: true,
    },
  },
  variants: {
    orderBy: { weightGrams: "asc" },
    select: {
      id: true,
      sku: true,
      weightGrams: true,
      price: true,
      stockQuantity: true,
    },
  },
  reviews: {
    where: { isApproved: true },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      rating: true,
      comment: true,
      createdAt: true,
      user: {
        select: {
          firstName: true,
          lastName: true,
        },
      },
    },
  },
} satisfies Prisma.ProductInclude;

type CatalogProductRecord = Prisma.ProductGetPayload<{
  include: typeof catalogInclude;
}>;

const roundToSingleDecimal = (value: number): number => {
  return Number(value.toFixed(1));
};

const parseJson = <T>(value: string, fallbackValue: T): T => {
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallbackValue;
  }
};

const toIngredientList = (rawIngredients: string): string[] => {
  const parsed = parseJson<string[] | string>(rawIngredients, []);

  if (Array.isArray(parsed)) {
    return parsed;
  }

  if (typeof parsed === "string" && parsed.trim().length > 0) {
    return [parsed];
  }

  if (rawIngredients.trim().length > 0) {
    return [rawIngredients];
  }

  return [];
};

const buildCatalogWhere = (filters: CatalogFilters): Prisma.ProductWhereInput => {
  const variantPriceFilter: Prisma.FloatFilter = {};

  if (typeof filters.minPrice === "number" && Number.isFinite(filters.minPrice)) {
    variantPriceFilter.gte = filters.minPrice;
  }

  if (typeof filters.maxPrice === "number" && Number.isFinite(filters.maxPrice)) {
    variantPriceFilter.lte = filters.maxPrice;
  }

  return {
    isActive: true,
    ...(filters.category
      ? {
          category: {
            slug: filters.category,
          },
        }
      : {}),
    ...(Object.keys(variantPriceFilter).length > 0
      ? {
          variants: {
            some: {
              price: variantPriceFilter,
            },
          },
        }
      : {}),
  };
};

const mapCatalogProduct = (product: CatalogProductRecord): CatalogProduct => {
  const minPrice = product.variants[0]?.price ?? 0;
  const maxPrice = product.variants[product.variants.length - 1]?.price ?? minPrice;
  const totalRatings = product.reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating =
    product.reviews.length > 0 ? roundToSingleDecimal(totalRatings / product.reviews.length) : 0;
  const inStock = product.variants.some((variant) => variant.stockQuantity > 0);

  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    shortDescription: product.shortDescription,
    categoryName: product.category.name,
    categorySlug: product.category.slug,
    primaryImage: product.images[0]
      ? {
          url: product.images[0].url,
          altText: product.images[0].altText,
        }
      : null,
    minPrice,
    maxPrice,
    reviewCount: product.reviews.length,
    averageRating,
    inStock,
  };
};

export const getCatalogProducts = async (
  filters: CatalogFilters = {}
): Promise<CatalogProduct[]> => {
  const products = await prisma.product.findMany({
    where: buildCatalogWhere(filters),
    include: catalogInclude,
    orderBy: [{ createdAt: "desc" }],
    take: filters.limit ?? 24,
  });

  return products.map(mapCatalogProduct);
};

export const getBestSellerProducts = async (limit = 4): Promise<CatalogProduct[]> => {
  const products = await prisma.product.findMany({
    where: { isActive: true },
    include: catalogInclude,
    orderBy: [{ reviews: { _count: "desc" } }, { createdAt: "desc" }],
    take: limit,
  });

  return products.map(mapCatalogProduct);
};

export const getCatalogFilterMetadata = async (): Promise<CatalogFilterMetadata> => {
  const [categories, priceRange] = await Promise.all([
    prisma.category.findMany({
      orderBy: { name: "asc" },
      select: {
        id: true,
        name: true,
        slug: true,
      },
    }),
    prisma.productVariant.aggregate({
      where: {
        product: {
          isActive: true,
        },
      },
      _min: {
        price: true,
      },
      _max: {
        price: true,
      },
    }),
  ]);

  return {
    categories,
    minPrice: priceRange._min.price ?? 0,
    maxPrice: priceRange._max.price ?? 0,
  };
};

export const getProductBySlug = async (slug: string): Promise<ProductDetail | null> => {
  const product = await prisma.product.findUnique({
    where: { slug },
    include: detailInclude,
  });

  if (!product || !product.isActive) {
    return null;
  }

  const totalRatings = product.reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating =
    product.reviews.length > 0 ? roundToSingleDecimal(totalRatings / product.reviews.length) : 0;

  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    shortDescription: product.shortDescription,
    detailedDescription: product.detailedDescription,
    category: {
      name: product.category.name,
      slug: product.category.slug,
    },
    images: product.images,
    variants: product.variants,
    ingredients: toIngredientList(product.ingredients),
    nutritionalInfo: parseJson<Record<string, string | number | boolean>>(
      product.nutritionalInfo,
      {}
    ),
    reviewCount: product.reviews.length,
    averageRating,
    reviews: product.reviews.map((review) => ({
      id: review.id,
      rating: review.rating,
      comment: review.comment,
      createdAt: review.createdAt,
      authorName: `${review.user.firstName} ${review.user.lastName}`.trim(),
    })),
  };
};
