"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./product-catalog-client.module.css";

interface CategoryOption {
  id: string;
  name: string;
  slug: string;
}

interface CatalogProduct {
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

interface ProductsApiResponse {
  products: CatalogProduct[];
}

interface ProductCatalogClientProps {
  categories: CategoryOption[];
  defaultMinPrice: number;
  defaultMaxPrice: number;
  initialCategory: string;
  initialMinPrice: string;
  initialMaxPrice: string;
}

const formatPrice = (value: number): string => {
  return `$${value.toFixed(2)}`;
};

const parsePriceInput = (value: string): string => {
  const trimmed = value.trim();
  if (trimmed.length === 0) {
    return "";
  }

  const parsed = Number(trimmed);
  if (!Number.isFinite(parsed) || parsed < 0) {
    return "";
  }

  return trimmed;
};

export function ProductCatalogClient({
  categories,
  defaultMinPrice,
  defaultMaxPrice,
  initialCategory,
  initialMinPrice,
  initialMaxPrice,
}: ProductCatalogClientProps) {
  const [category, setCategory] = useState(initialCategory);
  const [minPrice, setMinPrice] = useState(parsePriceInput(initialMinPrice));
  const [maxPrice, setMaxPrice] = useState(parsePriceInput(initialMaxPrice));
  const [appliedCategory, setAppliedCategory] = useState(initialCategory);
  const [appliedMinPrice, setAppliedMinPrice] = useState(
    parsePriceInput(initialMinPrice)
  );
  const [appliedMaxPrice, setAppliedMaxPrice] = useState(
    parsePriceInput(initialMaxPrice)
  );
  const [products, setProducts] = useState<CatalogProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const queryString = useMemo(() => {
    const params = new URLSearchParams();

    if (appliedCategory) {
      params.set("category", appliedCategory);
    }

    if (appliedMinPrice) {
      params.set("minPrice", appliedMinPrice);
    }

    if (appliedMaxPrice) {
      params.set("maxPrice", appliedMaxPrice);
    }

    return params.toString();
  }, [appliedCategory, appliedMinPrice, appliedMaxPrice]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const loadProducts = async () => {
      setIsLoading(true);
      setErrorMessage(null);

      try {
        const response = await fetch(
          `/api/products${queryString ? `?${queryString}` : ""}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Unable to fetch products.");
        }

        const payload = (await response.json()) as ProductsApiResponse;
        if (isMounted) {
          setProducts(payload.products);
        }
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        if (isMounted) {
          setErrorMessage("Could not load products right now. Please retry.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [queryString]);

  useEffect(() => {
    const nextUrl = queryString ? `/products?${queryString}` : "/products";
    window.history.replaceState(null, "", nextUrl);
  }, [queryString]);

  const handleApplyFilters = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAppliedCategory(category);
    setAppliedMinPrice(parsePriceInput(minPrice));
    setAppliedMaxPrice(parsePriceInput(maxPrice));
  };

  const handleResetFilters = () => {
    setCategory("");
    setMinPrice("");
    setMaxPrice("");
    setAppliedCategory("");
    setAppliedMinPrice("");
    setAppliedMaxPrice("");
  };

  const visiblePriceRangeLabel = `${formatPrice(defaultMinPrice)} - ${formatPrice(
    defaultMaxPrice
  )}`;

  return (
    <div className={styles.wrapper}>
      <form className={styles.filters} onSubmit={handleApplyFilters}>
        <div className={styles.filterGroup}>
          <label htmlFor="category-filter">Category</label>
          <select
            id="category-filter"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((item) => (
              <option key={item.id} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="min-price-filter">Min Price</label>
          <input
            id="min-price-filter"
            type="number"
            inputMode="decimal"
            min={0}
            step="0.01"
            placeholder={defaultMinPrice.toFixed(2)}
            value={minPrice}
            onChange={(event) => setMinPrice(event.target.value)}
          />
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="max-price-filter">Max Price</label>
          <input
            id="max-price-filter"
            type="number"
            inputMode="decimal"
            min={0}
            step="0.01"
            placeholder={defaultMaxPrice.toFixed(2)}
            value={maxPrice}
            onChange={(event) => setMaxPrice(event.target.value)}
          />
        </div>

        <div className={styles.filterActions}>
          <button type="submit" className={styles.applyButton}>
            Apply Filters
          </button>
          <button
            type="button"
            className={styles.resetButton}
            onClick={handleResetFilters}
          >
            Reset
          </button>
        </div>
      </form>

      <div className={styles.resultsHeader}>
        <p>
          Showing products within <strong>{visiblePriceRangeLabel}</strong>
        </p>
        <p>
          <strong>{products.length}</strong> product
          {products.length === 1 ? "" : "s"} found
        </p>
      </div>

      {errorMessage ? (
        <div className={styles.errorCard}>{errorMessage}</div>
      ) : null}

      {isLoading ? (
        <div className={styles.loadingCard}>Loading products...</div>
      ) : null}

      {!isLoading && !errorMessage && products.length === 0 ? (
        <div className={styles.emptyCard}>
          No products match your selected filters.
        </div>
      ) : null}

      {!isLoading && !errorMessage && products.length > 0 ? (
        <div className={styles.grid}>
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className={styles.productCard}
            >
              <div className={styles.imageWrapper}>
                {product.primaryImage ? (
                  <Image
                    src={product.primaryImage.url}
                    alt={product.primaryImage.altText}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.image}
                  />
                ) : (
                  <div className={styles.imageFallback}>No image available</div>
                )}
                <span
                  className={`${styles.stockBadge} ${
                    product.inStock ? styles.stockIn : styles.stockOut
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              <div className={styles.cardContent}>
                <span className={styles.categoryLabel}>{product.categoryName}</span>
                <h2 className={styles.productTitle}>{product.name}</h2>
                <p className={styles.productDescription}>
                  {product.shortDescription}
                </p>

                <div className={styles.cardFooter}>
                  <strong className={styles.price}>
                    {product.minPrice === product.maxPrice
                      ? formatPrice(product.minPrice)
                      : `${formatPrice(product.minPrice)} - ${formatPrice(
                          product.maxPrice
                        )}`}
                  </strong>
                  <span className={styles.rating}>
                    {product.reviewCount > 0
                      ? `★ ${product.averageRating.toFixed(1)} (${product.reviewCount})`
                      : "No reviews yet"}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
