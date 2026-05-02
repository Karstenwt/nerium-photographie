import Link from 'next/link'
import Image from 'next/image'
import Lightbox from '@/components/Lightbox'
import MagneticWord from '@/components/MagneticWord'

export const metadata = {
  title: 'Portrait Couple — Nerium Photographie',
  description: 'Séance photo de couple. Des moments complices et naturels captés par Nerium Photographie.',
  alternates: { canonical: 'https://www.nerium-photographie.com/portfolio/couple/portrait-couple' },
}

const images = Array.from({ length: 13 }, (_, i) =>
  `/assets/images/portfolio/portrait-couple/portrait-couple-${String(i + 1).padStart(2, '0')}.avif`
)

export default function PortraitCouple() {
  return (
    <>
      <div className="gallery-hero">
        <Image
          src="/assets/images/portfolio/portrait-couple/portrait-couple-01.avif"
          alt="Portrait Couple — Nerium Photographie"
          width={1920} height={1080}
          priority
          quality={85}
          sizes="100vw"
        />
      </div>

      <div className="gallery-intro">
        <Link href="/portfolio" className="gallery-back">← Portfolio</Link>
        <p className="gallery-overline">Séance couple</p>
        <h1 className="gallery-title">Portrait Couple</h1>
        <p className="gallery-text">
          Des moments <MagneticWord>complices</MagneticWord> et naturels, captés avec douceur.
        </p>
      </div>

      <div className="gallery-content">
        <Lightbox images={images} />
      </div>
    </>
  )
}
