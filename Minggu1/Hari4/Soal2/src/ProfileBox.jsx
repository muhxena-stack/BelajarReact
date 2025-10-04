import React from "react";
import "./ProfileBox.css"; // 🔗 Hubungkan file CSS

export default function ProfileBox({ name = "Nama Lengkap", role = "Peran", avatar }) {
  return (
    <div className="profile-box">
      <img
        className="profile-avatar"
        src={
          avatar ||
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=400"
        }
        alt={name}
      />

      <div className="profile-info">
        <p className="profile-name">{name}</p>
        <p className="profile-role">{role}</p>
      </div>

      <div className="profile-badge">Aktif</div>
    </div>
  );
}
