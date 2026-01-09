import { useState, type InputHTMLAttributes } from "react";

import EyeIcon from "../icons/EyeIcon";
import styles from "./Input.module.css";

type InputType = "text" | "password" | "number";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  type: InputType;
  value: string;
  clearable?: boolean;
  onChange: (value: string) => void;
}

export default function Input({
  type,
  value,
  clearable,
  onChange,
  ...props
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const inputType = type === "password" && isPasswordVisible ? "text" : type;
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type={inputType}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />

      <div className={styles.btnGroup}>
        {type === "password" && (
          <button
            className={styles.iconBtn}
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <EyeIcon type={isPasswordVisible ? "fill" : "empty"} />
          </button>
        )}

        {clearable && value.length > 0 && (
          <button
            className={styles.iconBtn}
            type="button"
            onClick={() => onChange("")}
          >
            &times;
          </button>
        )}
      </div>
    </div>
  );
}
