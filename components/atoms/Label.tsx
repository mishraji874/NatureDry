import React from 'react';
import styles from './Label.module.css';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Label size: sm, md, lg
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Whether the input is required (shows asterisk)
   */
  required?: boolean;

  /**
   * Optional help text tooltip
   */
  tooltip?: string;

  /**
   * Label text content
   */
  children: React.ReactNode;
}

/**
 * Label Component
 * Accessible form label with optional required indicator and tooltip support.
 * Ensures proper contrast and sizing for readability.
 */
export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      size = 'md',
      required = false,
      tooltip,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [showTooltip, setShowTooltip] = React.useState(false);

    return (
      <label
        ref={ref}
        className={`
          ${styles.label}
          ${styles[`size-${size}`]}
          ${className || ''}
        `}
        {...props}
      >
        <span className={styles.text}>{children}</span>

        {required && (
          <span className={styles.required} aria-label="required">
            *
          </span>
        )}

        {tooltip && (
          <span
            className={styles.tooltipWrapper}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onFocus={() => setShowTooltip(true)}
            onBlur={() => setShowTooltip(false)}
            tabIndex={0}
            role="tooltip"
          >
            <span className={styles.tooltipIcon}>?</span>
            {showTooltip && (
              <span className={styles.tooltipContent}>{tooltip}</span>
            )}
          </span>
        )}
      </label>
    );
  }
);

Label.displayName = 'Label';
