import React from 'react'
import './css/Header.css'
import logo from './img/6073873.png'

function Header() {
  return (
    <header>
        <div className="header-container">
            <img src={logo} alt="" height='50px'/>
            <nav>
            <ul className="nav-links">
                <li><a href="#perfil">Sobre Mí</a></li>
                <li><a href="#proyectos">Proyectos</a></li>
                <li><a href="#skills-section">Skills</a></li>
            </ul>
            </nav>
        </div>
    </header>

  )
}

export default Header
