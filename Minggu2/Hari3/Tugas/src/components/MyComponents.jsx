import React, { useState, useEffect } from "react";

export default function MyComponents() {
  // State sederhana untuk menyimpan angka
  const [count, setCount] = useState(0);

  // useEffect TANPA array dependensi
  // Akan dijalankan SETIAP RENDER (saat pertama kali tampil dan saat state berubah)
  useEffect(() => {
    console.log("Komponen di-render atau di-update");
  }, [count]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>useEffect Sederhana</h2>
      <p>Nilai count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}
