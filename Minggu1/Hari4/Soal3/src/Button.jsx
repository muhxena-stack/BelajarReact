import React from "react";
import styles from "./Button.module.css";

export default function ButtonMode({ mode = "santai", children, onClick }) {
  const modeClass =
    mode === "bantai"
      ? styles.bantai
      : mode === "ngetroll"
      ? styles.ngetroll
      : styles.santai;

  return (
    <button className={`${styles.button} ${modeClass}`} onClick={onClick}>
      {children}
    </button>
  );
}

