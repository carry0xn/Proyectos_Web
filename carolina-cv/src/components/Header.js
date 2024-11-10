import React, { useState } from 'react';
import './css/Header.css'
import logo from './img/6073873.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="header-container">
        <img src={logo} alt='logo'width='50px'/>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={menuOpen ? 'menu-active' : ''}>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header