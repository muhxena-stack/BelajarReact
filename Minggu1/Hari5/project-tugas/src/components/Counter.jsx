import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  
  // functional Update State
  const handleTambah = () => setCount((prevCount) => prevCount + 1);
  const handleKurang = () => setCount((prevCount) => prevCount - 1);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>Soal 1:</h1>
      <h2>Counter Sederhana</h2>
      <h2>Functional Update</h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {/* Tombol Kurang di kiri */}
        <button
          onClick={handleKurang}
          style={{
            padding: "3px 5px",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Kurang
        </button>

        {/* Kotak Angka */}
        <div
          style={{
            padding: "3px 20px",
            border: "2px solid #333",
            borderRadius: "1px",
            fontSize: "17px",
            backgroundColor: "#f9f9f9",
            minWidth: "100px",
          }}
        >
          {count}
        </div>

        {/* Tombol Tambah di kanan */}
        <button
          onClick={handleTambah}
          style={{
            padding: "3px 5px",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Tambah
        </button>
      </div>
    </div>
  );
}

export default Counter;