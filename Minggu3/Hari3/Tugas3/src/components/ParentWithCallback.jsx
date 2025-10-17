import React, { useState, useCallback } from "react";
import ChildButton from "./ChildButton";

export default function ParentWithCallback() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  // Fungsi ini hanya berubah kalau 'count' berubah
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  console.log("ParentWithCallback di-render");

  return (
    <div style={{ padding: "20px", border: "1px solid gray" }}>
      <h3>✅ Dengan useCallback</h3>
      <p>Count: {count}</p>

      <ChildButton onClick={increment} label="Tambah Count" />

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Ganti Tema ({theme})
      </button>
    </div>
  );
}
