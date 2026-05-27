'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import assets from '@/assets/assets'

/* ------------------------------------------------------------------ */
/*  Animated cycling words                                              */
/* ------------------------------------------------------------------ */
const CYCLING_WORDS = ['Results.', 'Sales.', 'Growth.', 'Excellence.']

const AnimatedWord: React.FC = () => {
  const [index, setIndex]     = useState<number>(0)
  const [visible, setVisible] = useState<boolean>(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex(prev => (prev + 1) % CYCLING_WORDS.length)
        setVisible(true)
      }, 400)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className="block text-blue-600 dark:text-blue-400 transition-all duration-400"
      style={{
        opacity:   visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}
    >
      {CYCLING_WORDS[index]}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  Stat counter                                                        */
/* ------------------------------------------------------------------ */
interface StatProps {
  value: number
  suffix: string
  label: string
  delay: number
}

const Stat: React.FC<StatProps> = ({ value, suffix, label, delay }) => {
  const [count, setCount] = useState<number>(0)
  const ref               = useRef<HTMLDivElement>(null)
  const started           = useRef<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          setTimeout(() => {
            let start = 0
            const step = Math.ceil(value / 40)
            const timer = setInterval(() => {
              start += step
              if (start >= value) { setCount(value); clearInterval(timer) }
              else setCount(start)
            }, 30)
          }, delay)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, delay])

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <span className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
        {count}{suffix}
      </span>
      <span className="text-sm text-blue-600 dark:text-blue-400 capitalize tracking-widest">
        {label}
      </span>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Hero                                                                */
/* ------------------------------------------------------------------ */
const Hero: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    // Small delay so entrance animations feel intentional
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity:   mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  })

  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-gray-900 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 pb-24">

      {/* Background grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Accent circle blur */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-primary/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 -left-24 w-[320px] h-[320px] rounded-full bg-primary/5 blur-[80px]" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Left column ── */}
        <div className="flex flex-col gap-8">

          {/* Headline */}
          <div style={fadeUp(120)}>
            <h1 className="text-6xl sm:text-5xl text-3xl font-bold leading-[1.07] tracking-tight text-gray-700 dark:text-white">
              We Build Websites<br />
              That Delivers<br />
              <AnimatedWord />
            </h1>
          </div>

          {/* Subtext */}
          <p
            style={fadeUp(240)}
            className="max-w-md text-md leading-relaxed text-gray-500 dark:text-gray-400"
          >
            We help companies and businesses, to build and maintain a goal oriented online presence.
          </p>

          {/* CTA buttons */}
         <div style={fadeUp(360)} className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold 
            px-8 py-3.5 rounded-full hover:bg-blue-700 hover:scale-105
            transition-all duration-200 shadow-lg shadow-blue-600/20"
          >
            Start a Project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 7h12M8 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-white text-blue-600 text-sm font-semibold
            border border-blue-600 px-8 py-3.5 rounded-full
            hover:bg-blue-600 hover:text-white transition-all duration-200"
          >
            View Our Work
          </Link>
        </div>

          {/* Stats row */}
          <div style={fadeUp(480)} className="flex flex-wrap gap-8 pt-1 border-t border-gray-100 dark:border-gray-800">
            <Stat value={5}  suffix="+"  label="Years Experience"     delay={600} />
            <Stat value={200} suffix="+"  label="Projects Completed" delay={700} />
            <Stat value={98}  suffix="%"  label="Client Retention" delay={800} />
          </div>
        </div>

        {/* ── Right column — hero image ── */}
        <div style={fadeUp(200)} className="relative w-full">

          {/* Main image frame */}
            <div className="relative w-full h-full min-h-[200px] lg:min-h-[300px] mx-auto lg:mx-0 lg:ml-auto rounded-2xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/40">            <Image
              src={assets.hero_img}
              alt="Agency hero"
              fill
              className="object-cover"
              priority
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Floating badge — bottom right */}
          <div className="absolute -right-4 bottom-12 hidden lg:flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl px-4 py-3 shadow-xl shadow-black/8 border border-gray-100 dark:border-gray-700">
            <div className="flex -space-x-2">
              {[1].map(i => (
                <Image
                  key={i}
                  src={assets.group_profile}
                  alt={`profile ${i}`}
                  width={100}
                  height={100} 
                />
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-900 dark:text-white leading-tight">50+ Happy Clients</span>
              <span className="text-[11px] text-gray-400">★★★★★ rated</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero