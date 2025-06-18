import React from "react";
import styles from "./styles.module.scss";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  containerClassName?: string;
}

export function Input({
  icon,
  iconPosition = "left",
  containerClassName = "",
  className = "",
  ...rest
}: InputProps) {
  return (
    <div className={`${styles.container} ${containerClassName}`}>
      <div className={styles.content}>
        {icon && iconPosition === "left" && (
          <span className={styles.icon}>{icon}</span>
        )}
        <input className={`${styles.input} ${className}`} {...rest} />
        {icon && iconPosition === "right" && (
          <span className={styles.icon}>{icon}</span>
        )}
      </div>
    </div>
  );
}
