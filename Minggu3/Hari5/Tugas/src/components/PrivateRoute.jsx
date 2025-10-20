import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

// Fungsi untuk cek apakah user sudah login
const isAuthenticated = () => {
  return localStorage.getItem('authToken') !== null;
};

function PrivateRoute() {
  const location = useLocation();

  if (!isAuthenticated()) {
    // Redirect ke login dan simpan lokasi asal
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Jika sudah login, render komponen anak (Outlet)
  return <Outlet />;
}

export default PrivateRoute;