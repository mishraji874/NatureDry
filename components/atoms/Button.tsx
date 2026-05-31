import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant: primary (solid green), secondary (outline), ghost (text-only)
   */
  variant?: 'primary' | 'secondary' | 'ghost';

  /**
   * Button size: sm (32px), md (40px), lg (48px)
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Full width button
   */
  fullWidth?: boolean;

  /**
   * Show loading state with disabled appearance
   */
  isLoading?: boolean;

  /**
   * Icon or element to display before text
   */
  icon?: React.ReactNode;

  /**
   * Whether button is disabled
   */
  disabled?: boolean;

  /**
   * Button text content
   */
  children: React.ReactNode;
}

/**
 * Button Component
 * Universal button supporting multiple variants (primary, secondary, ghost) and sizes.
 * Includes focus states, loading state, and optional icon support.
 * Meets WCAG AA accessibility standards with proper focus indicators.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      isLoading = false,
      icon,
      disabled = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        className={`
          ${styles.button}
          ${styles[`variant-${variant}`]}
          ${styles[`size-${size}`]}
          ${fullWidth ? styles['full-width'] : ''}
          ${isDisabled ? styles.disabled : ''}
          ${className || ''}
        `}
        disabled={isDisabled}
        {...props}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.text}>
          {isLoading ? 'Loading...' : children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';
