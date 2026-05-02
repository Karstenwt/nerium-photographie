import Link from 'next/link'
import Image from 'next/image'
import Lightbox from '@/components/Lightbox'
import MagneticWord from '@/components/MagneticWord'

export const metadata = {
  title: 'Louise & Nicolas — Reportage de mariage',
  description: 'Reportage de mariage de Louise & Nicolas. Un mariage élégant et touchant, capté par Nerium Photographie.',
  alternates: { canonical: 'https://www.nerium-photographie.com/portfolio/mariage/louise-et-nicolas' },
}

const images = Array.from({ length: 174 }, (_, i) =>
  `/assets/images/portfolio/louise-et-nicolas/louise-et-nicolas-${String(i + 1).padStart(2, '0')}.avif`
)

export default function LouiseEtNicolas() {
  return (
    <>
      <div className="gallery-hero">
        <Image
          src="/assets/images/portfolio/louise-et-nicolas/louise-et-nicolas-01.avif"
          alt="Louise & Nicolas — Reportage de mariage"
          width={1920} height={1080}
          priority
          quality={85}
          sizes="100vw"
        />
      </div>

      <div className="gallery-intro">
        <Link href="/portfolio" className="gallery-back">← Portfolio</Link>
        <p className="gallery-overline">Reportage de mariage</p>
        <h1 className="gallery-title">Louise & Nicolas</h1>
        <p className="gallery-text">
          Un <MagneticWord>mariage</MagneticWord> élégant et touchant, capté avec discrétion et lumière naturelle.
        </p>
      </div>

      <div className="gallery-content">
        <Lightbox images={images} />
      </div>
    </>
  )
}
