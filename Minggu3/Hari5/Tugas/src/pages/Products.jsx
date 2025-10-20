import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  // Ambil query parameters
  const category = searchParams.get('category') || 'all';
  const sort = searchParams.get('sort') || 'default';
  const search = searchParams.get('search') || '';

  useEffect(() => {
    setLoading(true);
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => {
        let filteredProducts = data;

        // Filter by search
        if (search) {
          filteredProducts = filteredProducts.filter(product =>
            product.title.toLowerCase().includes(search.toLowerCase())
          );
        }

        // Filter by category
        if (category !== 'all') {
          filteredProducts = filteredProducts.filter(product =>
            product.category.name.toLowerCase() === category.toLowerCase()
          );
        }

        // Sort products
        if (sort === 'price-low') {
          filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sort === 'price-high') {
          filteredProducts.sort((a, b) => b.price - a.price);
        } else if (sort === 'name') {
          filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
        }

        setProducts(filteredProducts.slice(0, 20));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, [category, sort, search]); // Re-fetch when query params change

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSearchParams({ category: newCategory, sort, search });
  };

  const handleSortChange = (e) => {
    const newSort = e.target.value;
    setSearchParams({ category, sort: newSort, search });
  };

  const handleSearchChange = (e) => {
    const newSearch = e.target.value;
    setSearchParams({ category, sort, search: newSearch });
  };

  if (loading) {
    return <div className="loading">Memuat produk...</div>;
  }

  return (
    <div className="container">
      <h1 style={{ marginBottom: '2rem' }}>Daftar Produk Kami</h1>

      {/* Filter & Sort Section */}
      <div className="products-filter">
        <div className="filter-group">
          <label htmlFor="search">Cari Produk:</label>
          <input
            type="text"
            id="search"
            value={search}
            onChange={handleSearchChange}
            placeholder="Cari nama produk..."
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="category">Kategori:</label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="filter-select"
          >
            <option value="all">Semua Kategori</option>
            <option value="clothes">Pakaian</option>
            <option value="electronics">Elektronik</option>
            <option value="furniture">Furniture</option>
            <option value="shoes">Sepatu</option>
            <option value="others">Lainnya</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="sort">Urutkan:</label>
          <select
            id="sort"
            value={sort}
            onChange={handleSortChange}
            className="filter-select"
          >
            <option value="default">Default</option>
            <option value="name">Nama (A-Z)</option>
            <option value="price-low">Harga Terendah</option>
            <option value="price-high">Harga Tertinggi</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <p style={{ color: '#64748b', marginBottom: '1rem' }}>
        Menampilkan {products.length} produk
      </p>

      {/* Products Grid */}
      {products.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: '#64748b' }}>
          <h3>Produk tidak ditemukan</h3>
          <p>Coba ubah filter atau kata kunci pencarian</p>
        </div>
      ) : (
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;