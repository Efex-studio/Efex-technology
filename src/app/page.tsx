import React from 'react'
// Navbar and footer are handled globally by AppShell
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
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <CTA />
    </div>
  )
}