import React, { useState } from 'react'
import './css/Header.css'
import logo from './img/6073873.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

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
            <li><a href="#perfil">Sobre Mi</a></li>
            <li><a href="#skills-section">Skills</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#formulario">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header