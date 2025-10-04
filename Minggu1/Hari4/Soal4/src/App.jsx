import React from "react";
import AlertBox from "./AlertBox";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #0f172a, #020617)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <AlertBox type="success" message="Data berhasil disimpan!" />
      <AlertBox type="error" message=" Gagal memproses permintaan!" />
    </div>
  );
}

export default App;
