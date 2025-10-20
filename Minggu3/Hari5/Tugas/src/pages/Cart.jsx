import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    // Simulasi checkout
    alert(`Checkout berhasil! Total: Rp ${getTotalPrice().toLocaleString('id-ID')}`);
    clearCart();
    
    // Programmatic Navigation - redirect ke home setelah checkout
    navigate('/', { replace: true });
  };

  if (cartItems.length === 0) {
    return (
      <div className="container">
        <div className="cart-empty">
          <h2>Keranjang Belanja Kosong</h2>
          <p>Anda belum menambahkan produk ke keranjang</p>
          <Link to="/products" className="btn-primary">
            Mulai Belanja
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 style={{ marginBottom: '2rem' }}>Keranjang Belanja</h1>
      
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img 
                src={item.images[0]} 
                alt={item.title}
                className="cart-item-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/100?text=No+Image';
                }}
              />
              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <p className="cart-item-price">Rp {item.price.toLocaleString('id-ID')}</p>
              </div>
              <div className="cart-item-quantity">
                <button 
                  className="quantity-btn"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <span className="quantity-value">{item.quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
              <div className="cart-item-total">
                <p>Rp {(item.price * item.quantity).toLocaleString('id-ID')}</p>
              </div>
              <button 
                className="cart-item-remove"
                onClick={() => removeFromCart(item.id)}
              >
                Hapus
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Ringkasan Belanja</h2>
          <div className="cart-summary-row">
            <span>Total Item:</span>
            <span>{cartItems.reduce((total, item) => total + item.quantity, 0)} item</span>
          </div>
          <div className="cart-summary-row">
            <span>Total Harga:</span>
            <span className="cart-total-price">
              Rp {getTotalPrice().toLocaleString('id-ID')}
            </span>
          </div>
          <button className="btn-primary" style={{ width: '100%', marginTop: '1rem' }} onClick={handleCheckout}>
            Checkout
          </button>
          <button 
            className="btn-secondary" 
            style={{ width: '100%', marginTop: '0.5rem' }}
            onClick={clearCart}
          >
            Kosongkan Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;