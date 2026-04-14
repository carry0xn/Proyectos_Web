import React from 'react'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faGraduationCap, 
  faLaptopCode, 
  faLanguage, 
  faGlobe, 
  faDatabase, 
  faCode, 
  faChartLine
} from '@fortawesome/free-solid-svg-icons'
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons'
import './css/Timeline.css'

const Timeline = () => {
  const { t } = useTranslation()
  const timelineItems = t('timeline.items', { returnObjects: true });
  const statusLabels = t('timeline.statusLabels', { returnObjects: true })

  // Mapeo de iconos
  const iconMap = {
    'graduation-cap': faGraduationCap,
    'laptop-code': faLaptopCode,
    'language': faLanguage,
    'globe': faGlobe,
    'react': faReact,
    'database': faDatabase,
    'code': faCode,
    'chart-line': faChartLine,
    'python': faPython
  }

  const handleCertificateClick = (certUrl) => {
    if (certUrl) {
      // Crear elemento de descarga temporal
      const link = document.createElement('a')
      link.href = `/pdf/${certUrl}`
      link.download = certUrl
      link.target = '_blank'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <div className="timeline-header">
          <h2>{t('timeline.title')}</h2>
          <p className="timeline-subtitle">{t('timeline.subtitle')}</p>
        </div>
        
        <div className="timeline">
          {timelineItems?.map((item, index) => (
            <div 
              key={item.id} 
              className={`timeline-item ${item.type} ${item.status}`}
            >
              <div className="timeline-marker">
                <FontAwesomeIcon 
                  icon={iconMap[item.icon]} 
                  className="timeline-icon" 
                />
              </div>
              
              <div className="timeline-content">
                <div className="timeline-header-item">
                  <h3 className="timeline-title">{item.title}</h3>
                  <span className={`status-badge ${item.status}`}>
                    {statusLabels[item.status]}
                  </span>
                </div>
                
                <h4 className="timeline-institution">{item.institution}</h4>
                <span className="timeline-period">{item.period}</span>
                
                <p className="timeline-description">{item.description}</p>
                
                {item.certUrl && (
                  <button 
                    className="cert-button"
                    onClick={() => handleCertificateClick(item.certUrl)}
                    aria-label={`${t('timeline.downloadCert')} - ${item.title}`}
                  >
                     {t('timeline.downloadCert')}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline