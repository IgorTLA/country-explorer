"use client";

import { useEffect, useState } from "react";
import { statusColorsForToast, ToastProps } from "@/models/toast";
import { CheckCircle, XCircle, Info, AlertCircle, X } from "lucide-react";

import styles from "./styles.module.scss";

interface Props extends ToastProps {
  /**
   * Propety to identify if the Toast is exiting
   */
  isExiting?: boolean;
  /**
   * Propety to close the Toast
   */
  onClose: () => void;
  onPauseTimer?: () => void;
  onStartTimer?: () => void;
}

export default function Toast(props: Props) {
  const {
    status,
    title,
    description,
    isExiting,
    onClose,
    onPauseTimer,
    onStartTimer,
  } = props;
  const [iconColor, setIconColor] = useState(
    statusColorsForToast[status].iconColor
  );
  const [backgroundColor, setBackgroundColor] = useState(
    statusColorsForToast[status].backgroundColor
  );
  const [borderColor, setBorderColor] = useState(
    statusColorsForToast[status].borderColor
  );
  const [visible, setVisible] = useState(false);

  function getIcon() {
    const iconProps = {
      size: 22,
      color: statusColorsForToast[status].iconColor,
    };

    switch (status) {
      case "success":
        return <CheckCircle {...iconProps} />;
      case "error":
        return <XCircle {...iconProps} />;
      case "info":
        return <Info {...iconProps} />;
      case "warning":
        return <AlertCircle {...iconProps} />;
      default:
        return null;
    }
  }

  function handleClose() {
    setVisible(false);
    onClose(); // Notifica o Provider para remover o toast
  }

  useEffect(() => {
    const colors = statusColorsForToast[status];
    setIconColor(colors.iconColor);
    setBackgroundColor(colors.backgroundColor);
    setBorderColor(colors.borderColor);

    const showTimer = setTimeout(() => setVisible(true), 50);

    return () => clearTimeout(showTimer);
  }, [status]);

  // Ajustar a visibilidade conforme o estado `isExiting`
  const opacity = visible && !isExiting ? 1 : 0;
  const transform =
    visible && !isExiting ? "translateY(0)" : "translateY(-10px)";

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor,
        borderColor,
        opacity,
        transform,
      }}
      onMouseEnter={onPauseTimer} // Pausa o temporizador
      onMouseLeave={onStartTimer} // Reinicia o temporizador
    >
      <div className={styles.titleWrapper}>
        <div className={styles.leftWrapper}>
          {getIcon()}
          <span style={{ color: iconColor }}>{title}</span>
        </div>

        <a onClick={handleClose}>
          <X color={iconColor} size={16} />
        </a>
      </div>

      <div className={styles.descriptionWrapper}>
        <div className={styles.left}>
          <div className={styles.box} />

          <span style={{ color: iconColor }}>{description}</span>
        </div>

        <div className={styles.box} />
      </div>
    </div>
  );
}
