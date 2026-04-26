'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/mariage', label: 'Mariage' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav>
      <div className="nav-inner">
        <div className="logo-wrapper">
          <Link href="/" aria-label="Accueil">
            <svg className="logo-svg" viewBox="0 0 320 80" role="img">
              <text x="0" y="38" className="logo-main">Nerium</text>
              <text x="2" y="68" className="logo-sub">Photographie</text>
            </svg>
          </Link>
        </div>

        <button
          className="nav-toggle"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links${open ? ' open' : ''}`}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                href === '/'
                  ? pathname === '/' ? 'active' : ''
                  : pathname.startsWith(href) ? 'active' : ''
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
