import React, { useState, useEffect } from "react";

export default function DualEffectExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // useEffect pertama → dijalankan saat count berubah
  useEffect(() => {
    document.title = `Klik: ${count}`;
    console.log(`Count berubah menjadi ${count}`);
  }, [count]); // hanya jalan ulang saat count berubah

  // useEffect kedua → dijalankan saat name berubah
  useEffect(() => {
    console.log(`Nama diubah menjadi: ${name}`);
  }, [name]); // hanya jalan ulang saat name berubah

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Dua useEffect</h2>

      {/* Bagian Count */}
      <p>Jumlah klik: {count}</p>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        style={{
          margin: "5px",
          padding: "8px 16px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#4CAF50",
          color: "white",
          cursor: "pointer",
        }}
      >
        Tambah Count
      </button>

      {/* Bagian Name */}
      <div style={{ marginTop: "15px" }}>
        <p>Nama: {name}</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "6px 10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </div>
    </div>
  );
}
