import React, { useState, useMemo } from "react";

export default function UseMemoOptimization() {
  const [number, setNumber] = useState(0);
  const [other, setOther] = useState(0);

  console.log("Komponen di-render");

  const expensiveCalculation = (num) => {
    console.log("Perhitungan berat dijalankan...");
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += i * num;
    }
    return total;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div style={{ padding: "20px" }}>
      <h2> Optimasi dengan useMemo</h2>
      <p>Angka: {number}</p>
      <p>Hasil: {memoizedValue}</p>

      <button onClick={() => setNumber(number + 1)}>Tambah Angka</button>
      <button onClick={() => setOther(other + 1)}>Ubah State Lain</button>
    </div>
  );
}
