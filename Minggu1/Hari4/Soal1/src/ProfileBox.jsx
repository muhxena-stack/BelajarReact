import React from "react";

export default function ProfileBox({ name = "Nama Lengkap", role = "Peran", avatar }) {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "18px 24px",
    borderRadius: "16px",
    maxWidth: "440px",
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
    color: "#f8fafc",
    border: "1px solid rgba(148,163,184,0.2)",
    boxShadow: "0 6px 20px rgba(15,23,42,0.6)",
    fontFamily: "Poppins, sans-serif",
  };

  const avatarStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "12px",
    objectFit: "cover",
    border: "2px solid #38bdf8",
    boxShadow: "0 0 15px rgba(56,189,248,0.5)",
  };

  const infoStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  };

  const nameStyle = {
    fontSize: "20px",
    fontWeight: 700,
    margin: 0,
    letterSpacing: "0.5px",
    color: "#e2e8f0",
    textTransform: "pascalscale",
  };

  const roleStyle = {
    fontSize: "13px",
    margin: 0,
    color: "#94a3b8",
  };

  const badgeStyle = {
    marginLeft: "auto",
    background: "linear-gradient(90deg, #38bdf8 0%, #0ea5e9 100%)",
    color: "black",
    padding: "6px 14px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: 700,
    textTransform: "pascalscale",
    letterSpacing: "0.5px",
    boxShadow: "0 0 12px rgba(56,189,248,0.6)",
    Animation: "glowPulse 1.5s infinite ease-in-out"
  };

  return (
    
    <div style={containerStyle}>
      <img
        src={
          avatar ||
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=400"
        }
        alt={name}
        style={avatarStyle}
      />

      <div style={infoStyle}>
        <p style={nameStyle}>{name}</p>
        <p style={roleStyle}>{role}</p>
      </div>

      <div style={badgeStyle}>Aktif</div>
    </div>
  );
}
