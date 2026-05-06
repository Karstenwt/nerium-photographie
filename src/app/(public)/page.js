import Link from 'next/link'
import MagneticWord from '@/components/MagneticWord'
import HeroSection from '@/components/HeroSection'
import StatsBar from '@/components/StatsBar'
import LiveCounter from '@/components/LiveCounter'
import GalleryStrip from '@/components/GalleryStrip'
import TestimonialsStrip from '@/components/TestimonialsStrip'
import SplitScreen from '@/components/SplitScreen'
import MapMariages from '@/components/MapMariages'

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <SplitScreen />
      <GalleryStrip />
      <TestimonialsStrip />
      <LiveCounter />
      <MapMariages />

      {/* CTA FINAL */}
      <section className="cta-section">
        <h2 className="cta-title">
          Votre <MagneticWord>mariage</MagneticWord> mérite<br />
          <em>des images éternelles</em>
        </h2>
        <p className="cta-sub">Parlons de votre projet, sans engagement</p>
        <Link href="/contact" className="cta-btn">
          Prendre contact &rarr;
        </Link>
      </section>
    </>
  )
}
