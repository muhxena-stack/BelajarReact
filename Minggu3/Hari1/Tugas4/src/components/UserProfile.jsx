import React from "react";
import useUserContext from "../context/useUserContext";

export default function UserProfile() {
  const { user, login, logout, updateProfile } = useUserContext();

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Profil Pengguna</h2>
      <p>Nama: {user.name}</p>
      <p>Email: {user.email || "Belum diisi"}</p>
      <p>Status: {user.isLoggedIn ? "Sudah login" : "Belum login"}</p>

      {!user.isLoggedIn ? (
        <button onClick={() => login("Xenaa", "xenaa@example.com")}>Login</button>
      ) : (
        <>
          <button onClick={logout}>Logout</button>
          <button onClick={() => updateProfile("FullDev", "stack@example.com")}>
            Update Profil
          </button>
        </>
      )}
    </div>
  );
}
