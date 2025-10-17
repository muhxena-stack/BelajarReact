import React, { useState } from "react";
import FastComponent from "./components/FastComponent";
import SlowComponent from "./components/SlowComponent";

export default function App() {
  const [count, setCount] = useState(0);
  const [showSlow, setShowSlow] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Soal 5 Performance Profiling Demo</h1>

      <button onClick={() => setCount((prev) => prev + 1)}>Tambah Count</button>
      <button onClick={() => setShowSlow((prev) => !prev)}>
        {showSlow ? "Sembunyikan" : "Tampilkan"} Komponen Lambat
      </button>

      <FastComponent count={count} />
      {showSlow && <SlowComponent count={count} />}
    </div>
  );
}
