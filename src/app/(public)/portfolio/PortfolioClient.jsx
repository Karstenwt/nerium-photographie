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
      img: '/assets/images/portfolio/sophie-et-antonin/sophie-et-antonin-01.avif',
      title: 'Sophie & Antonin',
      label: 'Reportage de mariage',
    },
    {
      href: '/portfolio/mariage/blandine-et-yann',
      img: '/assets/images/portfolio/blandine-et-yann/blandine-et-yann-01.avif',
      title: 'Blandine & Yann',
      label: 'Reportage de mariage',
    },
    {
      href: '/portfolio/mariage/celine-et-paul',
      img: '/assets/images/portfolio/celine-et-paul/celine-et-paul-01.avif',
      title: 'Céline & Paul',
      label: 'Reportage de mariage',
    },
    {
      href: '/portfolio/mariage/emilie-et-moussa',
      img: '/assets/images/portfolio/emilie-et-moussa/emilie-et-moussa-01.avif',
      title: 'Emilie & Moussa',
      label: 'Reportage de mariage',
    },
    {
      href: '/portfolio/mariage/louise-et-nicolas',
      img: '/assets/images/portfolio/louise-et-nicolas/louise-et-nicolas-01.avif',
      title: 'Louise & Nicolas',
      label: 'Reportage de mariage',
    },
    {
      href: '/portfolio/mariage/marie-et-marc',
      img: '/assets/images/portfolio/marie-et-marc/marie-et-marc-01.avif',
      title: 'Marie & Marc',
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
