import React from 'react'
import './css/Experiencia.css'
import frameworks from './img/frameworks.png'
import lenguajes from './img/lenguajes.png'
import tool_tec from './img/tool_tec.png'

const Experiencia = () => (
  <div id="skills-section">
      <div class="skill-category">
          <h3>Lenguajes</h3>
          <ul>
              <li>JavaScript</li>
              <li>Python</li>
              <li>HTML & CSS</li>
              <li>SQL</li>
          </ul>
          <img src={lenguajes} alt="" />
      </div>
      <div class="skill-category">
          <h3>Frameworks</h3>
          <ul>
              <li>React</li>
              <li>Vue</li>
          </ul>
          <img src={frameworks} alt="" />
      </div>
      <div class="skill-category">
          <h3>Tecnologías y Herramientas</h3>
          <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>GitLab</li>
              <li>Visual Studio Code</li>
              <li>PostgreSQL</li>
              <li>Figma</li>
              <li>Virtual Box</li>
          </ul>
          <img src={tool_tec} alt="" />
      </div>
  </div>

);

export default Experiencia
