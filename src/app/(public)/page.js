import Link from 'next/link'
import MagneticWord from '@/components/MagneticWord'
import HomeClient from './HomeClient'

export default function Home() {
  return (
    <>
      <HomeClient />

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
