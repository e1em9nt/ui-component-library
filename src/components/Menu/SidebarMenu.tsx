import { type ReactNode } from "react";
import styles from "./SidebarMenu.module.css";

export interface SidebarMenuProps {
  title?: string;
  position?: "left" | "right";
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function SidebarMenu({
  title,
  position = "left",
  isOpen,
  onClose,
  children,
}: SidebarMenuProps) {
  return (
    <>
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropVisible : ""}`}
        onClick={onClose}
      />

      <aside
        className={`
        ${styles.sidebar} 
        ${styles[position]} 
        ${isOpen ? styles["sidebar-open"] : ""}
      `}
      >
        <div className={styles.header}>
          <h3>{title}</h3>
          <button className={styles.closeBtn} onClick={onClose}>
            &times;
          </button>
        </div>
        <nav className={styles.content}>{children}</nav>
      </aside>
    </>
  );
}
