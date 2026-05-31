import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { Rating } from '@/components/atoms/Rating';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  /**
   * Product unique identifier
   */
  id: string;

  /**
   * Product name/title
   */
  name: string;

  /**
   * Product image URL
   */
  image: string;

  /**
   * Product image alt text
   */
  imageAlt: string;

  /**
   * Current price (can show as sale price with originalPrice)
   */
  price: number;

  /**
   * Original price (shows strikethrough if provided)
   */
  originalPrice?: number;

  /**
   * Star rating (0-5)
   */
  rating: number;

  /**
   * Number of reviews
   */
  reviewCount: number;

  /**
   * Sale/discount badge text (e.g., "20% OFF")
   */
  saleLabel?: string;

  /**
   * Product description preview
   */
  description?: string;

  /**
   * Availability status
   */
  inStock?: boolean;

  /**
   * Callback when product is clicked
   */
  onClick?: (productId: string) => void;

  /**
   * Callback when add to cart is clicked
   */
  onAddToCart?: (productId: string) => void;
}

/**
 * ProductCard Component
 * Composite molecule displaying product information in a card layout.
 * Includes image, name, price, rating, stock status, and CTA button.
 * Fully responsive with micro-animations on hover.
 */
export const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (
    {
      id,
      name,
      image,
      imageAlt,
      price,
      originalPrice,
      rating,
      reviewCount,
      saleLabel,
      description,
      inStock = true,
      onClick,
      onAddToCart,
    },
    ref
  ) => {
    const discountPercent = originalPrice
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0;

    const handleClick = () => {
      onClick?.(id);
    };

    const handleAddToCart = (e: React.MouseEvent) => {
      e.stopPropagation();
      onAddToCart?.(id);
    };

    return (
      <div
        ref={ref}
        className={styles.card}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick();
          }
        }}
      >
        {/* Image Container */}
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt={imageAlt}
            width={300}
            height={300}
            className={styles.image}
            priority={false}
          />

          {/* Sale Badge */}
          {saleLabel && (
            <Badge
              variant="secondary"
              size="lg"
              className={styles.saleBadge}
            >
              {saleLabel}
            </Badge>
          )}

          {/* Stock Status */}
          {!inStock && (
            <div className={styles.outOfStock}>
              <span>Out of Stock</span>
            </div>
          )}
        </div>

        {/* Content Container */}
        <div className={styles.content}>
          {/* Product Name */}
          <h3 className={styles.name}>{name}</h3>

          {/* Description */}
          {description && (
            <p className={styles.description}>{description}</p>
          )}

          {/* Rating & Reviews */}
          <div className={styles.ratingWrapper}>
            <Rating
              value={rating}
              size="sm"
              variant="primary"
              showValue={false}
              count={reviewCount}
            />
          </div>

          {/* Price Section */}
          <div className={styles.priceSection}>
            <div className={styles.priceWrapper}>
              <span className={styles.price}>
                ${price.toFixed(2)}
              </span>
              {originalPrice && (
                <>
                  <span className={styles.originalPrice}>
                    ${originalPrice.toFixed(2)}
                  </span>
                  {discountPercent > 0 && (
                    <span className={styles.discount}>
                      -{discountPercent}%
                    </span>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button
            variant="primary"
            size="md"
            fullWidth
            disabled={!inStock}
            onClick={handleAddToCart}
            className={styles.ctaButton}
          >
            {inStock ? 'Add to Cart' : 'Unavailable'}
          </Button>
        </div>
      </div>
    );
  }
);

ProductCard.displayName = 'ProductCard';
