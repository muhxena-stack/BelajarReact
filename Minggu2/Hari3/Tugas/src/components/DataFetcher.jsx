import React, { useState, useEffect } from "react";

export default function DataFetcher() {
  const [data, setData] = useState(null); // Menyimpan data hasil "fetch"
  const [loading, setLoading] = useState(true); // Menandakan apakah sedang loading

  useEffect(() => {
    console.log("Mengambil data...");

    // Simulasi fetch API dengan delay 2 detik
    const timer = setTimeout(() => {
      const fakeData = {
        id: 1,
        name: "MuxeeStoic",
        email: "Muxx@example.com",
      };
      setData(fakeData);
      setLoading(false);
      console.log("Data berhasil diambil!");
    }, 2000);

    // Cleanup function (opsional)
    return () => {
      clearTimeout(timer);
      console.log("Fetch dibatalkan (komponen di-unmount)");
    };
  }, []); // Hanya dijalankan sekali saat komponen pertama kali dimount

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Simulasi Fetch Data</h2>

      {loading ? (
        <p>🔄 Sedang mengambil data...</p>
      ) : (
        <div
          style={{
            display: "inline-block",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            marginTop: "10px",
          }}
        >
          <p><strong>ID:</strong> {data.id}</p>
          <p><strong>Nama:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
        </div>
      )}
    </div>
  );
}
