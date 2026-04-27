'use client'

import { useEffect, useRef } from 'react'

export default function Reveal({ children, className = '', delay = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const delayClass = delay ? ` delay-${delay}` : ''

  return (
    <div ref={ref} className={`reveal${delayClass}${className ? ' ' + className : ''}`}>
      {children}
    </div>
  )
}
