import React from 'react'
import './css/Inicio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer>
        <ul className="contact-info">
            <li><a href="mailto:rodriguezc.medina@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /> </a></li>
            <li><a href="https://www.linkedin.com/in/carolina-rodriguez-medina-676353225/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/> </a></li>
            <li><a href="https://github.com/carry0xn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="https://wa.me/541169512534?text=Hola%20Como%20Estas?%20" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
        </ul>
    </footer>

  )
}

export default Footer
