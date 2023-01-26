import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="container">
      <div className="header-block">
        <Link to="/">Home</Link>
        <Link to="/about">Products</Link>
        <Link to="/contact">contact</Link>
      </div>
    </div>
  );
}

export default Header