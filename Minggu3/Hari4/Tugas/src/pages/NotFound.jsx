import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Halaman Tidak Ditemukan</h2>
      <p>Maaf, halaman yang Anda cari tidak tersedia.</p>
      <Link to="/" className="btn-primary" style={{ marginTop: '2rem' }}>
        Kembali ke Beranda
      </Link>
    </div>
  );
}

export default NotFound;