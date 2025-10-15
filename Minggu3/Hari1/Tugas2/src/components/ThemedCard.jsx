import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function ThemeCard() {
    const {theme} = useContext(ThemeContext)

    const style = {
       backgroundColor: theme === "light" ? "#fafafa" : "#222",
       color: theme === "light" ? "#222" : "#fafafa",
       padding: "20px",
       borderRadius: "10px",
       marginTop: "20px",
    }

    return (
        <div style={style}>
         <h3>Kartu Tema {theme === "light" ? "Terang" : "Gelap"}</h3>
         <p>Ini adalah contoh card yang menyesuaikan tema.</p>
        </div>
    )
}