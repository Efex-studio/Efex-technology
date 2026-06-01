import React from 'react'
import NavbarShell from './components/navbarShell'
import Hero from './components/hero'
import About from './components/about'
import Services from './components/services'
import Projects from './components/projects'
import Contact from './components/contact'
import CTA from './components/cta'
import Footer from './components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <NavbarShell />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <CTA />
      <Footer />
    </div>
  )
}