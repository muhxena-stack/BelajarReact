import React from 'react';

function DashboardProfile() {
  return (
    <div>
      <h2 className="dashboard-content-title">Profil Saya</h2>
      <div className="profile-details">
        <div className="profile-item">
          <strong>Nama:</strong> Muhammad Xena
        </div>
        <div className="profile-item">
          <strong>Email:</strong> xenagood@email.com
        </div>
        <div className="profile-item">
          <strong>Bergabung Sejak:</strong> Januari 2025
        </div>
        <div className="profile-item">
          <strong>Total Pesanan:</strong> 12
        </div>
        <button className="btn-primary">Edit Profil</button>
      </div>
    </div>
  );
}

export default DashboardProfile;