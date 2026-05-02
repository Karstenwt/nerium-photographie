import Link from 'next/link'
import Image from 'next/image'
import Lightbox from '@/components/Lightbox'
import MagneticWord from '@/components/MagneticWord'

export const metadata = {
  title: 'Céline & Paul — Reportage de mariage',
  description: 'Reportage de mariage de Céline & Paul. Une journée remplie d\'émotion, captée avec discrétion par Nerium Photographie.',
  alternates: { canonical: 'https://www.nerium-photographie.com/portfolio/mariage/celine-et-paul' },
}

const images = Array.from({ length: 25 }, (_, i) =>
  `/assets/images/portfolio/celine-et-paul/celine-paul-${String(i + 1).padStart(2, '0')}.avif`
)

export default function CelineEtPaul() {
  return (
    <>
      <div className="gallery-hero">
        <Image
          src="/assets/images/portfolio/celine-et-paul/celine-paul-01.avif"
          alt="Céline & Paul — Reportage de mariage"
          width={1920} height={1080}
          priority
          quality={85}
          sizes="100vw"
        />
      </div>

      <div className="gallery-intro">
        <Link href="/portfolio" className="gallery-back">← Portfolio</Link>
        <p className="gallery-overline">Reportage de mariage</p>
        <h1 className="gallery-title">Céline & Paul</h1>
        <p className="gallery-text">
          Une journée remplie d&apos;<MagneticWord>émotion</MagneticWord>, captée avec discrétion et lumière naturelle.
        </p>
      </div>

      <div className="gallery-content">
        <Lightbox images={images} />
      </div>
    </>
  )
}
