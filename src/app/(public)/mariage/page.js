import Link from 'next/link'
import Reveal from '@/components/Reveal'

export const metadata = {
  title: 'Photographe de mariage dans les Deux-Sèvres (79) — Prestations & Tarifs',
  description: 'Photographe de mariage dans les Deux-Sèvres (79). Reportage naturel, lumineux et sincère. Prestations mariage de 1290€ à 1990€.',
}

export default function Mariage() {
  return (
    <>
      {/* HERO */}
      <header className="hero hero-simple">
        <div className="hero-content center">
          <p className="hero-overline">Photographe de mariage · Deux-Sèvres (79)</p>
          <h1 className="hero-signature">Reportage de mariage</h1>
          <p className="hero-text subtle">
            Une approche naturelle et humaine<br />
            pour raconter votre journée avec sincérité.
          </p>
        </div>
      </header>

      {/* INTRO */}
      <section className="section editorial">
        <Reveal className="editorial-block">
          <p className="editorial-text">
            Choisir son photographe de mariage n&apos;est jamais simple.
            Les styles sont nombreux, les approches différentes, et il est parfois
            difficile de savoir si une personne correspond réellement à ce que vous recherchez.
          </p>
        </Reveal>

        <Reveal className="editorial-block">
          <p className="editorial-text">
            Pour photographier un événement aussi important que votre mariage,
            la confiance est essentielle. Mon rôle est de vous accompagner avec
            discrétion, bienveillance et professionnalisme, afin que vous puissiez
            profiter pleinement de votre journée.
          </p>
        </Reveal>
      </section>

      {/* IMAGE ÉDITORIALE */}
      <section className="section editorial">
        <Reveal className="editorial-block media">
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1600&q=80"
            alt="Photographie de mariage naturelle et lumineuse"
            loading="lazy"
          />
        </Reveal>
      </section>

      {/* APPROCHE */}
      <section className="section editorial">
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
            Le reste du temps, je privilégie l&apos;authenticité, les émotions,
            et les liens entre les personnes qui comptent pour vous.
          </p>
        </Reveal>
      </section>

      {/* VALEURS */}
      <Reveal>
        <section className="section">
          <div className="cards">
            <div className="card">
              <h3>Naturel & spontané</h3>
              <p className="muted">
                Un reportage discret pour capter les émotions réelles,
                sans perturber votre journée.
              </p>
            </div>
            <div className="card">
              <h3>Lumineux & intemporel</h3>
              <p className="muted">
                Une esthétique claire et élégante,
                pensée pour traverser le temps sans se démoder.
              </p>
            </div>
            <div className="card">
              <h3>Humain & engagé</h3>
              <p className="muted">
                Une relation basée sur l&apos;écoute, l&apos;empathie
                et la confiance.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* PRESTATIONS */}
      <section className="section editorial">
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
              <p className="muted">Mairie · Cérémonie · Séance couple · Cocktail</p>
              <p className="price">1290€</p>
            </div>
            <div className="card">
              <h3>Préparatifs</h3>
              <p className="muted">Préparatifs · Mairie · Cérémonie · Séance couple · Cocktail</p>
              <p className="price">1490€</p>
            </div>
            <div className="card featured">
              <p className="badge">Le plus choisi</p>
              <h3>Jusqu&apos;à la première danse</h3>
              <p className="muted">Cérémonies · Séance couple · Cocktail · Réception</p>
              <p className="price">1690€</p>
            </div>
            <div className="card">
              <h3>Reportage complet</h3>
              <p className="muted">Préparatifs · Cérémonies · Séance couple · Cocktail · Réception</p>
              <p className="price">1990€</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* A PROPOS */}
      <section className="section editorial about">
        <Reveal className="editorial-block center">
          <h2 className="editorial-title">Derrière l&apos;objectif</h2>
        </Reveal>
        <Reveal className="editorial-block">
          <p className="editorial-text">
            Je m&apos;appelle <strong>Karsten</strong>, photographe de mariage basé dans les{' '}
            <strong>Deux-Sèvres (79)</strong>.
            Mon approche est discrète, sensible et profondément humaine.
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
        <section className="section center cta-final">
          <h2 className="title">Vous vous reconnaissez dans cette approche&nbsp;?</h2>
          <p className="cta-text">
            Parlons de votre journée, de votre lieu et de ce qui compte vraiment pour vous.
            Je réponds personnellement à chaque demande.
          </p>
          <Link href="/contact" className="btn btn-primary">Me contacter</Link>
          <p className="cta-sub">Réponse sous 24–48h • Dates limitées</p>
        </section>
      </Reveal>
    </>
  )
}
