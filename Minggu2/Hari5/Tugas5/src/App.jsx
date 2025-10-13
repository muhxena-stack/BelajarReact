import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ThemedButton from "./component/ThemedButton";
import ThemedParagraph from "./component/ThemedParagraph";

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Soal 5</h1>
        <h2>Context API (Tema Light/Dark)</h2>
        <ThemedButton />
        <ThemedParagraph />
      </div>
    </ThemeProvider>
  );
}
