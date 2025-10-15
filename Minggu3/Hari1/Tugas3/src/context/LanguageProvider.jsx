import React, { useState } from "react";
import LanguageContext from "./LanguageContext";

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("id");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "id" ? "en" : "id"));
  };

  const contextValue = { language, toggleLanguage };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}
