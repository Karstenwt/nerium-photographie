import Link from 'next/link'
import Image from 'next/image'
import Lightbox from '@/components/Lightbox'
import MagneticWord from '@/components/MagneticWord'

export const metadata = {
  title: 'Grossesse & Famille — Nerium Photographie',
  description: 'Séance photo grossesse et famille. Des instants précieux immortalisés par Nerium Photographie.',
  alternates: { canonical: 'https://www.nerium-photographie.com/portfolio/famille/grossesse-famille' },
}

const images = Array.from({ length: 19 }, (_, i) =>
  `/assets/images/portfolio/grossesse-famille/grossesse-famille-${String(i + 1).padStart(2, '0')}.avif`
)

export default function GrossesseFamille() {
  return (
    <>
      <div className="gallery-hero">
        <Image
          src="/assets/images/portfolio/grossesse-famille/grossesse-famille-01.avif"
          alt="Grossesse & Famille — Nerium Photographie"
          width={1920} height={1080}
          priority
          quality={85}
          sizes="100vw"
        />
      </div>

      <div className="gallery-intro">
        <Link href="/portfolio" className="gallery-back">← Portfolio</Link>
        <p className="gallery-overline">Grossesse & Famille</p>
        <h1 className="gallery-title">Grossesse & Famille</h1>
        <p className="gallery-text">
          Des instants <MagneticWord>précieux</MagneticWord> immortalisés avec tendresse.
        </p>
      </div>

      <div className="gallery-content">
        <Lightbox images={images} />
      </div>
    </>
  )
}
