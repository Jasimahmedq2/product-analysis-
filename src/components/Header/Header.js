import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className='header-container'>
      <nav>
        <div className='anchor-parent'>
          <Link to="/home">HOME</Link>
          <Link to="/review">REVIEW</Link>
          <Link to="/dashboard">DASHBOARD</Link>
          <Link to="/blogs">BLOGS</Link>
          <Link to="/about">ABOUT</Link>
          
        </div>
      </nav>
    </div>
  );
};

export default Header;