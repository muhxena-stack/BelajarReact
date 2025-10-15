import React, {useContext} from "react";
import ThemeContext from "../context/ThemeContext";

export default function ThemeButton() {
    const {theme, toggleTheme} = useContext(ThemeContext)

    const style = {
        backgroundColor: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#333" : "#eee",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    }

    return (
        <button style={style} onClick={toggleTheme}>
            Toggle Theme ({theme})
        </button>
    )


}