"use client"

import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import ThemeToggleBtn from './themeToggleBtn'

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
      if (stored) setTheme(stored)
    } catch (e) {
      // ignore (SSR)
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('theme', theme)
      if (theme === 'dark') document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')
    } catch (e) {
      // ignore
    }
  }, [theme])

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
