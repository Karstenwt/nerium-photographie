'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Reveal from '@/components/Reveal'
import MagneticWord from '@/components/MagneticWord'

const galleries = {
  mariage: [
    {
      href: '/portfolio/mariage/sophie-et-antonin',
      img: '/assets/images/portfolio/sophie-et-antonin/mariée.avif',
      title: 'Sophie & Antonin',
      label: 'Reportage de mariage',
    },
    {
      href: '#',
      img: 'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=1200&q=80',
      title: 'Mariage — Reportage 2',
      label: 'Reportage de mariage',
    },
    {
      href: '#',
      img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80',
      title: 'Mariage — Reportage 3',
      label: 'Reportage de mariage',
    },
  ],
  couple: [
    {
      href: '#',
      img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80',
      title: 'Séance couple',
      label: 'Séance photo',
    },
  ],
  portrait: [
    {
      href: '#',
      img: 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=1200&q=80',
      title: 'Portrait lifestyle',
      label: 'Portrait',
    },
  ],
}

export default function PortfolioClient() {
  const [active, setActive] = useState('mariage')
  const cats = [
    { key: 'mariage', label: 'Mariage' },
    { key: 'couple', label: 'Couple' },
    { key: 'portrait', label: 'Portrait' },
  ]

  return (
    <>
      {/* HERO */}
      <header className="hero hero-simple">
        <div className="hero-content center">
          <p className="hero-overline">Portfolio</p>
          <h1 className="hero-signature">Reportages & galeries</h1>
          <p className="hero-text subtle">
            Une sélection de <MagneticWord>mariages</MagneticWord> et projets photographiques.
          </p>
        </div>
      </header>

      {/* CATEGORIES */}
      <div className="portfolio-categories">
        {cats.map(({ key, label }) => (
          <button
            key={key}
            className={`portfolio-cat${active === key ? ' active' : ''}`}
            onClick={() => setActive(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* GALERIES */}
      <div className="portfolio-galleries">
        {cats.map(({ key }) => (
          <div key={key} className={`gallery-group${active === key ? ' active' : ''}`}>
            {galleries[key].map((g, i) => (
              <Reveal key={i}>
                <Link href={g.href} className="gallery-card">
                  <Image src={g.img} alt={g.title} width={1200} height={800} loading="lazy" quality={80} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px" />
                  <h2>{g.title}</h2>
                  <p>{g.label}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        ))}
      </div>

      {/* CTA */}
      <Reveal>
        <section className="section center">
          <h2 className="title">Découvrir l&apos;approche <MagneticWord>mariage</MagneticWord></h2>
          <Link href="/mariage" className="hero-link">
            Voir les prestations →
          </Link>
        </section>
      </Reveal>
    </>
  )
}
