import React from "react";
import styles from "./Badge.module.css";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Badge variant: default, success, warning, error, info, or custom color
   */
  variant?:
    | "default"
    | "success"
    | "warning"
    | "error"
    | "info"
    | "primary"
    | "secondary";

  /**
   * Badge size: sm, md, lg
   */
  size?: "sm" | "md" | "lg";

  /**
   * Badge style: solid or outline
   */
  badgeStyle?: "solid" | "outline";

  /**
   * Optional badge icon or dot
   */
  icon?: React.ReactNode;

  /**
   * Whether badge is dismissible (shows close button)
   */
  dismissible?: boolean;

  /**
   * Callback when badge is dismissed
   */
  onDismiss?: () => void;

  /**
   * Badge content
   */
  children: React.ReactNode;
}

/**
 * Badge Component
 * Small, compact component for displaying labels, tags, and status indicators.
 * Supports multiple variants and styles with optional dismissal.
 * Common uses: sale indicators, product tags, status badges.
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = "default",
      size = "md",
      badgeStyle = "solid",
      icon,
      dismissible = false,
      onDismiss,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [isDismissed, setIsDismissed] = React.useState(false);

    if (isDismissed) return null;

    const handleDismiss = () => {
      setIsDismissed(true);
      onDismiss?.();
    };

    return (
      <span
        ref={ref}
        className={`
          ${styles.badge}
          ${styles[`variant-${variant}`]}
          ${styles[`size-${size}`]}
          ${styles[`badgeStyle-${badgeStyle}`]}
          ${className || ""}
        `}
        {...props}
      >
        {icon && <span className={styles.icon}>{icon}</span>}

        <span className={styles.text}>{children}</span>

        {dismissible && (
          <button
            className={styles.dismissButton}
            onClick={handleDismiss}
            aria-label={`Dismiss ${children}`}
            tabIndex={0}
          >
            ✕
          </button>
        )}
      </span>
    );
  },
);

Badge.displayName = "Badge";
