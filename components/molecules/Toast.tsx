import React from 'react';
import styles from './Toast.module.css';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
  /**
   * Toast type/variant: success, error, warning, info
   */
  type?: ToastType;

  /**
   * Main message text
   */
  message: string;

  /**
   * Optional description/detail text
   */
  description?: string;

  /**
   * Whether toast is visible
   */
  isOpen?: boolean;

  /**
   * Auto-dismiss time in milliseconds (0 = never auto-dismiss)
   */
  duration?: number;

  /**
   * Callback when toast is dismissed
   */
  onDismiss?: () => void;

  /**
   * Optional action button text
   */
  actionLabel?: string;

  /**
   * Callback when action button is clicked
   */
  onAction?: () => void;

  /**
   * Position on screen
   */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center';

  /**
   * Icon element to display
   */
  icon?: React.ReactNode;
}

const getIcon = (type: ToastType): string => {
  switch (type) {
    case 'success':
      return '✓';
    case 'error':
      return '✕';
    case 'warning':
      return '!';
    case 'info':
      return 'ⓘ';
    default:
      return '•';
  }
};

/**
 * Toast Component
 * Molecule for displaying temporary notification messages.
 * Supports multiple types (success, error, warning, info) with auto-dismiss.
 * Includes optional action button and custom positioning.
 * Accessible with ARIA live region for screen readers.
 */
export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      type = 'info',
      message,
      description,
      isOpen = true,
      duration = 4000,
      onDismiss,
      actionLabel,
      onAction,
      position = 'bottom-right',
      icon,
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = React.useState(isOpen);
    const timerRef = React.useRef<NodeJS.Timeout | null>(null);

    React.useEffect(() => {
      setIsVisible(isOpen);

      // Auto-dismiss timer
      if (isOpen && duration > 0) {
        timerRef.current = setTimeout(() => {
          setIsVisible(false);
          onDismiss?.();
        }, duration);
      }

      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    }, [isOpen, duration, onDismiss]);

    const handleDismiss = () => {
      setIsVisible(false);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      onDismiss?.();
    };

    const handleAction = () => {
      if (onAction) {
        onAction();
      }
    };

    if (!isVisible) return null;

    return (
      <div
        ref={ref}
        className={`
          ${styles.toast}
          ${styles[`type-${type}`]}
          ${styles[`position-${position}`]}
        `}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {/* Icon */}
        {icon ? (
          <span className={styles.icon}>{icon}</span>
        ) : (
          <span className={styles.icon}>{getIcon(type)}</span>
        )}

        {/* Content */}
        <div className={styles.content}>
          <p className={styles.message}>{message}</p>
          {description && (
            <p className={styles.description}>{description}</p>
          )}
        </div>

        {/* Action Button */}
        {actionLabel && (
          <button
            className={styles.action}
            onClick={handleAction}
            aria-label={actionLabel}
          >
            {actionLabel}
          </button>
        )}

        {/* Close Button */}
        <button
          className={styles.closeButton}
          onClick={handleDismiss}
          aria-label="Dismiss notification"
        >
          ✕
        </button>
      </div>
    );
  }
);

Toast.displayName = 'Toast';

/**
 * ToastContainer Component
 * Container for rendering multiple toasts.
 * Manages toast stacking and positioning.
 */
export interface ToastItem extends ToastProps {
  id: string;
}

interface ToastContainerProps {
  toasts: ToastItem[];
  onDismiss: (id: string) => void;
}

export const ToastContainer = React.forwardRef<
  HTMLDivElement,
  ToastContainerProps
>(({ toasts, onDismiss }, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onDismiss={() => onDismiss(toast.id)}
        />
      ))}
    </div>
  );
});

ToastContainer.displayName = 'ToastContainer';
