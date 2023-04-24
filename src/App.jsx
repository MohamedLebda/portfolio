import React from 'react'
import Header from "./sections/header/Header"
import Navbar from "./sections/nav-bar/Navbar"
import About from "./sections/about/About"
import Education from "./sections/education/Education"
import Portfolio from "./sections/portfolio/Portfolio"
import Contact from "./sections/contact/Contact"
import Footer from "./sections/footer/Footer"
import Skills from './sections/skills/Skills'
import Work from './sections/work/Work'
import { ThemeProvider } from './context/themeContext'


const App = () => {
  return (
    <ThemeProvider>
    <main>
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Work />
        <Education />
        <Portfolio />
        <Contact />
        <Footer />
    </main>
    </ThemeProvider>
  )
}

export default App