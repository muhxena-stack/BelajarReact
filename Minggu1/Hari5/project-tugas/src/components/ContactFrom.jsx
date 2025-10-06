import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    namaDepan: "",
    namaBelakang: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Data berhasil dikirim!\n\nNama: ${formData.namaDepan} ${formData.namaBelakang}\nEmail: ${formData.email}`
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "60px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1>Soal 3:</h1>
      <h2>Formulir Kontak</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          width: "320px",
          backgroundColor: "#fefefe",
          border: "2px solid #ccc",
          borderRadius: "12px",
          padding: "25px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Nama Depan:
          </label>
          <input
            type="text"
            name="namaDepan"
            value={formData.namaDepan}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #bbb",
              outline: "none",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Nama Belakang:
          </label>
          <input
            type="text"
            name="namaBelakang"
            value={formData.namaBelakang}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #bbb",
              outline: "none",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #bbb",
              outline: "none",
            }}
          />
        </div>

        {/* Tombol Kirim */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45A049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Kirim
        </button>
      </form>

      {/* Menampilkan Data Real-time */}
      <div
        style={{
          marginTop: "30px",
          width: "320px",
          backgroundColor: "#f7f9fa",
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "15px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          textAlign: "left",
        }}
      >
        <h3>Data Saat Ini:</h3>
        <p>
          <strong>Nama Depan:</strong> {formData.namaDepan || "-"}
        </p>
        <p>
          <strong>Nama Belakang:</strong> {formData.namaBelakang || "-"}
        </p>
        <p>
          <strong>Email:</strong> {formData.email || "-"}
        </p>
      </div>
    </div>
  );
}

export default ContactForm;
