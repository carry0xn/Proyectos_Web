import React from 'react'
import { useTranslation } from 'react-i18next'
import library from './img/saint_mary.png'
import calculadora from './img/calculadora.png'
import saintMary from './img/Saint-Mary.png'
import proyectWeb from './img/desarrollo-web-completo-con-html5-css3-js-php-y-mysql.png'
import dataScience from './img/dataScience.png'
import saintmaryplataform from './img/Captura de pantalla (154).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './css/Experiencia.css'

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
                <a href="https://carry0xn.github.io/Negocio-Empanadas/">Web</a>
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
                <a href='https://carry0xn.github.io/Santa-Maria/'>Web</a>
              </div>
            </div>
          </div>
        </div>

        {/* Proyecto Web */}
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
                <img src={saintMary} alt="saintmary-img" />
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
                <a href="https://carry0xn.github.io/Saint-Mary/">Web</a>
              </div>
            </div>
          </div>
        </div>

        {/* Proyecto Plataform */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="imgBx">
                <img src={saintmaryplataform} alt="plataform-img" />
              </div>
              <div className="content">
                <div>
                  <h2>{t('proyectos.plataform.titulo')}</h2>
                </div>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="content">
                <div>
                  <h2>{t('proyectos.plataform.titulo')}</h2>
                  <a href="https://github.com/carry0xn/saint-mary-frontend" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> {t('proyectos.plataform.repositorio')}
                  </a>
                  <a href="https://github.com/carry0xn/saint-mary-backend" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> {t('proyectos.plataform.repositorio2')}
                  </a>
                </div>
                <a href="https://carry0xn.github.io/saint-mary-frontend/">Web</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Proyectos;
