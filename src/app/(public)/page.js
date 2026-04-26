import Link from 'next/link'
import Reveal from '@/components/Reveal'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <header className="hero hero-photo">
        <div className="hero-media">
          <img
            src="/assets/images/hero/hero-1280-.avif"
            srcSet="/assets/images/hero/hero-768.avif 768w, /assets/images/hero/hero-1280-.avif 1280w, /assets/images/hero/hero-1920.avif 1920w"
            sizes="100vw"
            alt="Photographe de mariage — images naturelles et intemporelles"
            width="1920"
            height="1080"
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="hero-overline">
            Photographe de mariage · Deux-Sèvres (79) · France & International
          </p>

          <h1 className="hero-signature">
            Naturelles &<br />
            intemporelles
          </h1>

          <p className="hero-text subtle">
            Des images qui célèbrent le naturel,<br />
            l&apos;émotion et l&apos;authenticité.
          </p>

          <div className="home-actions">
            <Link href="/portfolio" className="btn btn-hero">
              Découvrir le portfolio
            </Link>
          </div>
        </div>
      </header>

      {/* SECTION ÉDITORIALE */}
      <section className="section editorial">
        <Reveal className="editorial-block">
          <p className="editorial-text">
            Je suis <strong>Karsten</strong>, photographe de mariage basé dans les{' '}
            <strong>Deux-Sèvres (79)</strong>, près de <strong>Niort</strong>.
            J&apos;accompagne des couples qui souhaitent un reportage naturel,
            lumineux et sincère.
          </p>
        </Reveal>

        <Reveal className="editorial-block media">
          <img
            src="/assets/images/editorial/editorial-1-1200.avif"
            srcSet="/assets/images/editorial/editorial-1-600.avif 600w, /assets/images/editorial/editorial-1-1200.avif 1200w"
            sizes="(max-width: 768px) 100vw, 1200px"
            alt="Photographie de mariage naturelle"
            width="1200"
            height="800"
            loading="lazy"
          />
        </Reveal>

        <Reveal className="editorial-block center">
          <h2 className="editorial-title">
            Une photographie discrète et humaine
          </h2>
        </Reveal>

        <Reveal className="editorial-block">
          <p className="editorial-text">
            Je travaille dans une logique de reportage, en captant les instants
            tels qu&apos;ils se vivent : regards, émotions, détails et moments partagés,
            sans poses forcées.
          </p>
        </Reveal>

        <Reveal className="editorial-block media">
          <img
            src="/assets/images/editorial/editorial-2-1200.avif"
            srcSet="/assets/images/editorial/editorial-2-600.avif 600w, /assets/images/editorial/editorial-2-1200.avif 1200w"
            sizes="(max-width: 768px) 100vw, 1200px"
            alt="Détails de mariage"
            width="1200"
            height="800"
            loading="lazy"
          />
        </Reveal>

        <Reveal className="editorial-block center">
          <h2 className="editorial-title">Des souvenirs avant tout</h2>
        </Reveal>

        <Reveal className="editorial-block">
          <p className="editorial-text">
            Un mariage est souvent l&apos;un des rares moments où toutes les personnes
            qui comptent pour vous sont réunies. Mon rôle est de vous restituer
            ces souvenirs avec sincérité et douceur.
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <Reveal>
        <section className="section center">
          <h2 className="title">Vous imaginez votre reportage&nbsp;?</h2>
          <Link href="/contact" className="hero-link">
            Me contacter →
          </Link>
        </section>
      </Reveal>
    </>
  )
}
