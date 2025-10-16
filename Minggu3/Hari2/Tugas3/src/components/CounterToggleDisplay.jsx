import React from "react";
import useCounterWithToggle from "../hooks/useCounterWithToggle";

export default function CounterToggleDisplay() {
  const { count, increment, decrement, reset, isActive, toggle } = useCounterWithToggle();

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem", width: "250px" }}>
      <h3>Count: {count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement} style={{ marginLeft: "5px" }}>-</button>
      <button onClick={reset} style={{ marginLeft: "5px" }}>Reset</button>

      <hr />
      <p>Status: {isActive ? "Aktif" : "Nonaktif"}</p>
      <button onClick={toggle}>{isActive ? "Matikan" : "Aktifkan"}</button>
    </div>
  );
}
