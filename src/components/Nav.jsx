'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Accueil',    href: '/',          img: '/assets/images/hero/hero-768.avif'       },
  { label: 'Portfolio',  href: '/portfolio',  img: '/assets/images/portfolio/sophie-et-antonin/mariée.avif' },
  { label: 'Mariages',   href: '/mariage',    img: '/assets/images/hero/hero-1280-.avif'     },
  { label: 'À propos',   href: '/a-propos',   img: '/assets/images/editorial/editorial-1-600.avif' },
  { label: 'Contact',    href: '/contact',    img: '/assets/images/editorial/editorial-2-600.avif' },
];

export default function Nav() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [hoveredLink,  setHoveredLink]  = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`nr-nav ${scrolled ? 'nr-nav--scrolled' : ''}`}>
        <Link href="/" className="nr-nav__logo">Nerium</Link>

        <ul className="nr-nav__links">
          {NAV_LINKS.map(link => (
            <li key={link.href} className="nr-nav__item"
              onMouseEnter={() => setHoveredLink(link.href)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <Link href={link.href} className="nr-nav__link">{link.label}</Link>

              <div className={`nr-nav__img-reveal ${hoveredLink === link.href ? 'nr-nav__img-reveal--show' : ''}`}>
                <Image src={link.img} alt={link.label} width={160} height={100} quality={70} />
              </div>
            </li>
          ))}
        </ul>

        <button
          className={`nr-nav__burger ${menuOpen ? 'nr-nav__burger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`nr-menu ${menuOpen ? 'nr-menu--open' : ''}`}>
        <button className="nr-menu__close" onClick={() => setMenuOpen(false)}>✕ Fermer</button>

        <nav className="nr-menu__links">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="nr-menu__link"
              style={{ transitionDelay: menuOpen ? `${0.08 + i * 0.08}s` : '0s' }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="nr-menu__sub">Nerium Photographie · Deux-Sèvres · France &amp; International</p>
      </div>
    </>
  );
}
