import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function UserInfo() {
    const { user } = useContext(UserContext)

    return (
        <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "8px" }}>
            <h3>Informasi Pengguna</h3>
            <p>Nama: {user.name}</p>
            <p>Email: {user.email || "Tidak ada email"}</p>
            <p>Status Login: {user.isLoggedIn ? "Sudah Login" : "Belom Login"}</p>
        </div>
    )

}