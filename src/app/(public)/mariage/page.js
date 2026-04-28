import Link from 'next/link'
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
          <p className="hero-overline">Photographe de mariage &middot; Deux-Sevres (79)</p>
          <h1 className="hero-signature">Reportage de mariage</h1>
          <p className="hero-text">
            Une approche <MagneticWord>naturelle</MagneticWord> et <MagneticWord>humaine</MagneticWord><br />
            pour raconter votre journee avec sincerite.
          </p>
        </div>
      </header>

      {/* INTRO */}
      <section className="editorial-dark">
        <Reveal className="editorial-block">
          <p className="editorial-text">
            Choisir son photographe de <MagneticWord>mariage</MagneticWord> n&apos;est jamais simple.
            Les styles sont nombreux, les approches differentes, et il est parfois
            difficile de savoir si une personne correspond reellement a ce que vous recherchez.
          </p>
        </Reveal>

        <Reveal className="editorial-block">
          <p className="editorial-text">
            Pour photographier un evenement aussi important que votre <MagneticWord>mariage</MagneticWord>,
            la confiance est essentielle. Mon role est de vous accompagner avec
            discretion, bienveillance et professionnalisme, afin que vous puissiez
            profiter pleinement de votre journee.
          </p>
        </Reveal>
      </section>

      {/* IMAGE EDITORIALE */}
      <section className="editorial-dark">
        <Reveal className="editorial-block media">
          <img
            src="/assets/images/editorial/editorial-2-1200.avif"
            srcSet="
              /assets/images/editorial/editorial-2-600.avif 600w,
              /assets/images/editorial/editorial-2-1200.avif 1200w
            "
            sizes="(max-width: 768px) 100vw, 1200px"
            alt="Photographie de mariage naturelle et lumineuse"
            loading="lazy"
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
            le deroulement de votre journee.
          </p>
        </Reveal>

        <Reveal className="editorial-block">
          <p className="editorial-text">
            Les photos posees sont limitees au strict necessaire
            (photos de couple et photos de groupe, si vous le souhaitez).
            Le reste du temps, je privilegie l&apos;<MagneticWord>authenticite</MagneticWord>, les <MagneticWord>emotions</MagneticWord>,
            et les liens entre les personnes qui comptent pour vous.
          </p>
        </Reveal>
      </section>

      {/* VALEURS */}
      <Reveal>
        <section className="section">
          <div className="cards">
            <div className="card">
              <h3><MagneticWord>Naturel</MagneticWord> &amp; spontane</h3>
              <p className="muted">
                Un reportage <MagneticWord>discret</MagneticWord> pour capter les <MagneticWord>emotions</MagneticWord> reelles,
                sans perturber votre journee.
              </p>
            </div>
            <div className="card">
              <h3>Lumineux &amp; <MagneticWord>intemporel</MagneticWord></h3>
              <p className="muted">
                Une esthetique claire et elegante,
                pensee pour traverser le temps sans se demoder.
              </p>
            </div>
            <div className="card">
              <h3><MagneticWord>Humain</MagneticWord> &amp; engage</h3>
              <p className="muted">
                Une relation basee sur l&apos;ecoute, l&apos;empathie
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
            Ils peuvent etre adaptes selon vos besoins et le deroulement de votre journee.
          </p>
        </Reveal>
      </section>

      {/* FORFAITS */}
      <Reveal>
        <section className="section">
          <div className="cards pricing">
            <div className="card">
              <h3>Ceremonies</h3>
              <p className="muted">Mairie &middot; Ceremonie &middot; Seance couple &middot; Cocktail</p>
              <p className="price">1090&euro;</p>
            </div>
            <div className="card">
              <h3>Preparatifs</h3>
              <p className="muted">Preparatifs &middot; Mairie &middot; Ceremonie &middot; Seance couple &middot; Cocktail</p>
              <p className="price">1290&euro;</p>
            </div>
            <div className="card featured">
              <p className="badge">Le plus choisi</p>
              <h3>Jusqu&apos;a la premiere danse</h3>
              <p className="muted">Ceremonies &middot; Seance couple &middot; Cocktail &middot; Reception</p>
              <p className="price">1490&euro;</p>
            </div>
            <div className="card">
              <h3>Reportage complet</h3>
              <p className="muted">Preparatifs &middot; Ceremonies &middot; Seance couple &middot; Cocktail &middot; Reception</p>
              <p className="price">1790&euro;</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* A PROPOS */}
      <section className="editorial-dark about">
        <Reveal className="editorial-block center">
          <h2 className="editorial-title">Derriere l&apos;objectif</h2>
        </Reveal>
        <Reveal className="editorial-block">
          <p className="editorial-text">
            Je m&apos;appelle <strong>Karsten</strong>, photographe de <MagneticWord>mariage</MagneticWord> base dans les{' '}
            <strong>Deux-Sevres (79)</strong>.
            Mon approche est <MagneticWord>discrete</MagneticWord>, sensible et profondement <MagneticWord>humaine</MagneticWord>.
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
            Parlons de votre journee, de votre lieu et de ce qui compte vraiment pour vous.
          </p>
          <Link href="/contact" className="cta-btn">Me contacter &rarr;</Link>
        </section>
      </Reveal>
    </>
  )
}
