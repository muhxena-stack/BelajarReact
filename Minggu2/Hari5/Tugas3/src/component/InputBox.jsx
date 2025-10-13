import React from "react";

export default function InputBox({ message, setMessage }) {
  return (
    <div style={{ marginTop: "20px", border: "1px solid gray", padding: "10px" }}>
      <h3>InputBox (ubah pesan)</h3>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: "100%", padding: "6px" }}
      />
    </div>
  );
}
