export type ToastStatus = "success" | "error" | "info" | "warning";

export interface ToastProps {
  /**
   * Propety to identify the status of the Toast
   * success | error | info | warning
   */
  status: ToastStatus;
  /**
   * Propety to pass the title of the Toast
   */
  title: string;
  /**
   * Propety to pass the description of the Toast
   */
  description?: string;
  /**
   * Propety to pass the duration of the Toast
   */
  duration?: number;
}

export const statusColorsForToast = {
  success: {
    iconColor: "var(--success-dark)",
    backgroundColor: "var(--success-light)",
    borderColor: "var(--success-dark)",
  },
  error: {
    iconColor: "var(--danger-dark)",
    backgroundColor: "var(--danger-light)",
    borderColor: "var(--danger-dark)",
  },
  info: {
    iconColor: "var(--info-dark)",
    backgroundColor: "var(--info-light)",
    borderColor: "var(--info-dark)",
  },
  warning: {
    iconColor: "var(--warning-dark)",
    backgroundColor: "var(--warning-light)",
    borderColor: "var(--warning-dark)",
  },
};
