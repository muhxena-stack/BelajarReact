// src/ProfileCard.jsx
import React from "react";

function ProfileCard({ name, photo, bio, skills }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "12px",
        padding: "16px",
        width: "280px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={photo}
        alt={name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "12px",
        }}
      />
      <h2 style={{ margin: "0", fontSize: "1.5rem", color: "#ffffffff" }}>{name}</h2>
      <p style={{ fontSize: "0.9rem", color: "#ffffffff" }}>{bio}</p>

      <h3 style={{ marginTop: "12px", fontSize: "1.2rem" }}>Skills</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {skills.map((skill, index) => (
          <li
            key={index}
            style={{
              background: "#000000ff",
              margin: "4px 0",
              padding: "6px",
              borderRadius: "6px",
            }}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileCard;
