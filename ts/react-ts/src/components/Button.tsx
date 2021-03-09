import React from "react";
import styles from "./Button.module.css";
import Spinner from "./Spinner";

type Props = {
  disabled?: boolean;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: React.ReactNode;
  loading?: boolean;
};

export default function Button({
  disabled = false,
  style = {},
  type = "button",
  onClick,
  children,
  loading = false,
}: Props) {
  let spinnerColor = "white";
  if (style && style.color) {
    spinnerColor = style.color;
  }
  return (
    <button
      className={disabled ? styles.disabled : styles.active}
      style={style}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? <Spinner color={spinnerColor} /> : children}
    </button>
  );
}
