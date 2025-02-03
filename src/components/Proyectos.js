import React from 'react'
import python from './img/comments-python.jpg'
import library from './img/saint_mary.png'
import calculadora from './img/calculadora.png'
import saintMary from './img/Saint-Mary.png'
import javaScript from './img/javascript-code.jpg'
import proyectWeb from './img/desarrollo-web-completo-con-html5-css3-js-php-y-mysql.png'
import sql from './img/para-que-sirve-lenguaje-sql.jpg'
import dataScience from './img/dataScience.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './css/Experiencia.css'

const Proyectos = () => (
  <section id="proyectos">
    <div className="proyectos">
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <div className="imgBx">
                            <img src={python} alt='python-img' />
                          </div>
                          <div class="content">
                            <div>
                              <h2>Proyectos Python</h2>
                            </div>
                          </div>
                        </div>
                        <div className="flip-card-back">
                          <div className="content">
                            <div>
                              <h2>Proyectos Python</h2>
                              <a href="https://github.com/carry0xn/Python" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> Repositorio Python </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <div className="imgBx">
                            <img src={calculadora} alt='calculadora-img' />
                          </div>
                          <div className="content">
                            <div>
                              <h2>Calculadora de Precio</h2>
                            </div>
                          </div>
                        </div>
                        <div className="flip-card-back">
                          <div className="content">
                            <div>
                              <h2>Proyectos Calculadora con JavaScript</h2>
                              <a href="https://github.com/carry0xn/Negocio-Empanadas" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> Repositorio Web </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <div className="imgBx">
                            <img src={library} alt='library-img' />
                          </div>
                          <div class="content">
                            <div>
                              <h2>Biblioteca de Santa Maria</h2>
                            </div>
                          </div>
                        </div>
                        <div className="flip-card-back">
                          <div className="content">
                            <div>
                              <h2>Biblioteca de Santa Maria</h2>
                              <a href="https://github.com/carry0xn/Santa-Maria" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> Repositorio Santa Maria </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <div className="imgBx">
                            <img src={javaScript} alt='javaScript-img' />
                          </div>
                          <div className="content">
                            <div>
                              <h2>Proyectos Web</h2>

                            </div>
                          </div>
                        </div>
                        <div className="flip-card-back">
                          <div className="content">
                            <div>
                              <h2>Proyectos Web</h2>
                              <a href="https://github.com/carry0xn/web-development" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> Repositorio Web </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <div className="imgBx">
                            <img src={proyectWeb} alt='proyectWeb-img' />
                          </div>
                          <div className="content">
                            <div>
                              <h2>Proyecto Web</h2>
                            </div>
                          </div>
                        </div>
                        <div className="flip-card-back">
                          <div className="content">
                            <div>
                              <h2>Proyecto Web</h2>
                              <p>Fue realizado en grupo</p>
                              <a href="https://github.com/JaviMun/CodoaCodo" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> Repositorio Web </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <div className="imgBx">
                            <img src={sql} alt='sql-img' />
                          </div>
                          <div className="content">
                            <div>
                              <h2>Proyectos SQL</h2>
                            </div>
                          </div>
                        </div>
                        <div className="flip-card-back">
                          <div className="content">
                            <div>
                              <h2>Proyectos SQL</h2>
                              <a href="https://github.com/carry0xn/SQL" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> Repositorio SQL </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <div className="imgBx">
                            <img src={dataScience} alt='dataScience-img' />
                          </div>
                          <div className="content">
                            <div>
                              <h2>Proyectos de Data Science</h2>
                            </div>
                          </div>
                        </div>
                        <div className="flip-card-back">
                          <div className="content">
                            <div>
                              <h2>Proyectos de Data Science</h2>
                              <a href="https://github.com/carry0xn/DataScience" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> Repositorio Data Science </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <div className="imgBx">
                            <img src={saintMary} alt='calculadora-img' />
                          </div>
                          <div className="content">
                            <div>
                              <h2>Website Promocional de Santa María</h2>
                            </div>
                          </div>
                        </div>
                        <div className="flip-card-back">
                          <div className="content">
                            <div>
                              <h2>Website Promocional de Santa María</h2>
                              <a href="https://github.com/carry0xn/Saint-Mary" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> Repositorio de Santa María </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
  </section>

)

export default Proyectos
