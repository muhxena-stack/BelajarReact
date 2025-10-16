import React from "react";
import ShowHideText from "./components/ShowHideText";
import SwitchButton from "./components/SwitchButton";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Soal 1 Custom Hook: useToggle</h2>
      <ShowHideText />
      <SwitchButton />
    </div>
  );
}
