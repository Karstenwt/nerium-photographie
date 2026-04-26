import Link from 'next/link'
import Reveal from '@/components/Reveal'

export const metadata = {
  title: 'À propos — Nerium Photographie',
  description: 'Photographe de mariage au style lumineux et éditorial. Découvrez mon approche, mon parcours et ma vision de la photographie.',
}

export default function APropos() {
  return (
    <>
      {/* HERO */}
      <header className="hero hero-simple">
        <div className="hero-content center">
          <p className="hero-overline">Photographe de mariage · Approche éditoriale & humaine</p>
          <h1 className="hero-signature">À propos</h1>
        </div>
      </header>

      {/* INTRO */}
      <Reveal>
        <section className="section">
          <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '19px', lineHeight: '1.9' }}>
            Je m&apos;appelle <strong>Karsten</strong>, photographe de mariage.
            Mon travail s&apos;articule autour de la lumière naturelle,
            des émotions sincères et d&apos;une approche douce, inspirée de l&apos;éditorial.
          </p>
          <p className="muted" style={{ maxWidth: '720px', margin: '30px auto 0', lineHeight: '1.8' }}>
            J&apos;aime raconter les histoires telles qu&apos;elles se vivent,
            sans intervenir, sans forcer.
            Mon rôle est d&apos;observer, d&apos;anticiper et de capturer
            les instants vrais qui composent votre journée.
          </p>
        </section>
      </Reveal>

      {/* PHILOSOPHIE */}
      <Reveal>
        <section className="section">
          <div className="cards">
            <div className="card">
              <h3>Discrétion</h3>
              <p className="muted">
                Être présent sans s&apos;imposer,
                pour laisser les moments se dérouler naturellement.
              </p>
            </div>
            <div className="card">
              <h3>Lumière</h3>
              <p className="muted">
                Travailler avec la lumière disponible,
                rechercher la douceur et l&apos;équilibre dans chaque image.
              </p>
            </div>
            <div className="card">
              <h3>Intemporalité</h3>
              <p className="muted">
                Créer des images élégantes,
                qui traversent le temps sans se démoder.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* PARCOURS */}
      <Reveal>
        <section className="section center">
          <h2 className="title">Mon parcours</h2>
          <p className="muted" style={{ maxWidth: '760px', margin: '0 auto', lineHeight: '1.8' }}>
            La photographie s&apos;est imposée naturellement,
            à la croisée de mon intérêt pour l&apos;esthétique,
            le récit et les relations humaines.
            Chaque mariage est pour moi une rencontre,
            un moment de confiance et de partage.
          </p>
        </section>
      </Reveal>

      {/* CTA */}
      <Reveal>
        <section className="section center">
          <h2 className="title">Vous souhaitez me parler de votre projet&nbsp;?</h2>
          <Link href="/contact" className="hero-link">
            Me contacter →
          </Link>
        </section>
      </Reveal>
    </>
  )
}
