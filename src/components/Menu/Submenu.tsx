import { useState, type ReactNode } from "react";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import styles from "./Submenu.module.css";

interface SubmenuProps {
  label: string;
  children: ReactNode;
}

export default function Submenu({ label, children }: SubmenuProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.submenuWrapper}>
      <div
        className={styles.submenuHeader}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>{label}</span>
        <span
          className={`${styles.arrow} ${isExpanded ? styles.arrowRotate : ""}`}
        >
          <ArrowDownIcon />
        </span>
      </div>

      {isExpanded && <div className={styles.submenuContent}>{children}</div>}
    </div>
  );
}
