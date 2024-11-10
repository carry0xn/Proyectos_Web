import React from 'react'
import profile from './img/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


const Perfil = () => (
  <section id="perfil">
    <div className="container">
      <div className="profile-content">
        <div className="profile-photo">
          <img src={profile} alt='yo' />
        </div>
        <div className="profile-details">
          <p className="intro-text">
          Bienvenido a mi portafolio. Soy Carolina, estudiante de <strong>Licenciatura en Informática</strong> y 
          <strong>Técnica en Programación</strong> con experiencia en tecnologías como <strong>React, JavaScript</strong> 
          y <strong>CSS</strong>. Tengo un alto nivel de inglés, adquirido a lo largo de varios años de estudio, y disfruto 
          de asumir nuevos desafíos en cada proyecto. Si estás buscando a alguien comprometido, proactivo y con habilidades técnicas y lingüísticas, 
          ¡has llegado al lugar indicado!</p>
          <p className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Buenos Aires, Argentina
          </p>
        <ul className="contact-info">
            <li><a href="mailto:rodriguezc.medina@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /> </a></li>
            <li><a href="https://www.linkedin.com/in/carolina-rodriguez-medina-676353225/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/> </a></li>
            <li><a href="https://github.com/carry0xn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="https://wa.me/541169512534?text=Hola%20Como%20Estas?%20" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
        </ul>
      </div>
      </div>
      <div className="education">
      <h3>Formación Académica</h3>
      <ul className="education-list">
        <li>
          <strong>Técnica en Programación</strong>, Universidad Nacional de Hurlingham
        </li>
        <li>
          <strong>Licenciatura en Informática</strong> (en curso), Universidad Nacional de Hurlingham
        </li>
        <li>
          <strong>Ingles</strong> (en curso), Saint Mary: School of English (First Certificated Level: C1)
        </li>
      </ul>

      <h3>Cursos Complementarios</h3>
      <ul className="course-list">
        <li><strong>Full Stack Python</strong> – Codo a Codo</li>
        <li><strong>Full Stack JavaScript</strong> – Codo a Codo</li>
        <li><strong>Python para Data Science</strong> – Universidad Nacional de Hurlingham (colaboración con CETI)</li>
        <li><strong>PostgreSQL</strong> – Universidad Nacional de Hurlingham (colaboración con CETI)</li>
      </ul>
      </div>
    </div>
  </section>


);

export default Perfil;
