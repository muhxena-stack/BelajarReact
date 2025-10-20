import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Ambil halaman asal sebelum redirect ke login
  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Simulasi login (username: admin, password: admin123)
    if (username === 'admin' && password === 'admin123') {
      // Generate random token
      const generateToken = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 32; i++) {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
      };

      const token = generateToken();
      localStorage.setItem('authToken', token);
      localStorage.setItem('username', username);

      // Programmatic Navigation - redirect ke halaman asal atau dashboard
      navigate(from, { replace: true });
    } else {
      setError('Username atau password salah! (Hint: admin / admin123)');
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <div className="login-box">
          <h1>Login</h1>
          <p style={{ color: '#64748b', marginBottom: '2rem' }}>
            Silakan login untuk mengakses dashboard
          </p>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan username"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password"
                required
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
              Login
            </button>
          </form>

          <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#f1f5f9', borderRadius: '8px' }}>
            <p style={{ fontSize: '0.875rem', color: '#64748b', margin: 0 }}>
              <strong>Demo Credentials:</strong><br />
              Username: admin<br />
              Password: admin123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;