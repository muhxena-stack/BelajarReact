import React, { useState } from 'react';

function DashboardSettings() {
  const [settings, setSettings] = useState({
    notifications: true,
    newsletter: false,
    darkMode: false
  });

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.checked
    });
  };

  const handleSave = () => {
    alert('Pengaturan berhasil disimpan!');
  };

  return (
    <div>
      <h2>Pengaturan Akun</h2>
      <div style={{ marginTop: '2rem' }}>
        <div className="form-group">
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input 
              type="checkbox" 
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
            />
            Aktifkan Notifikasi
          </label>
        </div>
        <div className="form-group">
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input 
              type="checkbox" 
              name="newsletter"
              checked={settings.newsletter}
              onChange={handleChange}
            />
            Berlangganan Newsletter
          </label>
        </div>
        <div className="form-group">
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input 
              type="checkbox" 
              name="darkMode"
              checked={settings.darkMode}
              onChange={handleChange}
            />
            Mode Gelap
          </label>
        </div>
        <button className="btn-primary" onClick={handleSave}>Simpan Pengaturan</button>
      </div>
    </div>
  );
}

export default DashboardSettings;