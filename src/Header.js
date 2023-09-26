import React from 'react';
import './Header.css';
import logo from './logo/logo.png';
function Header() {
  return (
    <header className="header">
      <div className="header-content">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
        <h1>Welcome to My Beautiful Website</h1>
      </div>
    </header>
  );
}

export default Header;
