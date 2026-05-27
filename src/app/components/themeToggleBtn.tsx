'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import assets from '../../assets/assets'

interface ThemeToggleBtnProps {
  theme: 'light' | 'dark' | null
  setTheme: (theme: 'light' | 'dark') => void
}

const ThemeToggleBtn: React.FC<ThemeToggleBtnProps> = ({ theme, setTheme }) => {

  // Detect system preference on first load
  useEffect(() => {
    if (theme == null) {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDarkMode ? 'dark' : 'light')
    }
  }, [theme, setTheme])

  // Apply theme to <html> and persist to localStorage
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (theme) {
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="p-1.5 border rounded-full border-gray-500 dark:border-gray-500"
    >
      <Image
        src={theme === 'dark' ? assets.sun_icon : assets.moon_icon}
        width={24}
        height={24}
        alt=""
      />
    </button>
  )
}

export default ThemeToggleBtn