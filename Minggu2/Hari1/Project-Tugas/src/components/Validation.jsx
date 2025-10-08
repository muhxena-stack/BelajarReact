import React, { useState } from "react";

function FormValidation() {
  // State untuk menyimpan nilai input
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // State untuk pesan error atau sukses
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Menangani perubahan input (controlled)
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // Menangani submit form
  function handleSubmit(event) {
    event.preventDefault();

    // Reset pesan
    setError("");
    setSuccess("");

    // Validasi sederhana
    if (!formData.username) {
      setError("Username tidak boleh kosong!");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Email harus mengandung '@'.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password minimal 6 karakter.");
      return;
    }

    // Jika semua valid, tampilkan pesan sukses
    setSuccess("Pendaftaran berhasil!");
    console.log("Data dikirim:", formData);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>Soal 4</h1>
      <h2>Formulir Pendaftaran</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "inline-block",
          textAlign: "left",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
        }}
      >
        <label>Username:</label>
        <br />
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Masukkan username"
          style={{ width: "250px", padding: "8px", marginBottom: "10px" }}
        />
        <br />

        <label>Email:</label>
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Masukkan email"
          style={{ width: "250px", padding: "8px", marginBottom: "10px" }}
        />
        <br />

        <label>Password:</label>
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Masukkan password"
          style={{ width: "250px", padding: "8px", marginBottom: "10px" }}
        />
        <br />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Daftar
        </button>
      </form>

      {/* Pesan error atau sukses */}
      {error && (
        <p style={{ color: "red", marginTop: "15px" }}>
          ❌ {error}
        </p>
      )}
      {success && (
        <p style={{ color: "green", marginTop: "15px" }}>
          ✅ {success}
        </p>
      )}
    </div>
  );
}

export default FormValidation;
