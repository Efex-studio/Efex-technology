'use client'

import React, { useState } from 'react'
import Navbar from './components/navbar'
import ThemeToggleBtn from './components/themeToggleBtn'
import Hero from './components/hero'

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar theme={theme as 'light' | 'dark'} setTheme={setTheme} />

      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
      </div>

      <Hero />
    </div>
  )
}