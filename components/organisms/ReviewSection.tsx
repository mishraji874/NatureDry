"use client";

import { StarRating, Badge } from "@/components/atoms";
import styles from "./ReviewSection.module.css";

export interface Review {
  id: string;
  rating: number;
  comment: string;
  authorName: string;
  createdAt: Date;
}

export interface ReviewSectionProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
  onWriteReview?: () => void;
}

const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

const getRatingDistribution = (reviews: Review[]) => {
  const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.forEach((review) => {
    distribution[review.rating as keyof typeof distribution]++;
  });
  return distribution;
};

export function ReviewSection({
  reviews,
  averageRating,
  totalReviews,
  onWriteReview,
}: ReviewSectionProps) {
  const distribution = getRatingDistribution(reviews);
  const maxCount = Math.max(...Object.values(distribution));

  return (
    <div className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>Customer Reviews</h2>
        <button
          type="button"
          className={styles.writeReviewBtn}
          onClick={onWriteReview}
        >
          ✍️ Write a Review
        </button>
      </div>

      {/* Rating Summary */}
      <div className={styles.ratingSummary}>
        <div className={styles.ratingScore}>
          <div className={styles.scoreValue}>{averageRating.toFixed(1)}</div>
          <div className={styles.scoreOutOf}>out of 5</div>
        </div>

        <div className={styles.ratingStars}>
          <StarRating
            value={averageRating}
            count={totalReviews}
            showValue
            size="md"
          />
        </div>

        <div className={styles.ratingInfo}>
          Based on <strong>{totalReviews}</strong> customer review
          {totalReviews !== 1 ? "s" : ""}
        </div>
      </div>

      {/* Rating Distribution */}
      {totalReviews > 0 && (
        <div className={styles.distribution}>
          {[5, 4, 3, 2, 1].map((stars) => {
            const count = distribution[stars as keyof typeof distribution];
            const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0;

            return (
              <div key={stars} className={styles.distributionRow}>
                <span className={styles.distributionLabel}>
                  {stars} ★
                </span>
                <div className={styles.distributionBar}>
                  <div
                    className={styles.distributionFill}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className={styles.distributionCount}>({count})</span>
              </div>
            );
          })}
        </div>
      )}

      {/* Reviews List */}
      {reviews.length > 0 ? (
        <div className={styles.reviewsList}>
          {reviews.map((review) => (
            <article key={review.id} className={styles.review}>
              <div className={styles.reviewHeader}>
                <div>
                  <h4 className={styles.reviewAuthor}>{review.authorName}</h4>
                  <time className={styles.reviewDate}>
                    {formatDate(review.createdAt)}
                  </time>
                </div>
                <Badge variant="secondary" size="sm">
                  {review.rating} ★
                </Badge>
              </div>

              <div className={styles.reviewStars}>
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>

              <p className={styles.reviewComment}>{review.comment}</p>
            </article>
          ))}
        </div>
      ) : (
        <div className={styles.noReviews}>
          <p>No reviews yet. Be the first to review this product!</p>
        </div>
      )}
    </div>
  );
}

export default ReviewSection;
