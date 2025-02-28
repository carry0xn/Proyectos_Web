import React, { useState } from 'react';
import './css/Header.css';
import logo from './img/6073873.png';
import { useTranslation } from 'react-i18next'
import argentinaFlag from './img/Flag_of_Argentina.svg.webp'
import theUKFlag from './img/Flag_of_the_United_Kingdom.svg'
import '../i18n'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
    const { t, i18n } = useTranslation();
  
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
      localStorage.setItem('language', lang);
    };
  
    React.useEffect(() => {
      const savedLang = localStorage.getItem('language');
      if (savedLang) {
        i18n.changeLanguage(savedLang);
      }
    }, [i18n]);

  return (
    <header>
      <div className="header-container">
        <img src={logo} alt="logo" width="50px" />
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={menuOpen ? 'menu-active' : ''}>
          <ul className="nav-links">
          <li><a href="#perfil">{t('header.sobreMi')}</a></li>
            <li><a href="#skills-section">{t('header.habilidades')}</a></li>
            <li><a href="#proyectos">{t('header.proyectos')}</a></li>
            <li><a href="#formulario">{t('header.contacto')}</a></li>
            <li>
              <img
                style={{ cursor: 'pointer' }}
                src={argentinaFlag}
                alt="Argentina Flag"
                width="30px"
                onClick={() => changeLanguage('es')}
              />
            </li>
            <li>
              <img
                style={{ cursor: 'pointer' }}
                src={theUKFlag}
                alt="UK Flag"
                width="30px"
                onClick={() => changeLanguage('en')}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
