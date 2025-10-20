import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="product-card">
      <img 
        src={product.images[0]} 
        alt={product.title} 
        className="product-image"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/280x250?text=Tidak+Ada+Gambar';
        }}
      />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">Rp {product.price.toLocaleString('id-ID')}</p>
      </div>
    </Link>
  );
}

export default ProductCard;