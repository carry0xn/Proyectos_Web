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

export default function GithubRepos() {  
    const [repos, setRepos] = useState([])
    const username = "carry0xn"

    const repoImages = {
        "Negocio-Empanadas": calculadora,
        "Proyectos_Web": proyectWeb,
        "Saint-Mary": saintMary,
        "DataScience": dataScience,
        "saint-mary-frontend": saintmaryplataform,
        "saint-mary-backend": saintmaryplataform,
        "Santa-Maria": library
    }
    
    const repoKeys = {
        "DataScience": "dataScience",
        "Negocio-Empanadas": "calculadora",
        "Proyectos_Web": "web",
        "Santa-Maria": "biblioteca",
        "Saint-Mary": "promocional",
        "saint-mary-backend": "plataform_2",
        "saint-mary-frontend": "plataform",
        
    }

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
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
    <div className="proyectos">
      {repos.map((repo) => {
        const homepageUrl = getHomepageUrl(repo)
        const key = repoKeys[repo.name]
        return (
            <div className="flip-card" key={repo.id}>
                <div className="flip-card-inner">
                {/* Frente de la card */}
                    <div className="flip-card-front">
                        <div className="content">
                            <h2>{t(`repos.${key}.titulo`)}</h2>
                            <img
                                src={repoImages[repo.name]}
                                alt={repo.name}
                                style={{ width: "100%", borderRadius: "10px" }}
                            />
                        </div>
                    </div>
                {/* Reverso de la card */}
                    <div className="flip-card-back">
                        <div className="content">
                            <h2>{t(`repos.${key}.titulo`)}</h2>
                            <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} /> {" "}
                            {t(`repos.${key}.repositorio`)}
                            </a>
                        {/* Si tenés GitHub Pages, lo muestro */}
                        {homepageUrl && (
                            <a href={homepageUrl} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 10 }}>
                            Web
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
        )
    })}
    </div>
  )
}
