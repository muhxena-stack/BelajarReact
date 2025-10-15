import React, { useState } from "react";
import ThemeContext from "../context/ThemeContext";

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }

    const contextValue = {theme, toggleTheme}

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}
