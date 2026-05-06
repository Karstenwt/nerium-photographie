'use client';
import { useRef } from 'react';
import Image from 'next/image';
import MagneticWord from '@/components/MagneticWord';

export default function SplitScreen() {
  const leftRef  = useRef(null);
  const rightRef = useRef(null);

  const onMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    if (leftRef.current)  leftRef.current.style.transform  = `translateX(${-x}px)`;
    if (rightRef.current) rightRef.current.style.transform = `translateX(${x}px)`;
  };
  const onMouseLeave = () => {
    if (leftRef.current)  leftRef.current.style.transform  = 'translateX(0)';
    if (rightRef.current) rightRef.current.style.transform = 'translateX(0)';
  };

  return (
    <section className="nr-split" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <div className="nr-split__left" ref={leftRef}>
        <Image src="/assets/images/editorial/editorial-1-1200.avif" alt="Karsten, photographe de mariage" width={1200} height={800} loading="lazy" quality={80} sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      <div className="nr-split__right" ref={rightRef}>
        <p className="nr-split__label">À propos</p>
        <h2 className="nr-split__title">
          Une photographie<br /><em><MagneticWord>discrète</MagneticWord> et <MagneticWord>humaine</MagneticWord></em>
        </h2>
        <p className="nr-split__body">
          Je suis Karsten, photographe de <MagneticWord>mariage</MagneticWord> basé dans les Deux-Sèvres.
          J&apos;accompagne des couples qui souhaitent un reportage <MagneticWord>naturel</MagneticWord>, lumineux
          et <MagneticWord>sincère</MagneticWord> — sans poses forcées, juste vos moments.
        </p>
        <a href="/a-propos" className="nr-split__link">En savoir plus</a>
      </div>
    </section>
  );
}
