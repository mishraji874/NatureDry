"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

interface ProductImage {
  id: string;
  url: string;
  altText: string;
  isPrimary: boolean;
  sortOrder: number;
}

interface ProductVariant {
  id: string;
  sku: string;
  weightGrams: number;
  price: number;
  stockQuantity: number;
}

interface ProductDetailClientProps {
  name: string;
  shortDescription: string;
  categoryName: string;
  images: ProductImage[];
  variants: ProductVariant[];
  averageRating: number;
  reviewCount: number;
}

const formatPrice = (value: number): string => {
  return `$${value.toFixed(2)}`;
};

const formatWeight = (grams: number): string => {
  if (grams >= 1000) {
    const kilograms = grams / 1000;
    return Number.isInteger(kilograms) ? `${kilograms}kg` : `${kilograms}kg`;
  }

  return `${grams}g`;
};

export default function ProductDetailClient({
  name,
  shortDescription,
  categoryName,
  images,
  variants,
  averageRating,
  reviewCount,
}: ProductDetailClientProps) {
  const [activeImageId, setActiveImageId] = useState(images[0]?.id ?? "");
  const [selectedVariantId, setSelectedVariantId] = useState(
    variants[0]?.id ?? ""
  );

  const activeImage = useMemo(() => {
    return images.find((image) => image.id === activeImageId) ?? images[0];
  }, [activeImageId, images]);

  const selectedVariant = useMemo(() => {
    return variants.find((variant) => variant.id === selectedVariantId) ?? variants[0];
  }, [selectedVariantId, variants]);

  const isSelectedVariantInStock = Boolean(
    selectedVariant && selectedVariant.stockQuantity > 0
  );

  return (
    <section className={styles.productLayout}>
      <div className={styles.galleryPanel}>
        <div className={styles.mainImageWrapper}>
          {activeImage ? (
            <Image
              src={activeImage.url}
              alt={activeImage.altText}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className={styles.mainImage}
            />
          ) : (
            <div className={styles.imageFallback}>No product image available.</div>
          )}
        </div>

        {images.length > 1 ? (
          <div className={styles.thumbnailRow}>
            {images.map((image) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setActiveImageId(image.id)}
                className={`${styles.thumbnailButton} ${
                  image.id === activeImage?.id ? styles.thumbnailButtonActive : ""
                }`}
                aria-label={`View image: ${image.altText}`}
              >
                <Image
                  src={image.url}
                  alt={image.altText}
                  fill
                  sizes="96px"
                  className={styles.thumbnailImage}
                />
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div className={styles.detailsPanel}>
        <span className={styles.categoryBadge}>{categoryName}</span>
        <h1>{name}</h1>
        <p className={styles.shortDescription}>{shortDescription}</p>

        <p className={styles.ratingSummary}>
          {reviewCount > 0
            ? `★ ${averageRating.toFixed(1)} (${reviewCount} review${
                reviewCount === 1 ? "" : "s"
              })`
            : "No reviews yet"}
        </p>

        <div className={styles.priceWrap}>
          <span className={styles.priceLabel}>Selected price</span>
          <strong className={styles.priceValue}>
            {selectedVariant ? formatPrice(selectedVariant.price) : "N/A"}
          </strong>
        </div>

        <div className={styles.variantSection}>
          <h2>Select weight</h2>
          <div className={styles.variantGrid}>
            {variants.map((variant) => (
              <button
                key={variant.id}
                type="button"
                className={`${styles.variantButton} ${
                  variant.id === selectedVariant?.id ? styles.variantButtonActive : ""
                }`}
                onClick={() => setSelectedVariantId(variant.id)}
              >
                <span>{formatWeight(variant.weightGrams)}</span>
                <small>{formatPrice(variant.price)}</small>
              </button>
            ))}
          </div>
        </div>

        <p className={styles.stockInfo}>
          {selectedVariant
            ? isSelectedVariantInStock
              ? `${selectedVariant.stockQuantity} units in stock`
              : "Out of stock for the selected variant"
            : "Variant unavailable"}
        </p>

        <button
          type="button"
          className={styles.addToCartButton}
          disabled={!selectedVariant || !isSelectedVariantInStock}
        >
          {isSelectedVariantInStock ? "Add to Cart" : "Unavailable"}
        </button>

        <p className={styles.phaseHint}>
          Cart integration will be connected in Phase 5.
        </p>
      </div>
    </section>
  );
}
