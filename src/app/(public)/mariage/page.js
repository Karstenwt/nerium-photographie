import Link from 'next/link'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import MagneticWord from '@/components/MagneticWord'

export const metadata = {
  title: 'Prestations & tarifs mariage — Photographe Deux-Sèvres (79)',
  description: 'Découvrez mes prestations de photographe de mariage dans les Deux-Sèvres (79), près de Niort. Reportage naturel et lumineux, du préparatif à la soirée. Forfaits de 1 090 € à 1 790 €. Disponible en Nouvelle-Aquitaine et dans toute la France.',
  alternates: { canonical: 'https://www.nerium-photographie.com/mariage' },
}

export default function Mariage() {
  return (
    <>
      {/* HERO */}
      <header className="hero hero-simple">
        <div className="hero-content center">
          <p className="hero-overline">Photographe de mariage &middot; Deux-Sèvres (79)</p>
          <h1 className="hero-signature">Reportage de mariage</h1>
          <p className="hero-text">
            Une approche <MagneticWord>naturelle</MagneticWord> et <MagneticWord>humaine</MagneticWord><br />
            pour raconter votre journée avec sincérité.
          </p>
        </div>
      </header>

      {/* INTRO */}
      <section className="editorial-dark">
        <Reveal className="editorial-block">
          <p className="editorial-text">
            Choisir son photographe de <MagneticWord>mariage</MagneticWord> n&apos;est jamais simple.
            Les styles sont nombreux, les approches différentes, et il est parfois
            difficile de savoir si une personne correspond réellement à ce que vous recherchez.
          </p>
        </Reveal>

        <Reveal className="editorial-block">
          <p className="editorial-text">
            Pour photographier un événement aussi important que votre <MagneticWord>mariage</MagneticWord>,
            la confiance est essentielle. Mon rôle est de vous accompagner avec
            discrétion, bienveillance et professionnalisme, afin que vous puissiez
            profiter pleinement de votre journée.
          </p>
        </Reveal>
      </section>

      {/* IMAGE ÉDITORIALE */}
      <section className="editorial-dark">
        <Reveal className="editorial-block media">
          <Image
            src="/assets/images/editorial/editorial-2-1200.avif"
            alt="Photographie de mariage naturelle et lumineuse"
            width={1200} height={800}
            loading="lazy"
            quality={80}
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </Reveal>
      </section>

      {/* APPROCHE */}
      <section className="editorial-dark">
        <Reveal className="editorial-block center">
          <h2 className="editorial-title">Mon approche photographique</h2>
        </Reveal>

        <Reveal className="editorial-block">
          <p className="editorial-text">
            Je travaille dans une approche de reportage. J&apos;observe, j&apos;anticipe,
            et je capture les moments tels qu&apos;ils se vivent, sans intervenir dans
            le déroulement de votre journée.
          </p>
        </Reveal>

        <Reveal className="editorial-block">
          <p className="editorial-text">
            Les photos posées sont limitées au strict nécessaire
            (photos de couple et photos de groupe, si vous le souhaitez).
            Le reste du temps, je privilégie l&apos;<MagneticWord>authenticité</MagneticWord>, les <MagneticWord>émotions</MagneticWord>,
            et les liens entre les personnes qui comptent pour vous.
          </p>
        </Reveal>
      </section>

      {/* VALEURS */}
      <Reveal>
        <section className="section">
          <div className="cards">
            <div className="card">
              <h3><MagneticWord>Naturel</MagneticWord> &amp; spontané</h3>
              <p className="muted">
                Un reportage <MagneticWord>discret</MagneticWord> pour capter les <MagneticWord>émotions</MagneticWord> réelles,
                sans perturber votre journée.
              </p>
            </div>
            <div className="card">
              <h3>Lumineux &amp; <MagneticWord>intemporel</MagneticWord></h3>
              <p className="muted">
                Une esthétique claire et élégante,
                pensée pour traverser le temps sans se démoder.
              </p>
            </div>
            <div className="card">
              <h3><MagneticWord>Humain</MagneticWord> &amp; engagé</h3>
              <p className="muted">
                Une relation basée sur l&apos;écoute, l&apos;empathie
                et la confiance.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* PRESTATIONS */}
      <section className="editorial-dark">
        <Reveal className="editorial-block center">
          <h2 className="editorial-title">Prestations mariage</h2>
        </Reveal>
        <Reveal className="editorial-block">
          <p className="editorial-text">
            Les forfaits ci-dessous correspondent aux demandes les plus courantes.
            Ils peuvent être adaptés selon vos besoins et le déroulement de votre journée.
          </p>
        </Reveal>
      </section>

      {/* FORFAITS */}
      <Reveal>
        <section className="section">
          <div className="cards pricing">
            <div className="card">
              <h3>Cérémonies</h3>
              <p className="muted">Mairie &middot; Cérémonie &middot; Séance couple &middot; Cocktail</p>
              <p className="price">1090&euro;</p>
            </div>
            <div className="card">
              <h3>Préparatifs</h3>
              <p className="muted">Préparatifs &middot; Mairie &middot; Cérémonie &middot; Séance couple &middot; Cocktail</p>
              <p className="price">1290&euro;</p>
            </div>
            <div className="card featured">
              <p className="badge">Le plus choisi</p>
              <h3>Jusqu&apos;à la première danse</h3>
              <p className="muted">Cérémonies &middot; Séance couple &middot; Cocktail &middot; Réception</p>
              <p className="price">1490&euro;</p>
            </div>
            <div className="card">
              <h3>Reportage complet</h3>
              <p className="muted">Préparatifs &middot; Cérémonies &middot; Séance couple &middot; Cocktail &middot; Réception</p>
              <p className="price">1790&euro;</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* À PROPOS */}
      <section className="editorial-dark about">
        <Reveal className="editorial-block center">
          <h2 className="editorial-title">Derrière l&apos;objectif</h2>
        </Reveal>
        <Reveal className="editorial-block">
          <p className="editorial-text">
            Je m&apos;appelle <strong>Karsten</strong>, photographe de <MagneticWord>mariage</MagneticWord> basé dans les{' '}
            <strong>Deux-Sèvres (79)</strong>.
            Mon approche est <MagneticWord>discrète</MagneticWord>, sensible et profondément <MagneticWord>humaine</MagneticWord>.
          </p>
        </Reveal>
        <Reveal className="editorial-block">
          <p className="editorial-text">
            Je crois que les plus belles images ne se provoquent pas.
            Elles naissent des regards, des gestes et des liens entre les personnes
            qui comptent vraiment pour vous.
          </p>
        </Reveal>
      </section>

      {/* CTA FINAL */}
      <Reveal>
        <section className="cta-section">
          <h2 className="cta-title">
            Vous vous reconnaissez dans cette approche&nbsp;?
          </h2>
          <p className="cta-sub">
            Parlons de votre journée, de votre lieu et de ce qui compte vraiment pour vous.
          </p>
          <Link href="/contact" className="cta-btn">Me contacter &rarr;</Link>
        </section>
      </Reveal>
    </>
  )
}
