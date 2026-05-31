import React from "react";
import { Rating } from "@/components/atoms/Rating";
import styles from "./StarRating.module.css";

interface StarRatingProps {
  /**
   * Current rating value (0-5)
   */
  value: number;

  /**
   * Number of reviews/ratings
   */
  count?: number;

  /**
   * Rating variant: primary, secondary, warning
   */
  variant?: "primary" | "secondary" | "warning";

  /**
   * Whether rating is interactive
   */
  interactive?: boolean;

  /**
   * Callback when user changes rating
   */
  onChange?: (rating: number) => void;

  /**
   * Show detailed breakdown of ratings (e.g., 5 stars: 120, 4 stars: 45, etc.)
   */
  breakdown?: Array<{ stars: number; count: number }>;

  /**
   * Additional label or description
   */
  label?: string;

  /**
   * Size variant: sm, md, lg
   */
  size?: "sm" | "md" | "lg";
}

/**
 * StarRating Component
 * Molecule combining Rating atom with additional metadata.
 * Displays average rating, review count, and optional rating breakdown.
 * Supports interactive rating submission with visual feedback.
 */
export const StarRating = React.forwardRef<HTMLDivElement, StarRatingProps>(
  (
    {
      value,
      count = 0,
      variant = "primary",
      interactive = false,
      onChange,
      breakdown,
      label,
      size = "md",
    },
    ref,
  ) => {
    const [selectedRating, setSelectedRating] = React.useState<number | null>(
      null,
    );
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleRatingChange = async (newRating: number) => {
      setSelectedRating(newRating);

      if (onChange) {
        setIsSubmitting(true);
        try {
          onChange(newRating);
          // Give feedback to user
          setTimeout(() => {
            setSelectedRating(null);
            setIsSubmitting(false);
          }, 500);
        } catch {
          setIsSubmitting(false);
        }
      }
    };

    const totalReviews =
      breakdown?.reduce((sum, item) => sum + item.count, 0) || count;
    const getPercentage = (itemCount: number) =>
      totalReviews > 0 ? Math.round((itemCount / totalReviews) * 100) : 0;

    return (
      <div ref={ref} className={`${styles.wrapper} ${styles[`size-${size}`]}`}>
        {/* Main Rating Display */}
        <div className={styles.header}>
          <div className={styles.ratingDisplay}>
            <span className={styles.ratingValue}>
              {Math.round(value * 10) / 10}
            </span>
            <span className={styles.outOf}> / 5</span>
          </div>

          <div className={styles.ratingStars}>
            <Rating
              value={value}
              variant={variant}
              size={size === "sm" ? "sm" : size === "lg" ? "lg" : "md"}
              showValue={false}
              count={count}
            />
          </div>

          {label && <p className={styles.label}>{label}</p>}
        </div>

        {/* Interactive Rating Section */}
        {interactive && (
          <div className={styles.interactive}>
            <label htmlFor="rating-input" className={styles.interactiveLabel}>
              Rate this product
            </label>
            <div
              className={`${styles.interactiveRating} ${
                isSubmitting ? styles.submitting : ""
              }`}
            >
              <Rating
                value={selectedRating || 0}
                variant={variant}
                size="md"
                interactive
                onRatingChange={handleRatingChange}
              />
            </div>
            {selectedRating && !isSubmitting && (
              <p className={styles.ratingMessage}>Thank you for rating!</p>
            )}
          </div>
        )}

        {/* Rating Breakdown (if provided) */}
        {breakdown && breakdown.length > 0 && (
          <div className={styles.breakdown}>
            <p className={styles.breakdownTitle}>Rating Breakdown</p>
            <div className={styles.breakdownList}>
              {breakdown.map((item) => (
                <div key={item.stars} className={styles.breakdownItem}>
                  <span className={styles.breakdownLabel}>
                    {item.stars} star{item.stars !== 1 ? "s" : ""}
                  </span>
                  <div className={styles.breakdownBar}>
                    <div
                      className={styles.breakdownBarFill}
                      style={{
                        width: `${getPercentage(item.count)}%`,
                      }}
                    />
                  </div>
                  <span className={styles.breakdownCount}>{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Total Reviews */}
        {totalReviews > 0 && (
          <p className={styles.totalReviews}>
            Based on {totalReviews} review{totalReviews !== 1 ? "s" : ""}
          </p>
        )}
      </div>
    );
  },
);

StarRating.displayName = "StarRating";
