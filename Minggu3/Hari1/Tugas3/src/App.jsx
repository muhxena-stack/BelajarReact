import React from "react";
import LanguageProvider from "./context/LanguageProvider";
import NotificationProvider from "./context/NotificationProvider";
import Header from "./components/Header";

export default function App() {
  return (
    <LanguageProvider>
      <NotificationProvider>
        <div style={{ textAlign: "center", padding: "40px" }}>
          <h2>Soal 3 Multiple Contexts Example</h2>
          <Header />
        </div>
      </NotificationProvider>
    </LanguageProvider>
  );
}
