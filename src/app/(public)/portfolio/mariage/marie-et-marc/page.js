import Link from 'next/link'
import Image from 'next/image'
import Lightbox from '@/components/Lightbox'
import MagneticWord from '@/components/MagneticWord'

export const metadata = {
  title: 'Marie & Marc — Reportage de mariage',
  description: 'Reportage de mariage de Marie & Marc. Une célébration pleine de tendresse, captée par Nerium Photographie.',
  alternates: { canonical: 'https://www.nerium-photographie.com/portfolio/mariage/marie-et-marc' },
}

const images = Array.from({ length: 93 }, (_, i) =>
  `/assets/images/portfolio/marie-et-marc/marie-et-marc-${String(i + 1).padStart(2, '0')}.avif`
)

export default function MarieEtMarc() {
  return (
    <>
      <div className="gallery-hero">
        <Image
          src="/assets/images/portfolio/marie-et-marc/marie-et-marc-01.avif"
          alt="Marie & Marc — Reportage de mariage"
          width={1920} height={1080}
          priority
          quality={85}
          sizes="100vw"
        />
      </div>

      <div className="gallery-intro">
        <Link href="/portfolio" className="gallery-back">← Portfolio</Link>
        <p className="gallery-overline">Reportage de mariage</p>
        <h1 className="gallery-title">Marie & Marc</h1>
        <p className="gallery-text">
          Une <MagneticWord>célébration</MagneticWord> pleine de tendresse, captée avec douceur et discrétion.
        </p>
      </div>

      <div className="gallery-content">
        <Lightbox images={images} />
      </div>
    </>
  )
}
