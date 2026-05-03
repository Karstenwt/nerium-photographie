import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import MagneticWord from '@/components/MagneticWord'
import PortfolioFilter from './PortfolioFilter'

export const metadata = {
  title: 'Portfolio — Reportages de mariage',
  description: 'Découvrez mes reportages de mariage : des instants vrais, captés avec discrétion et lumière naturelle. Photographe de mariage dans les Deux-Sèvres (79), disponible partout en France.',
  alternates: { canonical: 'https://www.nerium-photographie.com/portfolio' },
}

const galleries = {
  mariage: [
    { href: '/portfolio/mariage/sophie-et-antonin',  img: '/assets/images/portfolio/sophie-et-antonin/sophie-et-antonin-01.avif',   title: 'Sophie & Antonin',   label: 'Reportage de mariage' },
    { href: '/portfolio/mariage/blandine-et-yann',   img: '/assets/images/portfolio/blandine-et-yann/blandine-et-yann-01.avif',     title: 'Blandine & Yann',    label: 'Reportage de mariage' },
    { href: '/portfolio/mariage/celine-et-paul',     img: '/assets/images/portfolio/celine-et-paul/celine-et-paul-01.avif',         title: 'Céline & Paul',      label: 'Reportage de mariage' },
    { href: '/portfolio/mariage/emilie-et-moussa',   img: '/assets/images/portfolio/emilie-et-moussa/emilie-et-moussa-01.avif',     title: 'Emilie & Moussa',    label: 'Reportage de mariage' },
    { href: '/portfolio/mariage/louise-et-nicolas',  img: '/assets/images/portfolio/louise-et-nicolas/louise-et-nicolas-01.avif',   title: 'Louise & Nicolas',   label: 'Reportage de mariage' },
    { href: '/portfolio/mariage/marie-et-marc',      img: '/assets/images/portfolio/marie-et-marc/marie-et-marc-01.avif',           title: 'Marie & Marc',       label: 'Reportage de mariage' },
  ],
  portrait: [
    { href: '/portfolio/portrait/portrait-couple',   img: '/assets/images/portfolio/portrait-couple/portrait-couple-01.avif',       title: 'Portrait Couple',    label: 'Séance couple' },
  ],
  famille: [
    { href: '/portfolio/famille/grossesse-famille',  img: '/assets/images/portfolio/grossesse-famille/grossesse-famille-01.avif',   title: 'Grossesse & Famille', label: 'Grossesse & Famille' },
  ],
}

export default function Portfolio() {
  return (
    <>
      {/* HERO — server-rendered pour SEO */}
      <header className="hero hero-simple">
        <div className="hero-content center">
          <p className="hero-overline">Portfolio</p>
          <h1 className="hero-signature">Reportages &amp; galeries</h1>
          <p className="hero-text subtle">
            Une sélection de <MagneticWord>mariages</MagneticWord> et projets photographiques.
          </p>
        </div>
      </header>

      {/* Filtre catégories — client uniquement */}
      <PortfolioFilter />

      {/* Galeries — server-rendered, toutes dans le HTML pour Google */}
      <div className="portfolio-galleries">
        {Object.entries(galleries).map(([key, items]) => (
          <div
            key={key}
            className={`gallery-group${key === 'mariage' ? ' active' : ''}`}
            data-category={key}
          >
            {items.map((g, i) => (
              <Reveal key={i}>
                <Link href={g.href} className="gallery-card">
                  <Image
                    src={g.img}
                    alt={g.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    quality={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  />
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
