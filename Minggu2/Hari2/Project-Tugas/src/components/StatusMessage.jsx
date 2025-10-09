import React from "react";

function StatusMessage({ status }) {
  let content;
  let bgColor = "#000000ff";
  let textColor = "#000";

  switch (status) {
    case "loading":
      content = "Sedang memuat data...";
      bgColor = "#000000ff";
      textColor = "#0051ffff";
      break;
    case "success":
      content = "Data berhasil dimuat!";
      bgColor = "#000000ff";
      textColor = "#00ffb7ff";
      break;
    case "error":
      content = "Terjadi kesalahan!";
      bgColor = "#000000ff";
      textColor = "#ff0000ff";
      break;
    default:
      content = "Status tidak diketahui.";
      bgColor = "#000000ff";
      textColor = "#ffff00ff";
  }

  return (
    <div style={{ backgroundColor: bgColor, padding: "12px", borderRadius: "8px", marginTop: "12px" }}>
      <p style={{ color: textColor, fontWeight: "bold" }}>{content}</p>
    </div>
  );
}

export default StatusMessage;
