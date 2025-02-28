import React from 'react'
import './css/Inicio.css'
import { useTranslation } from 'react-i18next'
import '../i18n'

const Inicio = () => {
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);
  return (
    <section id="inicio_header">
      <div id="inicio_animacion">
                <div class="saludo">
                    <div class="saludo_container">
                        <p class="saludo_container_text">
                            {t('saludo.saludo')}
                        </p>
        
                        <ul class="saludo_container_list">
                            <li class="saludo_container_list_item">{t('saludo.saludo1')}</li>
                            <li class="saludo_container_list_item">{t('saludo.saludo2')}</li>
                            <li class="saludo_container_list_item">{t('saludo.saludo3')}</li>
                            <li class="saludo_container_list_item">{t('saludo.saludo4')}</li>
                        </ul>
                    </div>
                </div>
            </div>
    </section>
    
  )
}

export default Inicio
