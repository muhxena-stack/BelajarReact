import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          TokoKita
        </NavLink>
        <ul className="navbar-menu">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
            >
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/products" 
              className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
            >
              Produk
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
            >
              Tentang
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
            >
              Kontak
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
            >
              Dasbor
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;