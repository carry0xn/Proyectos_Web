import React from 'react'
import './css/Experiencia.css'
import { FaJs, FaPython, FaHtml5, FaCss3Alt, FaDatabase, FaReact, FaNodeJs, FaGit, FaGithub, FaCode } from "react-icons/fa";
import { SiPostgresql, SiBootstrap, SiPostman } from "react-icons/si";
import { useTranslation } from 'react-i18next'
import '../i18n'

const Experiencia = () => {
    const { t, i18n } = useTranslation();
  
    React.useEffect(() => {
      const savedLang = localStorage.getItem('language');
      if (savedLang) {
        i18n.changeLanguage(savedLang);
      }
    }, [i18n]);

  return (
    <div id="skills-section">
      <div className="skill-category">
        <h3>{t('experience.languages')}</h3>
        <ul>
          <li><FaJs /> JavaScript</li>
          <li><FaPython /> Python</li>
          <li><FaHtml5 /> HTML</li>
          <li><FaCss3Alt /> CSS</li>
          <li><FaDatabase /> SQL</li>
        </ul>
      </div>
  
      <div className="skill-category">
        <h3>Framework</h3>
        <ul>
          <li><FaReact /> React</li>
          <li><FaNodeJs /> Node.js</li>
          <li><SiBootstrap /> Bootstrap</li>
        </ul>
      </div>
  
      <div className="skill-category">
        <h3>{t('experience.technology')}</h3>
        <ul>
          <li><FaGit /> Git</li>
          <li><FaGithub /> GitHub</li>
          <li><SiPostgresql /> PostgreSQL</li>
          <li><SiPostman /> Postman</li>
          <li><FaCode /> Visual Studio Code</li>
        </ul>
      </div>
    </div>
  );
};
  
export default Experiencia;
