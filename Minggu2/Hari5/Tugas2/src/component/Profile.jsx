import React from "react";
import Avatar from "./Avatar";
import ThemeDisplay from "./ThemeDisplay";

export default function Profile({ user }) {
  return (
    <div style={{ border: "1px solid lightgray", padding: "10px", marginTop: "10px" }}>
      <h3>Profile</h3>
      <Avatar user={user} /> {/* Meneruskan user ke Avatar */}
      <ThemeDisplay theme={user.theme} /> {/* Meneruskan theme ke ThemeDisplay */}
    </div>
  );
}
