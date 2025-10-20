import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Halaman Tidak Ditemukan</h2>
      <p>Maaf, halaman <strong>{location.pathname}</strong> tidak tersedia.</p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
        <button className="btn-primary" onClick={handleGoHome}>
          Kembali ke Beranda
        </button>
        <button className="btn-secondary" onClick={handleGoBack}>
          Halaman Sebelumnya
        </button>
      </div>
    </div>
  );
}

export default NotFound;