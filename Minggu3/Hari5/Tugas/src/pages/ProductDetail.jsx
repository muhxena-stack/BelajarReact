import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <div className="loading">Memuat detail produk...</div>;
  }

  if (!product) {
    return <div className="container">Produk tidak ditemukan</div>;
  }

  return (
    <div className="container">
      <Link to="/products" className="back-link">
        ← Kembali ke Daftar Produk
      </Link>
      <div className="product-detail">
        <div>
          <img 
            src={product.images[0]} 
            alt={product.title} 
            className="product-detail-image"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/500?text=Tidak+Ada+Gambar';
            }}
          />
        </div>
        <div className="product-detail-info">
          <h1>{product.title}</h1>
          <p className="product-detail-price">Rp {product.price.toLocaleString('id-ID')}</p>
          <p className="product-detail-description">{product.description}</p>
          <button className="btn-primary">Tambah ke Keranjang</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;