"use client";

import { useMemo } from "react";
import { Button } from "@/components/atoms";
import styles from "./VariantSelector.module.css";

export interface Variant {
  id: string;
  sku: string;
  weightGrams: number;
  price: number;
  stockQuantity: number;
}

export interface VariantSelectorProps {
  variants: Variant[];
  selectedVariantId?: string;
  onSelectVariant: (variantId: string) => void;
  onAddToCart?: (variantId: string) => void;
  addToCartLabel?: string;
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

export function VariantSelector({
  variants,
  selectedVariantId,
  onSelectVariant,
  onAddToCart,
  addToCartLabel = "Add to Cart",
}: VariantSelectorProps) {
  const selectedVariant = useMemo(() => {
    return variants.find((v) => v.id === selectedVariantId) ?? variants[0];
  }, [selectedVariantId, variants]);

  const isInStock = Boolean(selectedVariant && selectedVariant.stockQuantity > 0);

  const handleAddToCart = () => {
    if (selectedVariant) {
      onAddToCart?.(selectedVariant.id);
    }
  };

  if (variants.length === 0) {
    return (
      <div className={styles.selector}>
        <p className={styles.noVariants}>No variants available</p>
      </div>
    );
  }

  return (
    <div className={styles.selector}>
      {/* Weight/Size Selection */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Select Weight</h3>
        <div className={styles.variantGrid}>
          {variants.map((variant) => (
            <button
              key={variant.id}
              type="button"
              className={`${styles.variantButton} ${
                variant.id === selectedVariant?.id ? styles.variantButtonActive : ""
              } ${variant.stockQuantity === 0 ? styles.variantButtonDisabled : ""}`}
              onClick={() => onSelectVariant(variant.id)}
              disabled={variant.stockQuantity === 0}
              aria-pressed={variant.id === selectedVariant?.id}
            >
              <span className={styles.weight}>{formatWeight(variant.weightGrams)}</span>
              <span className={styles.price}>{formatPrice(variant.price)}</span>
              {variant.stockQuantity === 0 && (
                <span className={styles.outOfStock}>Out of Stock</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Price Display */}
      {selectedVariant && (
        <div className={styles.section}>
          <div className={styles.priceDisplay}>
            <span className={styles.priceLabel}>Price</span>
            <strong className={styles.priceValue}>
              {formatPrice(selectedVariant.price)}
            </strong>
          </div>
        </div>
      )}

      {/* Stock Status */}
      {selectedVariant && (
        <div className={styles.section}>
          <p
            className={`${styles.stockStatus} ${
              isInStock ? styles.stockIn : styles.stockOut
            }`}
          >
            {isInStock
              ? `${selectedVariant.stockQuantity} unit${
                  selectedVariant.stockQuantity === 1 ? "" : "s"
                } available`
              : "Out of stock"}
          </p>
        </div>
      )}

      {/* Add to Cart Button */}
      <div className={styles.section}>
        <Button
          variant="primary"
          size="lg"
          fullWidth
          disabled={!isInStock}
          onClick={handleAddToCart}
        >
          {isInStock ? addToCartLabel : "Unavailable"}
        </Button>
      </div>
    </div>
  );
}

export default VariantSelector;
