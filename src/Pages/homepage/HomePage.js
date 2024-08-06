// src/HomePage.js

import React from 'react';
import './HomePage.css'; // Import the CSS file for styling
import { Card, CardContent, Typography } from '@mui/material'; // Import MUI components
import product1 from './images/product1.jpg'
import product2 from './images/product2.jpg'
import a1 from './images/a1.jpg'
import a2 from './images/a2.jpg'
import product3 from './images/product3.jpg'

import StarRatings from 'react-star-ratings'; // Import the star ratings component

const HomePage = () => {
    return (
        <div className="homepage">
            <header className="header">              
            </header>
            <section className="banner">
                <img src={product1} alt="Sanitary Hardware Banner" />
            </section>
            <section className="hero">
                <h2>Quality Sanitary Hardware for Every Need</h2>
                <p>Discover our range of top-quality products designed to meet your needs.</p>
                <button>Shop Now</button>
            </section>
            <section id="about" className="about">
                <h2>About Us</h2>
                <div className="about-content">
                    <img src={a1} alt="About Us 1" className="about-image" />
                    <p>We are a leading provider of sanitary hardware, offering top-notch products and solutions for both residential and commercial applications.</p>
                    <img src={a2} alt="About Us 2" className="about-image" />
                </div>
            </section>
            <section id="products" className="products">
                <h1>Our Products</h1>
                <div className="product-list">
                    <Card className="product-card">
                        <img src={product2} alt="Product 1" className="product-image" />
                        <CardContent>
                            <Typography variant="h6">Product 1</Typography>
                            <Typography variant="body2">High-quality sanitary product for all your needs.</Typography>
                            <StarRatings
                                rating={3.5} // Replace with dynamic rating if needed
                                starRatedColor="gold"
                                numberOfStars={5}
                                name='rating'
                                starDimension='20px'
                                starSpacing='5px'
                            />
                        </CardContent>
                    </Card>
                    <Card className="product-card">
                        <img src={product3} alt="Product 2" className="product-image" />
                        <CardContent>
                            <Typography variant="h6">Product 2</Typography>
                            <Typography variant="body2">Durable and reliable sanitary hardware solutions.</Typography>
                            <StarRatings
                                rating={3.5} // Replace with dynamic rating if needed
                                starRatedColor="gold"
                                numberOfStars={5}
                                name='rating'
                                starDimension='20px'
                                starSpacing='5px'
                            />
                        </CardContent>
                    </Card>
                    {/* Add more product cards as needed */}
                </div>
            </section>
            
        </div>
    );
};

export default HomePage;
