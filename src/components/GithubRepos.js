// src/components/GithubRepos.js
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next'
import React from 'react'
import library from './img/saint_mary.png'
import calculadora from './img/calculadora.png'
import saintMary from './img/Saint-Mary.png'
import proyectWeb from './img/desarrollo-web-completo-con-html5-css3-js-php-y-mysql.png'
import dataScience from './img/dataScience.png'
import saintmaryplataform from './img/Captura de pantalla (154).png'
import aibeautyassistant from './img/ai-beauty-assistant.png'

export default function GithubRepos() {  
    const [repos, setRepos] = useState([])
    const username = "carry0xn"

    const repoImages = {
        "Negocio-Empanadas": calculadora,
        "Proyectos_Web": proyectWeb,
        "Saint-Mary": saintMary,
        "DataScience": dataScience,
        "saint-mary-full-stack": saintmaryplataform,
        "Santa-Maria": library,
        "ai-beauty-assistant": aibeautyassistant
    }
    
    const repoKeys = {
        "DataScience": "dataScience",
        "Negocio-Empanadas": "calculadora",
        "Proyectos_Web": "web",
        "Santa-Maria": "biblioteca",
        "Saint-Mary": "promocional",
        "saint-mary-full-stack": "plataform",
        "ai-beauty-assistant": "aiBeautyAssistant"
    }

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`)
      .then((res) => res.json())
      .then((data) => {
      const filtered = data.filter((repo) => 
        repo.name !== "Estrategias-de-Persistencia" && 
        repo.name !== "Estrategias-Persistencia" && 
        repo.name !== "anti-social-tp" &&
        repo.name !== "CIU" &&
        repo.name !== "amigo-secreto-ONE"
    )
        setRepos(filtered)
    })
  }, [])
  const getHomepageUrl = (repo) => {
    // 1) si existe homepage y no está vacío -> normalizar y devolver
    if (repo.homepage && repo.homepage.toString().trim() !== "") {
      const h = repo.homepage.toString().trim()
      return h.startsWith("http") ? h : `https://${h}`
    }
    // 2) fallback si GitHub Pages está habilitado para ese repo
    if (repo.has_pages) {
      const owner = repo.owner?.login || username
      if (repo.name === `${owner}.github.io`) {
        return `https://${owner}.github.io/`
      }
      return `https://${owner}.github.io/${repo.name}/`
    }
    // 3) no hay URL de demo
    return null
  }

    const { t, i18n } = useTranslation()
  
    React.useEffect(() => {
      const savedLang = localStorage.getItem('language')
      if (savedLang) {
          i18n.changeLanguage(savedLang)
        }
    }, [i18n])
  

  return (
    <section id="proyectos">
      <div className="proyectos">
        <div style={{ 
          gridColumn: "1 / -1", 
          textAlign: "center", 
          padding: "2rem", 
          marginBottom: "1rem"
        }}>
          <h1 style={{ fontSize: "2.5rem", color: "#333", marginBottom: "0.5rem" }}>
            {t('repos.title')}
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "0" }}>
            {t('repos.subtitle')}
          </p>
        </div>
        
        {repos.map((repo) => {
          const homepageUrl = getHomepageUrl(repo)
          const repoKeyName = Object.keys(repoKeys).find(
            (name) => name.toLowerCase() === repo.name.toLowerCase()
          )
          const key = repoKeyName ? repoKeys[repoKeyName] : null
          const title = key ? t(`repos.${key}.titulo`) : repo.name
          const description = key
            ? t(`repos.${key}.description`)
            : (repo.description || "")
          const repositoryLabel = key
            ? t(`repos.${key}.repositorio`)
            : "Ver Código"
          return (
              <div className="flip-card" key={repo.id}>
                  <div className="flip-card-inner">
                  {/* Frente de la card */}
                      <div className="flip-card-front">
                          <div className="content">
                                <h2>{title}</h2>
                              <img
                                  src={repoImages[repoKeyName]}
                                  alt={description}
                                  style={{ width: "100%", borderRadius: "10px" }}
                              />
                          </div>
                      </div>
                  {/* Reverso de la card */}
                      <div className="flip-card-back">
                          <div className="content">
                              <h2>{title}</h2>
                              <p style={{ fontSize: "14px", marginBottom: "15px", color: "#ddd" }}>
                                {description}
                              </p>
                              
                              <a
                              href={repo.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              >
                                  <FontAwesomeIcon icon={faGithub} /> {" "}
                              {repositoryLabel}
                              </a>
                          {/* Si tenés GitHub Pages, lo muestro */}
                          {homepageUrl && (
                              <a 
                                href={homepageUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ marginLeft: 15, padding: "5px 10px", backgroundColor: "#007bff", color: "white", textDecoration: "none", borderRadius: "5px", fontSize: "14px" }}
                              >
                              Demo
                              </a>
                          )}
                      </div>
                  </div>
              </div>
          </div>
          )
      })}
      </div>
    </section>
  )
}
