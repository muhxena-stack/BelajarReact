import React from "react";
import useForm from "../hooks/useForm";

export default function FormInput() {
  const { values, handleChange } = useForm({ name: "", email: "" });

  const container = {
    width: "300px",
    margin: "30px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    fontFamily: "sans-serif",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    margin: "8px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
  };

  return (
    <div style={container}>
        <h2>Soal 4</h2>
      <h3>Form dengan Custom Hook</h3>

      <label>Nama:</label>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        style={inputStyle}
        placeholder="Masukkan nama..."
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        style={inputStyle}
        placeholder="Masukkan email..."
      />

      <hr />

      <h4>Hasil Input:</h4>
      <p><strong>Nama:</strong> {values.name}</p>
      <p><strong>Email:</strong> {values.email}</p>
    </div>
  );
}
