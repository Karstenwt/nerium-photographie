import Link from 'next/link'
import Image from 'next/image'
import Lightbox from '@/components/Lightbox'
import MagneticWord from '@/components/MagneticWord'

export const metadata = {
  title: 'Sophie & Antonin — Reportage de mariage',
  description: 'Reportage de mariage de Sophie & Antonin dans les Deux-Sèvres. Un mariage intime et lumineux, capté avec discrétion et douceur par Nerium Photographie.',
  alternates: { canonical: 'https://www.nerium-photographie.com/portfolio/mariage/sophie-et-antonin' },
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
        <Image
          src="/assets/images/portfolio/sophie-et-antonin/mariée.avif"
          alt="Sophie & Antonin — Reportage de mariage"
          width={1920} height={1080}
          priority
          quality={85}
          sizes="100vw"
        />
      </div>

      {/* INTRO */}
      <div className="gallery-intro">
        <Link href="/portfolio" className="gallery-back">← Portfolio</Link>
        <p className="gallery-overline">Reportage de mariage</p>
        <h1 className="gallery-title">Sophie & Antonin</h1>
        <p className="gallery-text">
          Un <MagneticWord>mariage</MagneticWord> intime et lumineux, dans les Deux-Sèvres.
          Des <MagneticWord>instants</MagneticWord> vrais, captés avec discrétion et douceur.
        </p>
      </div>

      {/* GALERIE */}
      <div className="gallery-content">
        <Lightbox images={images} />
      </div>
    </>
  )
}
