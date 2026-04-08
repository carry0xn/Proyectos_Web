import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './css/Formulario.css'
import { useTranslation } from 'react-i18next'
import '../i18n'

const Formulario = () => {
    const [mensaje, setMensaje] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const formRef = useRef()
    const { t, i18n } = useTranslation()

      React.useEffect(() => {
        const savedLang = localStorage.getItem('language')
        if (savedLang) {
            i18n.changeLanguage(savedLang)
          }
      }, [i18n])
  
    const validateForm = (formData) => {
      const newErrors = {}
      
      if (!formData.get('from_name')?.trim()) {
        newErrors.name = t('formulario.required')
      }
      
      const email = formData.get('from_email')?.trim()
      if (!email) {
        newErrors.email = t('formulario.required')
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = t('formulario.invalidEmail')
      }
      
      if (!formData.get('message')?.trim()) {
        newErrors.message = t('formulario.required')
      }
      
      return newErrors
    }

    const sendEmail = (e) => {
      e.preventDefault()
      setMensaje('')
      setErrors({})
      
      const formData = new FormData(formRef.current)
      const validationErrors = validateForm(formData)
      
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors)
        return
      }
      
      setIsLoading(true)

    emailjs.sendForm('service_4qvm70b', 'template_6a8xxil', formRef.current, 'DtRM4AG326nzTI_g5')
    .then((response) => {
        setMensaje(t('formulario.mensajeExitoso'))
        setIsLoading(false)
        formRef.current.reset()
        console.log(response.status, response.text)
      })
      .catch((error) => {
        setMensaje(t('formulario.mensajeNoExitoso'))
        setIsLoading(false)
        console.log(error)
      })
    }
    return (
        <section id='formulario'>
          <div className='form'>
            <div className="form-header">
              <h1>{t('formulario.title')}</h1>
              <p>{t('formulario.subtitle')}</p>
            </div>
            
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="input-group">
                <input 
                  type="text" 
                  name="from_name" 
                  placeholder={t('formulario.nombrePlaceholder')}
                  aria-label={t('formulario.nombre')}
                  required 
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="input-group">
                <input 
                  type="email" 
                  name="from_email" 
                  placeholder={t('formulario.correoPlaceholder')}
                  aria-label={t('formulario.correo')}
                  required 
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="input-group">
                <textarea 
                  name="message" 
                  placeholder={t('formulario.mensajePlaceholder')}
                  aria-label={t('formulario.mensaje')}
                  required 
                  className={errors.message ? 'error' : ''}
                  rows="5"
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
              
              <button 
                type="submit" 
                disabled={isLoading}
                className={isLoading ? 'loading' : ''}
              >
                {isLoading ? t('formulario.enviando') : t('formulario.enviar')}
              </button>
            </form>
            
            {mensaje && (
              <div className={`message ${mensaje.includes('éxito') || mensaje.includes('successfully') ? 'success' : 'error'}`}>
                <p>{mensaje}</p>
              </div>
            )}
          </div>
        </section>
      )
    }    
export default Formulario
