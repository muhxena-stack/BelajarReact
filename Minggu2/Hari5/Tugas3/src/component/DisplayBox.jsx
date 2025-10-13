import React from "react";

export default function DisplayBox({ message }) {
  return (
    <div style={{ marginTop: "20px", border: "1px solid lightgray", padding: "10px" }}>
      <h3>DisplayBox (menampilkan pesan)</h3>
      <p>{message}</p>
    </div>
  );
}

