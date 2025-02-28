import React from 'react'
import profile from './img/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import cvEs from './pdf/CV_Carolina_Esp.pdf'
import cvEn from './pdf/CV_Carolina_Eng.pdf'
import { useTranslation } from 'react-i18next'
import '../i18n'

const Perfil = () => {
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return (
    <section id="perfil">
      <div className="container">
        <div className="profile-content">
          <div className="profile-photo">
            <img src={profile} alt="yo" />
          </div>
          <div className="profile-details">
            <p className="intro-text" dangerouslySetInnerHTML={{ __html: t('perfil.intro') }}></p>
            <p className="location">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {t('perfil.location')}
            </p>
            <a href={cvEs} download>
              <button className="purple-button">{t('perfil.downloadCVES')}</button>
            </a>
            <a href={cvEn} download>
              <button className="purple-button">{t('perfil.downloadCVEN')}</button>
            </a>
            <ul className="contact-info">
              <li>
                <a href="mailto:rodriguezc.medina@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/carolina-rodriguez-medina-676353225/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="https://github.com/carry0xn">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a href="https://wa.me/541169512534?text=Hola%20Como%20Estas?">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perfil;