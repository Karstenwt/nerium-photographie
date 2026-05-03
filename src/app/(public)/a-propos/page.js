import Link from 'next/link'
import Reveal from '@/components/Reveal'
import MagneticWord from '@/components/MagneticWord'

export const metadata = {
  title: 'À propos de Karsten — Photographe de mariage',
  description: 'Je suis Karsten, photographe de mariage basé dans les Deux-Sèvres (79). Mon approche : lumière naturelle, émotions sincères et discrétion. Découvrez mon parcours et ma vision de la photographie de mariage.',
  alternates: { canonical: 'https://www.nerium-photographie.com/a-propos' },
}

export default function APropos() {
  return (
    <>
      {/* HERO */}
      <header className="hero hero-simple">
        <div className="hero-content center">
          <p className="hero-overline">Photographe de <MagneticWord>mariage</MagneticWord> &middot; Approche éditoriale &amp; <MagneticWord>humaine</MagneticWord></p>
          <h1 className="hero-signature">À propos</h1>
        </div>
      </header>

      {/* INTRO */}
      <section className="editorial-dark">
        <Reveal className="editorial-block">
          <p className="editorial-text">
            Je m&apos;appelle <strong>Karsten</strong>, photographe de <MagneticWord>mariage</MagneticWord>.
            Mon travail s&apos;articule autour de la <MagneticWord>lumière</MagneticWord> <MagneticWord>naturelle</MagneticWord>,
            des <MagneticWord>émotions</MagneticWord> <MagneticWord>sincères</MagneticWord> et d&apos;une approche douce, inspirée de l&apos;éditorial.
          </p>
        </Reveal>
        <Reveal className="editorial-block">
          <p className="editorial-text">
            J&apos;aime raconter les histoires telles qu&apos;elles se vivent,
            sans intervenir, sans forcer.
            Mon rôle est d&apos;observer, d&apos;anticiper et de capturer
            les <MagneticWord>instants</MagneticWord> vrais qui composent votre journée.
          </p>
        </Reveal>
      </section>

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
              <h3><MagneticWord>Lumière</MagneticWord></h3>
              <p className="muted">
                Travailler avec la <MagneticWord>lumière</MagneticWord> disponible,
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
      <section className="editorial-dark">
        <Reveal className="editorial-block center">
          <h2 className="editorial-title">Mon parcours</h2>
        </Reveal>
        <Reveal className="editorial-block">
          <p className="editorial-text" style={{ textAlign: 'center' }}>
            La photographie s&apos;est imposée naturellement,
            à la croisée de mon intérêt pour l&apos;esthétique,
            le récit et les relations <MagneticWord>humaines</MagneticWord>.
            Chaque <MagneticWord>mariage</MagneticWord> est pour moi une rencontre,
            un moment de confiance et de partage.
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <Reveal>
        <section className="cta-section">
          <h2 className="cta-title">Vous souhaitez me parler de votre projet&nbsp;?</h2>
          <p className="cta-sub">&nbsp;</p>
          <Link href="/contact" className="cta-btn">Me contacter &rarr;</Link>
        </section>
      </Reveal>
    </>
  )
}
