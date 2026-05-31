import React from "react";
import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Input size: sm, md, lg (affects padding and font size)
   */
  inputSize?: "sm" | "md" | "lg";

  /**
   * Error state - shows red border and text
   */
  error?: boolean;

  /**
   * Error message to display below input
   */
  errorMessage?: string;

  /**
   * Help text to display below input
   */
  helpText?: string;

  /**
   * Icon element to display on the right side of input
   */
  icon?: React.ReactNode;

  /**
   * Label text for the input
   */
  label?: string;

  /**
   * Whether input is required (adds asterisk to label)
   */
  required?: boolean;
}

/**
 * Input Component
 * Accessible text input with support for error states, help text, icons, and labels.
 * Includes focus states and proper WCAG AA contrast ratios.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      inputSize = "md",
      error = false,
      errorMessage,
      helpText,
      icon,
      label,
      required = false,
      className,
      id,
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const inputId = id || `input-${Math.random().toString(36).slice(2, 9)}`;

    return (
      <div className={styles.wrapper}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}

        <div className={styles.inputWrapper}>
          <input
            ref={ref}
            id={inputId}
            className={`
              ${styles.input}
              ${styles[`size-${inputSize}`]}
              ${error ? styles.error : ""}
              ${disabled ? styles.disabled : ""}
              ${icon ? styles["has-icon"] : ""}
              ${className || ""}
            `}
            disabled={disabled}
            aria-invalid={error}
            aria-describedby={
              errorMessage
                ? `${inputId}-error`
                : helpText
                  ? `${inputId}-help`
                  : undefined
            }
            {...props}
          />

          {icon && (
            <span
              className={`${styles.icon} ${error ? styles["icon-error"] : ""}`}
            >
              {icon}
            </span>
          )}
        </div>

        {error && errorMessage && (
          <p id={`${inputId}-error`} className={styles.errorMessage}>
            {errorMessage}
          </p>
        )}

        {!error && helpText && (
          <p id={`${inputId}-help`} className={styles.helpText}>
            {helpText}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
