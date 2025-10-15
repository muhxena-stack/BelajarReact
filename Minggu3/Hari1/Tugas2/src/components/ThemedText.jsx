import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function ThemedText() {
  const { theme } = useContext(ThemeContext);

  const style = {
    color: theme === "light" ? "#111" : "#ddd",
    marginTop: "15px",
  };

  return <p style={style}>Mode saat ini: {theme}</p>;
}
