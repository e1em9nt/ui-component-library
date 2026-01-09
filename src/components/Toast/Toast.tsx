import { useState, useEffect, type ReactNode } from "react";
import SuccessIcon from "../icons/SuccessIcon";
import DangerIcon from "../icons/DangerIcon";
import styles from "./Toast.module.css";

type ToastStyleType = "success" | "warning" | "error";

export interface ToastProps {
  type: ToastStyleType;
  duration?: number;
  showCloseBtn?: boolean;
  onClose: () => void;
  children: ReactNode;
}
export default function Toast({
  type,
  duration = 3000,
  showCloseBtn = false,
  onClose,
  children,
}: ToastProps) {
  const [isFading, setIsFading] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleFadeAndClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  function handleFadeAndClose() {
    setIsFading(true);
    setTimeout(() => {
      onClose();
    }, 300);
  }

  return (
    <div
      className={`${styles.toast} ${styles[`toast-${type}`]} ${
        isFading && styles.fadeOut
      }`}
    >
      <div className={styles.content}>
        <div className={styles.icon}>
          {type === "success" ? <SuccessIcon /> : <DangerIcon />}
        </div>
        <div className={styles.message}>{children}</div>
      </div>

      {showCloseBtn && (
        <button
          type="button"
          className={styles.closeBtn}
          onClick={handleFadeAndClose}
        >
          &times;
        </button>
      )}
    </div>
  );
}
