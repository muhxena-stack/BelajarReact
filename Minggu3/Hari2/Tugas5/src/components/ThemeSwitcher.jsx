import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const containerStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme === "light" ? "#f9fafb" : "#1f2937",
    color: theme === "light" ? "#111827" : "#f9fafb",
    transition: "all 0.3s ease",
  };

  const buttonStyle = {
    backgroundColor: theme === "light" ? "#111827" : "#f9fafb",
    color: theme === "light" ? "#f9fafb" : "#111827",
    border: "none",
    borderRadius: "8px",
    padding: "10px 18px",
    cursor: "pointer",
    marginTop: "15px",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <h2>Mode Tema: {theme === "light" ? "Light" : "Dark"}</h2>
      <button style={buttonStyle} onClick={toggleTheme}>
        Ganti ke {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <p style={{ marginTop: "10px" }}>
        (Coba refresh halaman — tema tetap tersimpan!)
      </p>
    </div>
  );
}
