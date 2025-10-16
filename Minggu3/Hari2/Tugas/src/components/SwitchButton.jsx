import React from "react";
import useToggle from "../hooks/useToggle";

export default function SwitchButton() {
  const [isOn, toggleSwitch] = useToggle(false);

  return (
    <div>
      <p>Status: {isOn ? "ON" : "OFF"}</p>
      <button onClick={toggleSwitch}>
        {isOn ? "Matikan" : "Nyalakan"}
      </button>
    </div>
  );
}
