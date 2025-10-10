import React, { useState, useEffect, use } from "react";

export default function UserProfile() {
    const [user, setUser] = useState(null);


    if (loading) return <p>Memuat data pengguna...</p>;
    if (!user) return <p>Pengguna tidak ditemukan.</p>;

    return (
        <div>
            <h2>Profil Pengguna</h2>
            <p>Nama: {user.nama}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}