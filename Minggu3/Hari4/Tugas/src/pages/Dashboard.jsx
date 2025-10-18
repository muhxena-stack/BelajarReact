import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="container">
      <h1 style={{ marginBottom: '2rem' }}>Dasbor Pengguna</h1>
      <div className="dashboard-container">
        <aside className="dashboard-sidebar">
          <h2>Menu</h2>
          <ul className="dashboard-menu">
            <li>
              <NavLink 
                to="/dashboard/profile" 
                className={({ isActive }) => isActive ? 'dashboard-link active' : 'dashboard-link'}
              >
                Profil Saya
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/dashboard/settings" 
                className={({ isActive }) => isActive ? 'dashboard-link active' : 'dashboard-link'}
              >
                Pengaturan
              </NavLink>
            </li>
          </ul>
        </aside>
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;