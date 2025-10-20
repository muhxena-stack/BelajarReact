import React from 'react';

function DashboardProfile() {
  const username = localStorage.getItem('username') || 'Pengguna';

  return (
    <div>
      <h2>Profil Saya</h2>
      <div style={{ marginTop: '2rem' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <strong>Username:</strong> {username}
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <strong>Email:</strong> {username}@tokokita.com
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <strong>Bergabung Sejak:</strong> Januari 2025
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <strong>Total Pesanan:</strong> 12
        </div>
        <button className="btn-primary">Edit Profil</button>
      </div>
    </div>
  );
}

export default DashboardProfile;