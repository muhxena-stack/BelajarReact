import React, { useState } from "react";
import ChildButton from "./ChildButton";

export default function ParentWithoutCallback() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  // Fungsi ini akan dibuat ulang setiap kali render
  const increment = () => setCount(count + 1);

  console.log("ParentWithoutCallback di-render");

  return (
    <div style={{ padding: "20px", border: "1px solid gray" }}>
      <h3>❌ Tanpa useCallback</h3>
      <p>Count: {count}</p>

      <ChildButton onClick={increment} label="Tambah Count" />

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Ganti Tema ({theme})
      </button>
    </div>
  );
}
