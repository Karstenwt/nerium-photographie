import Link from 'next/link'
import Image from 'next/image'
import Lightbox from '@/components/Lightbox'
import MagneticWord from '@/components/MagneticWord'

export const metadata = {
  title: 'Emilie & Moussa — Reportage de mariage',
  description: 'Reportage de mariage d\'Emilie & Moussa. Un mariage vibrant et joyeux, immortalisé par Nerium Photographie.',
  alternates: { canonical: 'https://www.nerium-photographie.com/portfolio/mariage/emilie-et-moussa' },
}

const images = Array.from({ length: 25 }, (_, i) =>
  `/assets/images/portfolio/emilie-et-moussa/emilie-moussa-${String(i + 1).padStart(2, '0')}.avif`
)

export default function EmilieEtMoussa() {
  return (
    <>
      <div className="gallery-hero">
        <Image
          src="/assets/images/portfolio/emilie-et-moussa/emilie-moussa-01.avif"
          alt="Emilie & Moussa — Reportage de mariage"
          width={1920} height={1080}
          priority
          quality={85}
          sizes="100vw"
        />
      </div>

      <div className="gallery-intro">
        <Link href="/portfolio" className="gallery-back">← Portfolio</Link>
        <p className="gallery-overline">Reportage de mariage</p>
        <h1 className="gallery-title">Emilie & Moussa</h1>
        <p className="gallery-text">
          Un <MagneticWord>mariage</MagneticWord> vibrant et joyeux, immortalisé avec douceur.
        </p>
      </div>

      <div className="gallery-content">
        <Lightbox images={images} />
      </div>
    </>
  )
}
