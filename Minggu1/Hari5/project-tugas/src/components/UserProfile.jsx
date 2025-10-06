import React, { useState } from "react";

function UserProfile() {
  // state untuk nama, usia, dan status edit
  const [nama, setNama] = useState("Xena");
  const [usia, setUsia] = useState(19);
  const [isEditing, setIsEditing] = useState(false);

  // saat tombol "Edit" diklik
  const handleEdit = () => {
    setIsEditing(true);
  };

  // saat tombol "Simpan" diklik
  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1>Soal 2:</h1>
      <h2>Profil Pengguna</h2>

      {/* Jika sedang mengedit */}
      {isEditing ? (
        <div style={{ marginTop: "20px" }}>
          <div>
            <label>Nama: </label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label>Usia: </label>
            <input
              type="number"
              value={usia}
              onChange={(e) => setUsia(e.target.value)}
            />
          </div>
          <button
            onClick={handleSave}
            style={{
              marginTop: "15px",
              padding: "5px 15px",
              cursor: "pointer",
            }}
          >
            Simpan
          </button>
        </div>
      ) : (
        // Jika tidak sedang mengedit
        <div style={{ marginTop: "20px" }}>
          <p>
            <strong>Nama:</strong> {nama}
          </p>
          <p>
            <strong>Usia:</strong> {usia}
          </p>
          <button
            onClick={handleEdit}
            style={{
              padding: "5px 15px",
              cursor: "pointer",
            }}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
