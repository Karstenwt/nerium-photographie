'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

export function useHeroParallax() {
  const mediaRef = useRef(null)

  useEffect(() => {
    const el = mediaRef.current
    if (!el) return

    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.35}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return mediaRef
}

export function useHeroImageLoad() {
  const imgRef = useRef(null)

  useEffect(() => {
    const img = imgRef.current
    if (!img) return

    if (img.complete) img.classList.add('loaded')
    else img.addEventListener('load', () => img.classList.add('loaded'))
  }, [])

  return imgRef
}

const WORDS = ['intemporelles', 'sincères', 'profondes', 'éternelles']
const WORD_HEIGHT = 72

export function RotatingWord() {
  const trackRef = useRef(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrent(prev => {
          const next = prev + 1

          track.style.transition = 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)'
          track.style.transform = `translateY(-${next * WORD_HEIGHT}px)`

          // Reset instantane quand on arrive a la copie du premier mot
          if (next >= WORDS.length) {
            setTimeout(() => {
              track.style.transition = 'none'
              track.style.transform = 'translateY(0)'
            }, 580)
            return 0
          }

          return next
        })
      }, 2500)

      return () => clearInterval(interval)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <span className="hero-rotating-window">
      <span className="hero-drum-track" ref={trackRef}>
        {WORDS.map((word) => (
          <span key={word} className="hero-drum-word">{word}</span>
        ))}
        {/* Copie du premier mot pour la boucle infinie */}
        <span className="hero-drum-word">{WORDS[0]}</span>
      </span>
    </span>
  )
}

export function StatCounter({ target, prefix = '', suffix = '', className = '' }) {
  const ref = useRef(null)
  const counted = useRef(false)

  const countUp = useCallback((el) => {
    const duration = 1400
    let current = 0
    const step = target / (duration / 16)
    const isLarge = target >= 1000

    const iv = setInterval(() => {
      current = Math.min(current + step, target)
      const val = Math.round(current)
      el.textContent = prefix + (isLarge ? val.toLocaleString('fr-FR') : val) + suffix
      if (current >= target) clearInterval(iv)
    }, 16)
  }, [target, prefix, suffix])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !counted.current) {
        counted.current = true
        countUp(el)
        observer.unobserve(el)
      }
    }, { threshold: 0.15 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [countUp])

  return (
    <span ref={ref} className={`stat-number ${className}`}>
      {prefix}{target >= 1000 ? target.toLocaleString('fr-FR') : target}{suffix}
    </span>
  )
}
