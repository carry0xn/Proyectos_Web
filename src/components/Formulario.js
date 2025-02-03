import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './css/Header.css'

const Formulario = () => {
    const [mensaje, setMensaje] = useState('')
    const formRef = useRef()
  
    const sendEmail = (e) => {
      e.preventDefault()

    emailjs.sendForm('service_4qvm70b', 'template_6a8xxil', formRef.current, 'DtRM4AG326nzTI_g5')
    .then((response) => {
        setMensaje('¡Mensaje enviado con éxito!')
        console.log(response.status, response.text)
      })
      .catch((error) => {
        setMensaje('Hubo un error al enviar el mensaje. Inténtalo de nuevo.')
        console.log(error)
      })
    }

    return (
      <section id='formulario'>
        <div className='form'>
          <h1>Hablemos!</h1>
          <form ref={formRef} onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder="Tu Nombre" required />
            <input type="email" name="from_email" placeholder="Tu Correo" required />
            <textarea name="message" placeholder="Tu Mensaje" required />
            <button type="submit">Enviar</button>
          </form>
    
          {mensaje && <p>{mensaje}</p>}
        </div>
        </section>
      )
    }

export default Formulario
