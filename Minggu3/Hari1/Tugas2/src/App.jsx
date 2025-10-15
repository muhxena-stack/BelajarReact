import React from "react";
import ThemeProvider from "./context/ThemeProvider";
import ThemedButton from "./components/ThemedButton";
import ThemedCard from "./components/ThemedCard";
import ThemedText from "./components/ThemedText";

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2>Soal 2 Aplikasi dengan Theme Context</h2>
        <ThemedButton />
        <ThemedText />
        <ThemedCard />
      </div>
    </ThemeProvider>
  );
}
