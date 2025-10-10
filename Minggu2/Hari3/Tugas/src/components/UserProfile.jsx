import React, { useState, useEffect } from "react";

 export default function UserProfile({ userId }) {
  const [user, setUser] = useState(null); // Menyimpan data user
  const [loading, setLoading] = useState(true); // Status loading

  useEffect(() => {
    // Efek dijalankan setiap kali userId berubah
    setLoading(true);
    console.log(`Fetching data untuk userId: ${userId}`);

    // Simulasi fetch data dari API
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Gagal fetch data:", error);
        setLoading(false);
      });
  }, [userId]); // <-- Hanya dijalankan ulang kalau userId berubah

  if (loading) return <p>Loading data...</p>;

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
      <h3>Profil Pengguna</h3>
      {user ? (
        <div>
          <p><strong>Nama:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>Data tidak ditemukan.</p>
      )}
    </div>
  );
}