import React from 'react'
import Perfil from './components/Perfil'
import Timeline from './components/Timeline'
import Habilidades from './components/Habilidades'
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
      <Timeline />
      <Habilidades />
      <GithubRepos />
      <Formulario /> 
      <Footer />
    </div>
  )
}

export default App
