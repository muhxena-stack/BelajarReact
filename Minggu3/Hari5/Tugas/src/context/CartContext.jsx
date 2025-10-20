import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Tambah produk ke keranjang
  const addToCart = (product) => {
    setCartItems(prevItems => {
      // Cek apakah produk sudah ada di keranjang
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Kalau sudah ada, tambah quantity
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Kalau belum ada, tambah produk baru dengan quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Hapus produk dari keranjang
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Kurangi quantity produk
  const decreaseQuantity = (productId) => {
    setCartItems(prevItems => {
      const item = prevItems.find(item => item.id === productId);
      
      if (item.quantity === 1) {
        // Kalau quantity = 1, hapus produk
        return prevItems.filter(item => item.id !== productId);
      } else {
        // Kalau > 1, kurangi quantity
        return prevItems.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  // Tambah quantity produk
  const increaseQuantity = (productId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Hitung total item di keranjang
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Hitung total harga
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Kosongkan keranjang
  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    getTotalItems,
    getTotalPrice,
    clearCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Custom hook untuk menggunakan cart context
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart harus digunakan di dalam CartProvider');
  }
  return context;
}