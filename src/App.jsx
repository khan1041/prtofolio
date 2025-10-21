import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './page/Navbar'
import Hero from './page/Hero'
import Project from './page/Project'
import Contact from './page/Contact'
import Footer from './page/Footer'
import BackendProject from './page/BackendProject'
import Skill from './page/Skill'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Project/>
    <BackendProject/>
    <Skill/>
    <Contact/>
    <Footer/>
    </>)
}

export default App
