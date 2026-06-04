'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import assets from '@/assets/assets'

const About: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity:   mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  })

  return (
    <section className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-900 px-4 sm:px-12 lg:px-24 xl:px-40 py-24
     rounded-t-3xl">

      {/* Accent blur */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-primary/10 blur-[100px]" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Left — Image ── */}
        <div style={fadeUp(0)} className="relative w-full">

<div className="relative w-full max-w-full mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/40">            <Image
              src={assets.about_img}
              alt="About us"
              full-width="true"
              className="object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>

        {/* ── Right — Text ── */}
        <div className="flex flex-col gap-8">

          {/* Eyebrow */}
          <div style={fadeUp(100)}>
            <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              About Us
            </span>
          </div>

          {/* Heading */}
          <div style={fadeUp(200)}>
            <h2 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white">
              A Team Built on<br />
              <span className="text-blue-500">Passion & Purpose</span>
            </h2>
          </div>

          {/* Body text */}
          <div style={fadeUp(300)} className="flex flex-col gap-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            <p>
              We are a results-driven creative and digital solutions agency dedicated to helping 
              businesses build strong brands, enhance their online presence, and achieve 
              sustainable growth. Through a strategic blend of innovative design, modern 
              technology, and data-driven marketing, we deliver solutions that create 
              measurable impact.
              <br/><br/>
              Our team of experienced designers, developers, and digital strategists is committed 
              to excellence, combining creativity with technical expertise to deliver high-quality
               results.

            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About