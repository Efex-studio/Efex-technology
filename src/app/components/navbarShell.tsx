"use client";

import React, { useState } from 'react'
import Navbar from './navbar'
import ThemeToggleBtn from './themeToggleBtn'

const NavbarShell: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)

  return (
    <>
      <Navbar theme={theme as 'light' | 'dark'} setTheme={setTheme} />
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
      </div>
    </>
  )
}

export default NavbarShell
