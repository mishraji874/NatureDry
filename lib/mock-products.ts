import type { CatalogProduct, ProductDetail, CatalogFilters } from "@/lib/products";

export const MOCK_CATEGORIES = [
  { id: "cat-vegetables", name: "Dehydrated Vegetables", slug: "vegetables" },
  { id: "cat-powders", name: "Fruit Powders", slug: "powders" },
  { id: "cat-kits", name: "Meal Kits", slug: "kits" },
];

// A small helper to make objects easier to read
const imageFor = (id: string, alt: string) => ({ id, url: "/file.svg", altText: alt, isPrimary: true, sortOrder: 0 });

const makeVariant = (id: string, sku: string, grams: number, price: number, qty = 50) => ({ id, sku, weightGrams: grams, price, stockQuantity: qty });

// Catalog items (lightweight representation used by the catalog list)
export const MOCK_CATALOG_PRODUCTS: CatalogProduct[] = [
  {
    id: "veg-1",
    slug: "carrot-crisps",
    name: "Carrot Crisps",
    shortDescription: "Light, crunchy dehydrated carrots — great for soups, snacks, and baking.",
    categoryName: "Dehydrated Vegetables",
    categorySlug: "vegetables",
    primaryImage: { url: "/file.svg", altText: "Carrot Crisps" },
    minPrice: 3.99,
    maxPrice: 14.99,
    reviewCount: 12,
    averageRating: 4.5,
    inStock: true,
  },
  {
    id: "veg-2",
    slug: "green-bean-flakes",
    name: "Green Bean Flakes",
    shortDescription: "Preserved flavor and texture — rehydrates quickly for stews and sides.",
    categoryName: "Dehydrated Vegetables",
    categorySlug: "vegetables",
    primaryImage: { url: "/file.svg", altText: "Green Bean Flakes" },
    minPrice: 3.49,
    maxPrice: 12.99,
    reviewCount: 7,
    averageRating: 4.2,
    inStock: true,
  },
  {
    id: "veg-3",
    slug: "sweet-pea-flakes",
    name: "Sweet Pea Flakes",
    shortDescription: "Bright, sweet peas dried at low temperatures to preserve taste.",
    categoryName: "Dehydrated Vegetables",
    categorySlug: "vegetables",
    primaryImage: { url: "/file.svg", altText: "Sweet Pea Flakes" },
    minPrice: 2.99,
    maxPrice: 9.99,
    reviewCount: 9,
    averageRating: 4.4,
    inStock: true,
  },
  {
    id: "veg-4",
    slug: "onion-crisps",
    name: "Onion Crisps",
    shortDescription: "Savory dried onion rings — add crunch and flavor instantly.",
    categoryName: "Dehydrated Vegetables",
    categorySlug: "vegetables",
    primaryImage: { url: "/file.svg", altText: "Onion Crisps" },
    minPrice: 3.49,
    maxPrice: 11.99,
    reviewCount: 18,
    averageRating: 4.6,
    inStock: true,
  },
  {
    id: "veg-5",
    slug: "spinach-flakes",
    name: "Spinach Flakes",
    shortDescription: "Packed with nutrients — a convenient way to add greens to any meal.",
    categoryName: "Dehydrated Vegetables",
    categorySlug: "vegetables",
    primaryImage: { url: "/file.svg", altText: "Spinach Flakes" },
    minPrice: 4.49,
    maxPrice: 13.99,
    reviewCount: 5,
    averageRating: 4.1,
    inStock: true,
  },

  // Fruit powders
  {
    id: "pow-1",
    slug: "strawberry-powder",
    name: "Strawberry Powder",
    shortDescription: "Vibrant strawberry powder for smoothies, baking, and ice creams.",
    categoryName: "Fruit Powders",
    categorySlug: "powders",
    primaryImage: { url: "/file.svg", altText: "Strawberry Powder" },
    minPrice: 5.99,
    maxPrice: 19.99,
    reviewCount: 22,
    averageRating: 4.7,
    inStock: true,
  },
  {
    id: "pow-2",
    slug: "mango-powder",
    name: "Mango Powder",
    shortDescription: "Sun-ripened mango flavor concentrated into a shelf-stable powder.",
    categoryName: "Fruit Powders",
    categorySlug: "powders",
    primaryImage: { url: "/file.svg", altText: "Mango Powder" },
    minPrice: 6.49,
    maxPrice: 18.99,
    reviewCount: 11,
    averageRating: 4.5,
    inStock: true,
  },
  {
    id: "pow-3",
    slug: "blueberry-powder",
    name: "Blueberry Powder",
    shortDescription: "Antioxidant-rich powder to boost smoothies and oatmeal.",
    categoryName: "Fruit Powders",
    categorySlug: "powders",
    primaryImage: { url: "/file.svg", altText: "Blueberry Powder" },
    minPrice: 6.99,
    maxPrice: 21.99,
    reviewCount: 17,
    averageRating: 4.6,
    inStock: true,
  },
  {
    id: "pow-4",
    slug: "banana-powder",
    name: "Banana Powder",
    shortDescription: "Creamy banana flavor to thicken shakes and baked goods naturally.",
    categoryName: "Fruit Powders",
    categorySlug: "powders",
    primaryImage: { url: "/file.svg", altText: "Banana Powder" },
    minPrice: 4.99,
    maxPrice: 12.99,
    reviewCount: 6,
    averageRating: 4.2,
    inStock: true,
  },
  {
    id: "pow-5",
    slug: "apple-powder",
    name: "Apple Powder",
    shortDescription: "Mild, sweet apple powder — great for baking and sauces.",
    categoryName: "Fruit Powders",
    categorySlug: "powders",
    primaryImage: { url: "/file.svg", altText: "Apple Powder" },
    minPrice: 5.49,
    maxPrice: 13.99,
    reviewCount: 8,
    averageRating: 4.3,
    inStock: true,
  },

  // Meal kits
  {
    id: "kit-1",
    slug: "hearty-soup-kit",
    name: "Hearty Soup Kit",
    shortDescription: "All-in-one dehydrated soup mix — add water and enjoy a satisfying bowl.",
    categoryName: "Meal Kits & Mixes",
    categorySlug: "kits",
    primaryImage: { url: "/file.svg", altText: "Hearty Soup Kit" },
    minPrice: 8.99,
    maxPrice: 24.99,
    reviewCount: 30,
    averageRating: 4.8,
    inStock: true,
  },
  {
    id: "kit-2",
    slug: "trail-mix-kit",
    name: "Trail Mix Kit",
    shortDescription: "A nutritious mix of nuts, seeds, and dried fruit — perfect for the trail.",
    categoryName: "Meal Kits & Mixes",
    categorySlug: "kits",
    primaryImage: { url: "/file.svg", altText: "Trail Mix Kit" },
    minPrice: 6.99,
    maxPrice: 19.99,
    reviewCount: 14,
    averageRating: 4.4,
    inStock: true,
  },
  {
    id: "kit-3",
    slug: "instant-pasta-kit",
    name: "Instant Pasta Kit",
    shortDescription: "Dehydrated pasta and sauce mix — quick, tasty dinners in minutes.",
    categoryName: "Meal Kits & Mixes",
    categorySlug: "kits",
    primaryImage: { url: "/file.svg", altText: "Instant Pasta Kit" },
    minPrice: 7.99,
    maxPrice: 22.99,
    reviewCount: 9,
    averageRating: 4.3,
    inStock: true,
  },
  {
    id: "kit-4",
    slug: "curry-kit",
    name: "Instant Curry Kit",
    shortDescription: "A rich spice blend with dehydrated vegetables for easy curry bowls.",
    categoryName: "Meal Kits & Mixes",
    categorySlug: "kits",
    primaryImage: { url: "/file.svg", altText: "Instant Curry Kit" },
    minPrice: 8.49,
    maxPrice: 23.99,
    reviewCount: 11,
    averageRating: 4.5,
    inStock: true,
  },
  {
    id: "kit-5",
    slug: "oats-breakfast-kit",
    name: "Breakfast Oats Kit",
    shortDescription: "Quick oatmeal kit with fruit powders and seeds for a complete breakfast.",
    categoryName: "Meal Kits & Mixes",
    categorySlug: "kits",
    primaryImage: { url: "/file.svg", altText: "Breakfast Oats Kit" },
    minPrice: 5.99,
    maxPrice: 16.99,
    reviewCount: 20,
    averageRating: 4.6,
    inStock: true,
  },
];

// Full details for product detail pages
export const MOCK_PRODUCT_DETAILS: ProductDetail[] = [
  {
    id: "veg-1",
    slug: "carrot-crisps",
    name: "Carrot Crisps",
    shortDescription: "Light, crunchy dehydrated carrots — great for soups, snacks, and baking.",
    detailedDescription:
      "Our Carrot Crisps are dehydrated slowly at low temperatures to preserve flavor and nutrients. They rehydrate quickly for soups or make a tasty, crunchy snack straight from the pouch.",
    category: { name: "Dehydrated Vegetables", slug: "vegetables" },
    images: [
      imageFor("img-carrot-1", "Carrot Crisps pack"),
      { id: "img-carrot-2", url: "/file.svg", altText: "Carrot Crisps close-up", isPrimary: false, sortOrder: 1 },
    ],
    variants: [
      makeVariant("cv1", "CD-CRISP-50", 50, 3.99, 120),
      makeVariant("cv2", "CD-CRISP-125", 125, 6.99, 60),
      makeVariant("cv3", "CD-CRISP-300", 300, 14.99, 20),
    ],
    ingredients: ["Dehydrated Carrot"],
    nutritionalInfo: { servingSize: "10g", calories: 35, protein: 0.8, carbs: 8.4, fiber: 2.8, vitaminA: "210% DV" },
    reviewCount: 12,
    averageRating: 4.5,
    reviews: [
      { id: "r-car-1", rating: 5, comment: "Great texture and flavor.", createdAt: new Date("2025-02-01"), authorName: "S. Miller" },
      { id: "r-car-2", rating: 4, comment: "Perfect for camping and lunches.", createdAt: new Date("2025-02-10"), authorName: "J. Gomez" },
    ],
  },

  {
    id: "veg-2",
    slug: "green-bean-flakes",
    name: "Green Bean Flakes",
    shortDescription: "Preserved flavor and texture — rehydrates quickly for stews and sides.",
    detailedDescription:
      "Green Bean Flakes are selected from young pods, blanched briefly and dehydrated to retain color and taste. Ideal for soups, casseroles, and quick side dishes.",
    category: { name: "Dehydrated Vegetables", slug: "vegetables" },
    images: [imageFor("img-gb-1", "Green bean flakes")],
    variants: [
      makeVariant("gv1", "GB-FLAKE-50", 50, 3.49, 80),
      makeVariant("gv2", "GB-FLAKE-125", 125, 7.49, 40),
      makeVariant("gv3", "GB-FLAKE-300", 300, 12.99, 15),
    ],
    ingredients: ["Dehydrated Green Beans"],
    nutritionalInfo: { servingSize: "15g", calories: 30, protein: 2.0, carbs: 5.0, fiber: 3.0, vitaminC: "20% DV" },
    reviewCount: 7,
    averageRating: 4.2,
    reviews: [
      { id: "r-gb-1", rating: 4, comment: "Good flavor when rehydrated.", createdAt: new Date("2025-01-20"), authorName: "A. Patel" },
    ],
  },

  {
    id: "pow-1",
    slug: "strawberry-powder",
    name: "Strawberry Powder",
    shortDescription: "Vibrant strawberry powder for smoothies, baking, and ice creams.",
    detailedDescription:
      "Made from sun-ripened berries and dehydrated into a fine powder, our Strawberry Powder adds natural color and flavor without added sugar.",
    category: { name: "Fruit Powders", slug: "powders" },
    images: [imageFor("img-st-1", "Strawberry powder pouch")],
    variants: [
      makeVariant("sp1", "ST-PWD-50", 50, 5.99, 60),
      makeVariant("sp2", "ST-PWD-125", 125, 12.99, 30),
    ],
    ingredients: ["Strawberry Powder"],
    nutritionalInfo: { servingSize: "1 tbsp (8g)", calories: 25, protein: 0.3, carbs: 6.0, fiber: 1.0, vitaminC: "10% DV" },
    reviewCount: 22,
    averageRating: 4.7,
    reviews: [
      { id: "r-st-1", rating: 5, comment: "Excellent for smoothies — tastes fresh!", createdAt: new Date("2025-02-12"), authorName: "M. Lee" },
    ],
  },

  {
    id: "kit-1",
    slug: "hearty-soup-kit",
    name: "Hearty Soup Kit",
    shortDescription: "All-in-one dehydrated soup mix — add water and enjoy a satisfying bowl.",
    detailedDescription:
      "A curated mix of dehydrated vegetables, herbs, and grains to create a hearty soup in minutes. Perfect for home meals or emergency kits.",
    category: { name: "Meal Kits & Mixes", slug: "kits" },
    images: [imageFor("img-soup-1", "Hearty soup kit contents")],
    variants: [
      makeVariant("hk1", "HK-SOUP-300", 300, 8.99, 120),
      makeVariant("hk2", "HK-SOUP-600", 600, 14.99, 60),
    ],
    ingredients: ["Dehydrated Carrot", "Dehydrated Onion", "Lentils", "Spices"],
    nutritionalInfo: { servingSize: "1 bowl (250g)", calories: 220, protein: 8, carbs: 30, fiber: 6 },
    reviewCount: 30,
    averageRating: 4.8,
    reviews: [
      { id: "r-hk-1", rating: 5, comment: "Comforting and easy to prepare.", createdAt: new Date("2025-03-01"), authorName: "L. Rivers" },
    ],
  },

  // Small set for other pages; create lighter detail objects for the rest
  {
    id: "veg-3",
    slug: "sweet-pea-flakes",
    name: "Sweet Pea Flakes",
    shortDescription: "Bright, sweet peas dried at low temperatures to preserve taste.",
    detailedDescription: "Ideal for adding a pop of color and sweetness to stews and purees.",
    category: { name: "Dehydrated Vegetables", slug: "vegetables" },
    images: [imageFor("img-pea-1", "Sweet peas")],
    variants: [makeVariant("pv1", "PV-FLAKE-50", 50, 2.99, 90)],
    ingredients: ["Dehydrated Peas"],
    nutritionalInfo: { servingSize: "15g", calories: 35, protein: 2.5, carbs: 6.5, fiber: 2.5 },
    reviewCount: 9,
    averageRating: 4.4,
    reviews: [],
  },

  {
    id: "pow-2",
    slug: "mango-powder",
    name: "Mango Powder",
    shortDescription: "Sun-ripened mango flavor concentrated into a shelf-stable powder.",
    detailedDescription: "Use in smoothies, sauces, or as a natural sweetener.",
    category: { name: "Fruit Powders", slug: "powders" },
    images: [imageFor("img-mango-1", "Mango powder")],
    variants: [makeVariant("mp1", "MP-PWD-50", 50, 6.49, 40)],
    ingredients: ["Mango Powder"],
    nutritionalInfo: { servingSize: "1 tbsp (8g)", calories: 28, protein: 0.2, carbs: 7, fiber: 0.8 },
    reviewCount: 11,
    averageRating: 4.5,
    reviews: [],
  },

  {
    id: "pow-3",
    slug: "blueberry-powder",
    name: "Blueberry Powder",
    shortDescription: "Antioxidant-rich powder to boost smoothies and oatmeal.",
    detailedDescription: "Full blueberry flavor with concentrated antioxidants.",
    category: { name: "Fruit Powders", slug: "powders" },
    images: [imageFor("img-blue-1", "Blueberry powder")],
    variants: [makeVariant("bp1", "BP-PWD-50", 50, 6.99, 45)],
    ingredients: ["Blueberry Powder"],
    nutritionalInfo: { servingSize: "1 tbsp (8g)", calories: 25, protein: 0.3, carbs: 6, fiber: 1 },
    reviewCount: 17,
    averageRating: 4.6,
    reviews: [],
  },

  {
    id: "kit-2",
    slug: "trail-mix-kit",
    name: "Trail Mix Kit",
    shortDescription: "A nutritious mix of nuts, seeds, and dried fruit — perfect for the trail.",
    detailedDescription: "Carefully portioned mixes for energy on the go.",
    category: { name: "Meal Kits & Mixes", slug: "kits" },
    images: [imageFor("img-trail-1", "Trail mix pouch")],
    variants: [makeVariant("tk1", "TK-MIX-150", 150, 6.99, 80)],
    ingredients: ["Almonds", "Cashews", "Pumpkin Seeds", "Dried Fruit"],
    nutritionalInfo: { servingSize: "40g", calories: 210, protein: 6, carbs: 14, fat: 13 },
    reviewCount: 14,
    averageRating: 4.4,
    reviews: [],
  },

  {
    id: "kit-3",
    slug: "instant-pasta-kit",
    name: "Instant Pasta Kit",
    shortDescription: "Dehydrated pasta and sauce mix — quick, tasty dinners in minutes.",
    detailedDescription: "Just add hot water for a filling meal.",
    category: { name: "Meal Kits & Mixes", slug: "kits" },
    images: [imageFor("img-pasta-1", "Pasta kit")],
    variants: [makeVariant("pk1", "PK-PASTA-250", 250, 7.99, 70)],
    ingredients: ["Dehydrated Pasta", "Tomato Sauce Powder", "Herbs"],
    nutritionalInfo: { servingSize: "200g", calories: 360, protein: 10, carbs: 60, fat: 7 },
    reviewCount: 9,
    averageRating: 4.3,
    reviews: [],
  },

  {
    id: "kit-4",
    slug: "curry-kit",
    name: "Instant Curry Kit",
    shortDescription: "A rich spice blend with dehydrated vegetables for easy curry bowls.",
    detailedDescription: "Aromatic spices and vegetables for a quick curry fix.",
    category: { name: "Meal Kits & Mixes", slug: "kits" },
    images: [imageFor("img-curry-1", "Curry kit")],
    variants: [makeVariant("ck1", "CK-CURRY-300", 300, 8.49, 50)],
    ingredients: ["Dehydrated Vegetables", "Curry Spice Blend"],
    nutritionalInfo: { servingSize: "240g", calories: 280, protein: 9, carbs: 35, fiber: 7 },
    reviewCount: 11,
    averageRating: 4.5,
    reviews: [],
  },

  {
    id: "kit-5",
    slug: "oats-breakfast-kit",
    name: "Breakfast Oats Kit",
    shortDescription: "Quick oatmeal kit with fruit powders and seeds for a complete breakfast.",
    detailedDescription: "Easy to prepare, nutrient-dense breakfast on the go.",
    category: { name: "Meal Kits & Mixes", slug: "kits" },
    images: [imageFor("img-oats-1", "Breakfast oats kit")],
    variants: [makeVariant("ok1", "OK-OATS-200", 200, 5.99, 100)],
    ingredients: ["Rolled Oats", "Fruit Powder Blend", "Chia Seeds"],
    nutritionalInfo: { servingSize: "60g", calories: 240, protein: 8, carbs: 40, fiber: 6 },
    reviewCount: 20,
    averageRating: 4.6,
    reviews: [],
  },

  {
    id: "pow-4",
    slug: "banana-powder",
    name: "Banana Powder",
    shortDescription: "Creamy banana flavor to thicken shakes and baked goods naturally.",
    detailedDescription: "Made from ripe bananas dehydrated and milled into a fine powder.",
    category: { name: "Fruit Powders", slug: "powders" },
    images: [imageFor("img-bn-1", "Banana powder")],
    variants: [makeVariant("bp2", "BP-BAN-50", 50, 4.99, 60)],
    ingredients: ["Banana Powder"],
    nutritionalInfo: { servingSize: "1 tbsp (8g)", calories: 30, protein: 0.4, carbs: 7, fiber: 1 },
    reviewCount: 6,
    averageRating: 4.2,
    reviews: [],
  },

  {
    id: "pow-5",
    slug: "apple-powder",
    name: "Apple Powder",
    shortDescription: "Mild, sweet apple powder — great for baking and sauces.",
    detailedDescription: "A versatile apple powder made from quality fruit.",
    category: { name: "Fruit Powders", slug: "powders" },
    images: [imageFor("img-ap-1", "Apple powder")],
    variants: [makeVariant("ap1", "AP-PWD-50", 50, 5.49, 40)],
    ingredients: ["Apple Powder"],
    nutritionalInfo: { servingSize: "1 tbsp (8g)", calories: 24, protein: 0.2, carbs: 6, fiber: 1 },
    reviewCount: 8,
    averageRating: 4.3,
    reviews: [],
  },
];

export function getMockCatalogProducts(filters: CatalogFilters = {}): CatalogProduct[] {
  let items = MOCK_CATALOG_PRODUCTS.slice(0);

  if (filters.category) {
    items = items.filter((p) => p.categorySlug === filters.category);
  }

  if (typeof filters.minPrice === "number") {
    items = items.filter((p) => p.maxPrice >= filters.minPrice!);
  }

  if (typeof filters.maxPrice === "number") {
    items = items.filter((p) => p.minPrice <= filters.maxPrice!);
  }

  if (typeof filters.limit === "number" && filters.limit > 0) {
    items = items.slice(0, filters.limit);
  }

  return items;
}

export function getMockProductBySlug(slug: string): ProductDetail | null {
  return MOCK_PRODUCT_DETAILS.find((p) => p.slug === slug) ?? null;
}

export function getMockFilterMetadata() {
  const all = MOCK_CATALOG_PRODUCTS;
  const min = all.reduce((acc, p) => Math.min(acc, p.minPrice), Number.POSITIVE_INFINITY);
  const max = all.reduce((acc, p) => Math.max(acc, p.maxPrice), 0);

  return {
    categories: MOCK_CATEGORIES,
    minPrice: min === Number.POSITIVE_INFINITY ? 0 : min,
    maxPrice: max,
  };
}
