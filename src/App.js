import React from 'react'
import Perfil from './components/Perfil'
import Experiencia from './components/Experiencia'
import Inicio from './components/Inicio'
import Header from './components/Header'
import Footer from './components/Footer'
import GithubRepos from './components/GithubRepos'
import Formulario from './components/Formulario'


function App() {
  return (
    <div className="App">
      <Header />
      <Inicio />
      <Perfil />
      <Experiencia />
      <GithubRepos />
      <Formulario /> 
      <Footer />
    </div>
  )
}

export default App
