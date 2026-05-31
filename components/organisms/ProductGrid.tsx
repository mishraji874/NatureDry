"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge, Button } from "@/components/atoms";
import styles from "./ProductGrid.module.css";

export interface GridProduct {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  categoryName: string;
  primaryImage: {
    url: string;
    altText: string;
  } | null;
  minPrice: number;
  maxPrice: number;
  reviewCount: number;
  averageRating: number;
  inStock: boolean;
  isOnSale?: boolean;
  originalPrice?: number;
}

export interface ProductGridProps {
  products: GridProduct[];
  isLoading?: boolean;
  errorMessage?: string | null;
  emptyMessage?: string;
  onAddToCart?: (productId: string) => void;
}

const formatPrice = (value: number): string => {
  return `$${value.toFixed(2)}`;
};

const calculateDiscount = (original: number, sale: number): number => {
  if (original <= sale) return 0;
  return Math.round(((original - sale) / original) * 100);
};

export function ProductGrid({
  products,
  isLoading = false,
  errorMessage = null,
  emptyMessage = "No products found.",
  onAddToCart,
}: ProductGridProps) {
  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <div className={styles.loadingCard}>
          <div className={styles.spinner} />
          <p>Loading products...</p>
        </div>
      ) : errorMessage ? (
        <div className={styles.errorCard}>
          <span className={styles.errorIcon}>⚠️</span>
          <p>{errorMessage}</p>
        </div>
      ) : products.length === 0 ? (
        <div className={styles.emptyCard}>
          <span className={styles.emptyIcon}>🔍</span>
          <p>{emptyMessage}</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              {/* Image Wrapper */}
              <Link
                href={`/products/${product.slug}`}
                className={styles.imageWrapper}
              >
                {product.primaryImage ? (
                  <Image
                    src={product.primaryImage.url}
                    alt={product.primaryImage.altText}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.image}
                  />
                ) : (
                  <div className={styles.imageFallback}>No image</div>
                )}

                {/* Stock Badge */}
                <div className={styles.badgeGroup}>
                  <Badge
                    variant={product.inStock ? "success" : "error"}
                    size="sm"
                  >
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </Badge>

                  {/* Sale Badge */}
                  {product.isOnSale && product.originalPrice ? (
                    <Badge variant="secondary" size="sm">
                      {calculateDiscount(product.originalPrice, product.minPrice)}% OFF
                    </Badge>
                  ) : null}
                </div>
              </Link>

              {/* Content */}
              <div className={styles.cardContent}>
                <p className={styles.categoryLabel}>{product.categoryName}</p>
                <h2 className={styles.productTitle}>{product.name}</h2>
                <p className={styles.productDescription}>
                  {product.shortDescription}
                </p>

                {/* Footer */}
                <div className={styles.cardFooter}>
                  <div className={styles.priceWrap}>
                    <strong className={styles.price}>
                      {product.minPrice === product.maxPrice
                        ? formatPrice(product.minPrice)
                        : `${formatPrice(product.minPrice)} - ${formatPrice(
                            product.maxPrice
                          )}`}
                    </strong>
                    {product.isOnSale && product.originalPrice && (
                      <span className={styles.originalPrice}>
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  <div className={styles.ratingWrap}>
                    {product.reviewCount > 0 ? (
                      <span className={styles.rating}>
                        ★ {product.averageRating.toFixed(1)} (
                        {product.reviewCount})
                      </span>
                    ) : (
                      <span className={styles.ratingEmpty}>No reviews</span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className={styles.actions}>
                  <Button
                    variant="primary"
                    size="sm"
                    fullWidth
                    asChild
                  >
                    <Link href={`/products/${product.slug}`}>
                      View Details
                    </Link>
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    fullWidth
                    disabled={!product.inStock}
                    onClick={() => onAddToCart?.(product.id)}
                  >
                    {product.inStock ? "Add to Cart" : "Unavailable"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductGrid;
