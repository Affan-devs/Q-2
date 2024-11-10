import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Website</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
