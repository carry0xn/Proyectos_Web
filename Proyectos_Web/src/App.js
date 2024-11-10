import React from 'react'
import Perfil from './components/Perfil'
import Experiencia from './components/Experiencia'
import Proyectos from './components/Proyectos'
import Inicio from './components/Inicio'
import Header from './components/Header'
import Footer from './components/Footer'
import Formulario from './components/Formulario'

function App() {
  return (
    <div className="App">
      <Header />
      <Inicio />
      <Perfil />
      <Experiencia />
      <Proyectos />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
