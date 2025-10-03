// ProductCard.jsx
import React from "react";
import PropTypes from "prop-types";

function ProductCard({ productName, price, stock, isAvailable }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h2>{productName}</h2>
      <p>Harga: Rp {price}</p>
      <p>Stok: {stock}</p>
      <p>Status: {isAvailable ? "Tersedia" : "Habis"}</p>
    </div>
  );
}

// Validasi props
ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number,
  isAvailable: PropTypes.bool,
};

// Default props (untuk yang opsional)
ProductCard.defaultProps = {
  stock: 0,
  isAvailable: false,
};

export default ProductCard;
