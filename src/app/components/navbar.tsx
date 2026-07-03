'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import assets from '../../assets/assets'

interface NavbarProps {
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
}

const navLinks: { label: string; href: string }[] = [
  { label: 'Home',      href: '/'          },
  { label: 'About',     href: '/about'      },
  { label: 'Services',  href: '/services'   },
  { label: 'Projects',  href: '/projects'   },
  { label: 'Portfolio', href: '/portfolio'  },
  { label: 'Contact',   href: '/contact'    },
]

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
  const [scrolled, setScrolled]       = useState<boolean>(false)
  const pathname = usePathname()

  const closeSidebar = () => setSidebarOpen(false)

  // Add shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [sidebarOpen])

  return (
    <>
      <header
        className={`
          flex justify-between items-center
          px-4 sm:px-12 lg:px-24 xl:px-40 py-4
          sticky top-0 z-20
          backdrop-blur-xl font-medium
          bg-white/70 dark:bg-gray-900/80
          transition-all duration-300
          ${scrolled ? 'shadow-md shadow-black/5 dark:shadow-black/30' : ''}
        `}
      >
        {/* Logo */}
        <Link href="/" aria-label="Home">
          <Image
            src={theme === 'dark' ? assets.logo_dark : assets.logo}
            width={180}
            height={48}
            className="w-36 sm:w-44 mr-10"
            alt="logo"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-gray-800 dark:text-white">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`
                relative hover:text-orange-400 transition-colors duration-200
                after:absolute after:-bottom-1 after:left-0
                after:h-[2px] after:bg-blue-500 after:rounded-full
                after:transition-all after:duration-300
                ${pathname === href
                  ? 'text-primary after:w-full'
                  : 'after:w-0 hover:after:w-full'}
              `}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
            className="cursor-pointer"
          >
            <Image
              src={theme === 'dark' ? assets.sun_icon : assets.moon_icon}
              width={20}
              height={20}
              className="w-5"
              alt={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            />
          </button>


          {/* Hamburger (mobile) */}
          <button
            aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setSidebarOpen(prev => !prev)}
            className="w-8 md:hidden"
          >
            <Image
              src={
                sidebarOpen
                  ? (theme === 'dark' ? assets.close_icon : assets.close_icon_light)
                  : (theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon)
              }
              width={20}
              height={20}
              alt=""
            />
          </button>

          {/* CTA (desktop) */}
          <Link
            href="/contact"
            className="text-sm hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-300 text-white px-6 py-2 rounded-full hover:scale-105 transition-all duration-200"
          >
            Connect
            <Image src={assets.arrow_icon} width={12} height={12} alt="" />
          </Link>

        </div>
      </header>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile sidebar drawer */}
      <aside
        className={`
          fixed top-0 right-0 h-full w-64 z-30 md:hidden
          bg-white dark:bg-gray-900
          shadow-2xl
          flex flex-col pt-24 px-8 gap-6
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        aria-label="Mobile navigation"
      >
        <button
          aria-label="Close menu"
          onClick={closeSidebar}
          className="absolute top-4 right-4 w-8"
        >
          <Image
            src={theme === 'dark' ? assets.close_icon : assets.close_icon_light}
            width={20}
            height={20}
            alt="Close menu"
          />
        </button>
        {navLinks.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            onClick={closeSidebar}
            className={`
              text-lg font-medium transition-colors duration-200
              ${pathname === href
                ? 'text-primary'
                : 'text-gray-800 dark:text-white hover:text-primary'}
            `}
          >
            {label}
          </Link>
        ))}

        <Link
          href="/contact"
          onClick={closeSidebar}
          className="mt-4 flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-200 text-sm font-medium"
        >
          Connect
          <Image src={assets.arrow_icon} width={12} height={12} alt="" />
        </Link>
      </aside>
    </>
  )
}

export default Navbar