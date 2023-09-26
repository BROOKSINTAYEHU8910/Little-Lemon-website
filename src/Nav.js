import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
