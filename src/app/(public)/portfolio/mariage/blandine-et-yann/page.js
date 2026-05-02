import Link from 'next/link'
import Image from 'next/image'
import Lightbox from '@/components/Lightbox'
import MagneticWord from '@/components/MagneticWord'

export const metadata = {
  title: 'Blandine & Yann — Reportage de mariage',
  description: 'Reportage de mariage de Blandine & Yann. Des moments authentiques captés avec sensibilité par Nerium Photographie.',
  alternates: { canonical: 'https://www.nerium-photographie.com/portfolio/mariage/blandine-et-yann' },
}

const images = Array.from({ length: 101 }, (_, i) =>
  `/assets/images/portfolio/blandine-et-yann/blandine-et-yann-${String(i + 1).padStart(2, '0')}.avif`
)

export default function BlandineEtYann() {
  return (
    <>
      <div className="gallery-hero">
        <Image
          src="/assets/images/portfolio/blandine-et-yann/blandine-et-yann-01.avif"
          alt="Blandine & Yann — Reportage de mariage"
          width={1920} height={1080}
          priority
          quality={85}
          sizes="100vw"
        />
      </div>

      <div className="gallery-intro">
        <Link href="/portfolio" className="gallery-back">← Portfolio</Link>
        <p className="gallery-overline">Reportage de mariage</p>
        <h1 className="gallery-title">Blandine & Yann</h1>
        <p className="gallery-text">
          Des <MagneticWord>moments</MagneticWord> authentiques, captés avec sensibilité et douceur.
        </p>
      </div>

      <div className="gallery-content">
        <Lightbox images={images} />
      </div>
    </>
  )
}
