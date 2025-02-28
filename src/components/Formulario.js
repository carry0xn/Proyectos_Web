import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './css/Header.css'
import { useTranslation } from 'react-i18next'
import '../i18n'


const Formulario = () => {
    const [mensaje, setMensaje] = useState('')
    const formRef = useRef()
      const { t, i18n } = useTranslation();

      React.useEffect(() => {
        const savedLang = localStorage.getItem('language');
        if (savedLang) {
            i18n.changeLanguage(savedLang);
          }
      }, [i18n]);
  
    const sendEmail = (e) => {
      e.preventDefault()

    emailjs.sendForm('service_4qvm70b', 'template_6a8xxil', formRef.current, 'DtRM4AG326nzTI_g5')
    .then((response) => {
        setMensaje(t('formulario.mensajeExitoso'))
        console.log(response.status, response.text)
      })
      .catch((error) => {
        setMensaje(t('formulario.mensajeNoExitoso'))
        console.log(error)
      })
    }

    return (
        <section id='formulario'>
          <div className='form'>
            <h1>{t('formulario.hablemos')}</h1>
            <form ref={formRef} onSubmit={sendEmail}>
              <input type="text" name="from_name" placeholder={t('formulario.nombre')} required />
              <input type="email" name="from_email" placeholder={t('formulario.correo')} required />
              <textarea name="message" placeholder={t('formulario.mensaje')} required />
              <button type="submit">{t('formulario.enviar')}</button>
            </form>
            {mensaje && <p>{mensaje}</p>}
          </div>
        </section>
      );
    }    

export default Formulario
