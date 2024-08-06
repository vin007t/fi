// src/HomePage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from './sdata';
import ProductCard from './SProductCard';
import './Sanitary.css';
import SH from './media/SH.jpg'
function HomePage() {
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOrder) {
      case 'asc':
        return a.price - b.price;
      case 'desc':
        return b.price - a.price;
      case 'id':
        return a.id - b.id;
      default:
        return 0;
    }
  });

  return (
    <div className="home-container">
      <img src={SH} alt="Banner" className="banner-image" />
      <div className="filter-container">
        <label htmlFor="price-filter">Sort by Price:</label>
        <select id="price-filter" value={sortOrder} onChange={handleSortChange}>
          <option value="id">None</option>
          <option value="desc">High to Low</option> 
          <option value="asc">Low to High</option>
                 
        </select>
      </div>
      <div className="product-grid">
        {sortedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
