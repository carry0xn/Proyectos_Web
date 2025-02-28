import React from 'react';
import { useTranslation } from 'react-i18next';
import python from './img/comments-python.jpg';
import library from './img/saint_mary.png';
import calculadora from './img/calculadora.png';
import saintMary from './img/Saint-Mary.png';
import javaScript from './img/javascript-code.jpg';
import proyectWeb from './img/desarrollo-web-completo-con-html5-css3-js-php-y-mysql.png';
import sql from './img/para-que-sirve-lenguaje-sql.jpg';
import dataScience from './img/dataScience.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './css/Experiencia.css';

const Proyectos = () => {
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        i18n.changeLanguage(savedLang);
      }
  }, [i18n]);

  return (
    <section id="proyectos">
      <div className="proyectos">
        {/* Proyecto Python */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="imgBx">
                <img src={python} alt="python-img" />
              </div>
              <div className="content">
                <div>
                  <h2>{t('proyectos.python.titulo')}</h2>
                </div>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="content">
                <div>
                  <h2>{t('proyectos.python.titulo')}</h2>
                  <a href="https://github.com/carry0xn/Python" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> {t('proyectos.python.repositorio')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proyecto Calculadora */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="imgBx">
                <img src={calculadora} alt="calculadora-img" />
              </div>
              <div className="content">
                <div>
                  <h2>{t('proyectos.calculadora.titulo')}</h2>
                </div>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="content">
                <div>
                  <h2>{t('proyectos.calculadora.titulo')}</h2>
                  <a href="https://github.com/carry0xn/Negocio-Empanadas" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> {t('proyectos.calculadora.repositorio')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proyecto Biblioteca */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="imgBx">
                <img src={library} alt="library-img" />
              </div>
              <div className="content">
                <div>
                  <h2>{t('proyectos.biblioteca.titulo')}</h2>
                </div>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="content">
                <div>
                  <h2>{t('proyectos.biblioteca.titulo')}</h2>
                  <a href="https://github.com/carry0xn/Santa-Maria" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> {t('proyectos.biblioteca.repositorio')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proyecto Web */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="imgBx">
                <img src={javaScript} alt="javaScript-img" />
              </div>
              <div className="content">
                <div>
                  <h2>{t('proyectos.web.titulo')}</h2>
                </div>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="content">
                <div>
                  <h2>{t('proyectos.web.titulo')}</h2>
                  <a href="https://github.com/carry0xn/web-development" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> {t('proyectos.web.repositorio')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proyecto Web Completo */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="imgBx">
                <img src={proyectWeb} alt="proyectWeb-img" />
              </div>
              <div className="content">
                <div>
                  <h2>{t('proyectos.proyectoWeb.titulo')}</h2>
                </div>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="content">
                <div>
                  <h2>{t('proyectos.proyectoWeb.titulo')}</h2>
                  <p>{t('proyectos.proyectoWeb.descripcion')}</p>
                  <a href="https://github.com/JaviMun/CodoaCodo" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> {t('proyectos.proyectoWeb.repositorio')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proyecto SQL */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="imgBx">
                <img src={sql} alt="sql-img" />
              </div>
              <div className="content">
                <div>
                  <h2>{t('proyectos.sql.titulo')}</h2>
                </div>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="content">
                <div>
                  <h2>{t('proyectos.sql.titulo')}</h2>
                  <a href="https://github.com/carry0xn/SQL" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> {t('proyectos.sql.repositorio')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proyecto Data Science */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="imgBx">
                <img src={dataScience} alt="dataScience-img" />
              </div>
              <div className="content">
                <div>
                  <h2>{t('proyectos.dataScience.titulo')}</h2>
                </div>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="content">
                <div>
                  <h2>{t('proyectos.dataScience.titulo')}</h2>
                  <a href="https://github.com/carry0xn/DataScience" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> {t('proyectos.dataScience.repositorio')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proyecto Promocional */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="imgBx">
                <img src={saintMary} alt="calculadora-img" />
              </div>
              <div className="content">
                <div>
                  <h2>{t('proyectos.promocional.titulo')}</h2>
                </div>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="content">
                <div>
                  <h2>{t('proyectos.promocional.titulo')}</h2>
                  <a href="https://github.com/carry0xn/Saint-Mary" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> {t('proyectos.promocional.repositorio')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
