"use client";

import { useState } from "react";
import { Button, Input, Label } from "@/components/atoms";
import styles from "./ProductFilters.module.css";

export interface FilterCategory {
  id: string;
  name: string;
  slug: string;
}

export interface ProductFiltersProps {
  categories: FilterCategory[];
  minPriceDefault: number;
  maxPriceDefault: number;
  initialCategory?: string;
  initialMinPrice?: string;
  initialMaxPrice?: string;
  onApplyFilters: (filters: {
    category: string;
    minPrice: string;
    maxPrice: string;
  }) => void;
  onResetFilters?: () => void;
  isLoading?: boolean;
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

export function ProductFilters({
  categories,
  minPriceDefault,
  maxPriceDefault,
  initialCategory = "",
  initialMinPrice = "",
  initialMaxPrice = "",
  onApplyFilters,
  onResetFilters,
  isLoading = false,
}: ProductFiltersProps) {
  const [category, setCategory] = useState(initialCategory);
  const [minPrice, setMinPrice] = useState(parsePriceInput(initialMinPrice));
  const [maxPrice, setMaxPrice] = useState(parsePriceInput(initialMaxPrice));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onApplyFilters({
      category,
      minPrice: parsePriceInput(minPrice),
      maxPrice: parsePriceInput(maxPrice),
    });
  };

  const handleReset = () => {
    setCategory("");
    setMinPrice("");
    setMaxPrice("");
    onResetFilters?.();
  };

  const visiblePriceRangeLabel = `${formatPrice(minPriceDefault)} - ${formatPrice(
    maxPriceDefault
  )}`;

  return (
    <form className={styles.filters} onSubmit={handleSubmit}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Filter Products</legend>

        {/* Category Filter */}
        <div className={styles.filterGroup}>
          <Label htmlFor="category-filter">Category</Label>
          <select
            id="category-filter"
            className={styles.select}
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            disabled={isLoading}
          >
            <option value="">All Categories</option>
            {categories.map((item) => (
              <option key={item.id} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* Min Price Filter */}
        <div className={styles.filterGroup}>
          <Label htmlFor="min-price-filter">Min Price</Label>
          <Input
            id="min-price-filter"
            type="number"
            inputMode="decimal"
            min={0}
            step="0.01"
            placeholder={minPriceDefault.toFixed(2)}
            value={minPrice}
            onChange={(event) => setMinPrice(event.target.value)}
            disabled={isLoading}
          />
          <span className={styles.helpText}>
            Starting from {formatPrice(minPriceDefault)}
          </span>
        </div>

        {/* Max Price Filter */}
        <div className={styles.filterGroup}>
          <Label htmlFor="max-price-filter">Max Price</Label>
          <Input
            id="max-price-filter"
            type="number"
            inputMode="decimal"
            min={0}
            step="0.01"
            placeholder={maxPriceDefault.toFixed(2)}
            value={maxPrice}
            onChange={(event) => setMaxPrice(event.target.value)}
            disabled={isLoading}
          />
          <span className={styles.helpText}>
            Up to {formatPrice(maxPriceDefault)}
          </span>
        </div>

        {/* Price Range Display */}
        <div className={styles.priceRangeInfo}>
          <span className={styles.priceLabel}>Available range:</span>
          <span className={styles.priceValue}>{visiblePriceRangeLabel}</span>
        </div>
      </fieldset>

      {/* Actions */}
      <div className={styles.filterActions}>
        <Button
          type="submit"
          variant="primary"
          size="md"
          fullWidth
          disabled={isLoading}
        >
          {isLoading ? "Filtering..." : "Apply Filters"}
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="md"
          fullWidth
          disabled={isLoading}
          onClick={handleReset}
        >
          Reset
        </Button>
      </div>
    </form>
  );
}

export default ProductFilters;
