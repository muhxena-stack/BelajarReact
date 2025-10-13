import React from "react";
import Profile from "./Profile";

export default function Toolbar({ user }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginTop: "10px" }}>
      <h2>Toolbar</h2>
      <Profile user={user} /> {/* Meneruskan user ke Profile */}
    </div>
  );
}
