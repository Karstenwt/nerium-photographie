import Link from 'next/link'
import Lightbox from '@/components/Lightbox'

export const metadata = {
  title: 'Sophie & Antonin — Nerium Photographie',
  description: 'Reportage de mariage — Sophie & Antonin',
}

const images = [
  '/assets/images/portfolio/sophie-et-antonin/mariée.avif',
  '/assets/images/portfolio/sophie-et-antonin/preparatif.avif',
  '/assets/images/portfolio/sophie-et-antonin/robe.avif',
  '/assets/images/portfolio/sophie-et-antonin/eglise.avif',
  '/assets/images/portfolio/sophie-et-antonin/entree-eglise.avif',
  "/assets/images/portfolio/sophie-et-antonin/demoiselle-d'honneurs.avif",
  '/assets/images/portfolio/sophie-et-antonin/escalier-mariée.avif',
]

export default function SophieEtAntonin() {
  return (
    <>
      {/* HERO IMAGE */}
      <div className="gallery-hero">
        <img
          src="/assets/images/portfolio/sophie-et-antonin/mariée.avif"
          alt="Sophie & Antonin — Reportage de mariage"
          loading="eager"
        />
      </div>

      {/* INTRO */}
      <div className="gallery-intro">
        <Link href="/portfolio" className="gallery-back">← Portfolio</Link>
        <p className="gallery-overline">Reportage de mariage</p>
        <h1 className="gallery-title">Sophie & Antonin</h1>
        <p className="gallery-text">
          Un mariage intime et lumineux, dans les Deux-Sèvres.
          Des instants vrais, captés avec discrétion et douceur.
        </p>
      </div>

      {/* GALERIE */}
      <div className="gallery-content">
        <Lightbox images={images} />
      </div>
    </>
  )
}
