import React from "react";
import styles from "./Rating.module.css";

interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Current rating value (0-5)
   */
  value: number;

  /**
   * Maximum rating value (default: 5)
   */
  max?: number;

  /**
   * Size of stars: sm (16px), md (24px), lg (32px)
   */
  size?: "sm" | "md" | "lg";

  /**
   * Color variant: primary, secondary, warning
   */
  variant?: "primary" | "secondary" | "warning";

  /**
   * Whether rating can be changed by user interaction
   */
  interactive?: boolean;

  /**
   * Callback when rating is changed (only if interactive)
   */
  onRatingChange?: (newRating: number) => void;

  /**
   * Show count of reviews/ratings
   */
  count?: number;

  /**
   * Show numeric rating alongside stars
   */
  showValue?: boolean;
}

/**
 * Rating Component
 * Displays star ratings with optional interactivity.
 * Supports different sizes and variants with accessible keyboard navigation.
 * Commonly used for product reviews and user feedback.
 */
export const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      value,
      max = 5,
      size = "md",
      variant = "primary",
      interactive = false,
      onRatingChange,
      count,
      showValue = false,
      className,
      ...props
    },
    ref,
  ) => {
    const [hoverValue, setHoverValue] = React.useState<number | null>(null);
    const displayValue = hoverValue !== null ? hoverValue : value;

    const handleStarClick = (starValue: number) => {
      if (interactive && onRatingChange) {
        onRatingChange(starValue);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent, starIndex: number) => {
      if (!interactive) return;

      if (e.key === "ArrowRight" && starIndex < max - 1) {
        e.preventDefault();
        const nextButton = document.querySelector(
          `[data-star-index="${starIndex + 1}"]`,
        ) as HTMLElement;
        nextButton?.focus();
      } else if (e.key === "ArrowLeft" && starIndex > 0) {
        e.preventDefault();
        const prevButton = document.querySelector(
          `[data-star-index="${starIndex - 1}"]`,
        ) as HTMLElement;
        prevButton?.focus();
      }
    };

    return (
      <div
        ref={ref}
        className={`${styles.wrapper} ${className || ""}`}
        {...props}
      >
        <div
          className={`
            ${styles.rating}
            ${styles[`size-${size}`]}
            ${styles[`variant-${variant}`]}
            ${interactive ? styles.interactive : ""}
          `}
          onMouseLeave={() => setHoverValue(null)}
          role="slider"
          aria-label={`Rating: ${value} out of ${max} stars`}
          aria-valuenow={Math.round(value * 10) / 10}
          aria-valuemin={0}
          aria-valuemax={max}
        >
          {Array.from({ length: max }).map((_, index) => {
            const starValue = index + 1;
            const isFilled = starValue <= Math.floor(displayValue);
            const isPartial =
              starValue - 0.5 <= displayValue && displayValue < starValue;

            return (
              <button
                key={index}
                className={`
                  ${styles.star}
                  ${isFilled ? styles.filled : ""}
                  ${isPartial ? styles.partial : ""}
                  ${starValue <= displayValue ? styles.active : ""}
                `}
                onClick={() => handleStarClick(starValue)}
                onMouseEnter={() => interactive && setHoverValue(starValue)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                data-star-index={index}
                aria-label={`Rate ${starValue} out of ${max} stars`}
                tabIndex={interactive ? 0 : -1}
                disabled={!interactive}
              >
                <span className={styles.starIcon}>★</span>
              </button>
            );
          })}
        </div>

        {(showValue || count) && (
          <span className={styles.meta}>
            {showValue && (
              <span className={styles.value}>
                {Math.round(value * 10) / 10}
              </span>
            )}
            {count && <span className={styles.count}>({count})</span>}
          </span>
        )}
      </div>
    );
  },
);

Rating.displayName = "Rating";
