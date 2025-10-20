import React from 'react';

function About() {
  return (
    <div className="container">
      <h1 className="page-title">Tentang TokoKita</h1>
      <div className="about-content">
        <p>
          Selamat datang di TokoKita, destinasi belanja online terpercaya untuk produk berkualitas. 
          Kami berkomitmen menghadirkan pilihan produk terbaik yang dipilih khusus untuk Anda.
        </p>
        <p>
          Didirikan pada tahun 2025, misi kami adalah memberikan pengalaman berbelanja yang menyenangkan 
          dengan fokus pada kualitas, harga terjangkau, dan kepuasan pelanggan.
        </p>
        <h2 className="about-subtitle">Nilai-Nilai Kami</h2>
        <ul className="about-values">
          <li>Kualitas Utama - Kami tidak pernah kompromi dengan kualitas produk</li>
          <li>Kepuasan Pelanggan - Kebahagiaan Anda adalah prioritas kami</li>
          <li>Inovasi - Selalu mengikuti tren terkini untuk Anda</li>
          <li>Integritas - Jujur dan transparan dalam setiap transaksi</li>
        </ul>
      </div>
    </div>
  );
}

export default About;