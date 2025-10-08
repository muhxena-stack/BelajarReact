import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState(""); // state untuk menyimpan input nama
  const [submittedName, setSubmittedName] = useState(""); // untuk hasil submit

  // Menangani perubahan input
  function handleChange(event) {
    setName(event.target.value); // ubah state saat user mengetik
  }

  // Menangani submit form
  function handleSubmit(event) {
    event.preventDefault(); // cegah reload halaman
    setSubmittedName(name); // simpan nama yang diketik
    console.log("Nama dikirim:", name);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>Soal 3</h1>
      <h2>Form Controlled Component</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Masukkan nama Anda"
          value={name} // nilai input dikontrol oleh state
          onChange={handleChange}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "250px",
            fontSize: "16px",
          }}
        />
        <br /><br />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Kirim
        </button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <p>Sedang diketik: <b>{name || "..."}</b></p>
        {submittedName && (
          <p>Nama yang dikirim: <b>{submittedName}</b></p>
        )}
      </div>
    </div>
  );
}

export default ControlledForm;
