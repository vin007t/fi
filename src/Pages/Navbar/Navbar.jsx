// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/PHomePage">Paints</Link></li>
        <li><Link to="/HHomePage">Hardware</Link></li>
        <li><Link to="/SHomePage">Sanitary</Link></li>
        <li><Link to="/Enquiry">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
