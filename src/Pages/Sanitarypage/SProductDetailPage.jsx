// src/ProductDetailPage.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from './sdata';
import './Sanitary.css';

function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return <div>Product not found</div>;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="product-detail">
      <div className="slideshow">
        <button className="nav-button prev" onClick={prevImage}>❮</button>
        <img src={product.images[currentImageIndex]} alt={product.name} className="product-detail-image" />
        <button className="nav-button next" onClick={nextImage}>❯</button>
      </div>
      <div className="product-detail-info">
        <h1 className="product-detail-name">{product.name}</h1>
        <p className="product-detail-description">{product.description}</p>
        <p className="product-detail-price">₹{product.price.toLocaleString()}</p>
        <button className="add-to-cart-button" onClick={() => alert('Added to Cart')}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetailPage;
