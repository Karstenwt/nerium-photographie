'use client';

import { useEffect, useRef, useState } from 'react';
import MagneticWord from '@/components/MagneticWord';

const WORDS = ['intemporelles', 'sincères', 'profondes', 'éternelles'];
const WORD_H = 72;

const HERO_PHOTOS = [
  '/assets/images/hero/hero-1920.avif',
  '/assets/images/hero/hero.jpg',
  '/assets/images/hero/mariage-hero.jpg',
];

export default function HeroSection() {
  const trackRef    = useRef(null);
  const mediaRef    = useRef(null);
  const [slideIdx, setSlideIdx] = useState(0);
  const drumIdx     = useRef(0);

  // Morphing photos
  useEffect(() => {
    const iv = setInterval(() => {
      setSlideIdx(i => (i + 1) % HERO_PHOTOS.length);
    }, 4000);
    return () => clearInterval(iv);
  }, []);

  // Tambour mot rotatif
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const timer = setTimeout(() => {
      const iv = setInterval(() => {
        drumIdx.current++;
        track.style.transition = 'transform 0.55s cubic-bezier(0.4,0,0.2,1)';
        track.style.transform  = `translateY(-${drumIdx.current * WORD_H}px)`;

        if (drumIdx.current >= WORDS.length) {
          setTimeout(() => {
            track.style.transition = 'none';
            track.style.transform  = 'translateY(0)';
            drumIdx.current = 0;
          }, 580);
        }
      }, 2800);
      return () => clearInterval(iv);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  // Parallaxe au scroll
  useEffect(() => {
    const media = mediaRef.current;
    if (!media) return;
    const onScroll = () => {
      media.style.transform = `translateY(${window.scrollY * 0.35}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="nr-hero">

      {/* Morphing photos */}
      <div className="nr-hero__media" ref={mediaRef}>
        {HERO_PHOTOS.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Photographie de mariage"
            className={`nr-hero__slide ${i === slideIdx ? 'nr-hero__slide--active' : ''}`}
            width={1920} height={1080}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>

      {/* Grain animé */}
      <div className="nr-hero__grain" />

      {/* Overlay */}
      <div className="nr-hero__overlay" />

      {/* Lignes décoratives */}
      <div className="nr-hero__line nr-hero__line--left" />
      <div className="nr-hero__line nr-hero__line--right" />

      {/* Contenu */}
      <div className="nr-hero__content">
        <p className="nr-hero__overline">
          Photographe de mariage · Deux-Sèvres · France &amp; International
        </p>

        <h1 className="nr-hero__title">
          <span className="nr-hero__title-line">
            <span className="nr-hero__title-word">Naturelles</span>
          </span>
          <span className="nr-hero__title-line nr-hero__title-line--drum">
            <span className="nr-hero__ampersand">&amp;</span>
            <span className="nr-hero__drum-window">
              <span className="nr-hero__drum-track" ref={trackRef}>
                {WORDS.map(w => (
                  <span key={w} className="nr-hero__drum-word">{w}</span>
                ))}
                <span className="nr-hero__drum-word">{WORDS[0]}</span>
              </span>
            </span>
          </span>
        </h1>

        <div className="nr-hero__divider" />

        <p className="nr-hero__sub">
          Des images qui célèbrent l&apos;<MagneticWord>émotion</MagneticWord> et l&apos;<MagneticWord>authenticité</MagneticWord>
        </p>

        <a href="/portfolio" className="nr-hero__cta">
          <span className="nr-hero__cta-line" />
          Découvrir le portfolio
        </a>
      </div>

      {/* Indicateur scroll */}
      <div className="nr-hero__scroll">
        <span>Défiler</span>
        <div className="nr-hero__scroll-bar" />
      </div>

    </section>
  );
}
