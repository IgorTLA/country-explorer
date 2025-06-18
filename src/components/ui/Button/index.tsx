"use client";
import React, { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

export enum ButtonVariants {
  PRIMARY = "primary",
  DANGER = "danger",
  ICON = "icon",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: ButtonVariants;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isIconOnly?: boolean;
  isSelected?: boolean;
  count?: number;
  ariaLabel?: string;
}

export function Button(props: ButtonProps) {
  const {
    text,
    variant = "primary",
    icon,
    iconPosition = "left",
    isIconOnly = false,
    isSelected = false,
    count,
    ariaLabel,
    ...rest
  } = props;

  const buttonVariant = isIconOnly ? ButtonVariants.ICON : variant;

  return (
    <button
      className={`${styles.button} ${styles[buttonVariant]} ${
        isSelected ? styles.selected : ""
      }`}
      data-variant={buttonVariant}
      aria-label={isIconOnly ? ariaLabel : undefined}
      {...rest}
    >
      {!isIconOnly && icon && iconPosition === "left" && (
        <span className={`${styles.icon} ${isSelected ? styles.filled : ""}`}>
          {icon}
        </span>
      )}

      {!isIconOnly && text && <span className={styles.text}>{text}</span>}

      {!isIconOnly && icon && iconPosition === "right" && (
        <span className={`${styles.icon} ${isSelected ? styles.filled : ""}`}>
          {icon}
        </span>
      )}

      {isIconOnly && icon && (
        <span className={`${styles.icon} ${isSelected ? styles.filled : ""}`}>
          {icon}
        </span>
      )}

      {count !== undefined && count > 0 && (
        <span className={styles.badge}>{count}</span>
      )}
    </button>
  );
}
