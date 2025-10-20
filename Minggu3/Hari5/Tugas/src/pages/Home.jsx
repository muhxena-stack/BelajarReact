import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="hero">
        <h1>Selamat Datang di TokoKita</h1>
        <p>Temukan produk-produk berkualitas dengan harga terbaik</p>
        <Link to="/products" className="btn-primary">
          Belanja Sekarang
        </Link>
      </div>
      
      <div className="container">
        <h2 className="section-title">Kenapa Memilih Kami?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Produk Berkualitas</h3>
            <p>Kami hanya menyediakan produk terbaik dan original</p>
          </div>
          <div className="feature-item">
            <h3>Pengiriman Cepat</h3>
            <p>Produk sampai dengan aman dan cepat ke tangan Anda</p>
          </div>
          <div className="feature-item">
            <h3>Layanan Prima</h3>
            <p>Tim customer service siap membantu Anda 24/7</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;