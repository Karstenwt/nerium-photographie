// ═══════════════════════════════════════════
// StatsBar
// ═══════════════════════════════════════════
'use client';
import { useEffect, useRef, useState } from 'react';
import MagneticWord from '@/components/MagneticWord';

const STATS = [
  { target: 60,    prefix: '',  suffix: '+', label: 'Mariages accompagnés' },
  { target: 24000, prefix: '+', suffix: '',  label: 'Photos livrées'       },
  { target: 98,    prefix: '',  suffix: '%', label: 'De recommandation'    },
];

function useCountUp(target, duration = 1400, active = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let current = 0;
    const step = target / (duration / 16);
    const iv = setInterval(() => {
      current = Math.min(current + step, target);
      setValue(Math.round(current));
      if (current >= target) clearInterval(iv);
    }, 16);
    return () => clearInterval(iv);
  }, [active, target, duration]);
  return value;
}

function StatItem({ stat, active, delay }) {
  const val = useCountUp(stat.target, 1400, active);
  const display = stat.target >= 1000 ? val.toLocaleString('fr-FR') : val;
  return (
    <div className={`nr-stat ${active ? 'nr-stat--visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      <span className="nr-stat__number">{stat.prefix}{display}{stat.suffix}</span>
      <span className="nr-stat__label">{stat.label}</span>
    </div>
  );
}

export function StatsBar() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setActive(true); io.disconnect(); }
    }, { threshold: 0.2 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div className="nr-stats-bar" ref={ref}>
      {STATS.map((s, i) => <StatItem key={s.label} stat={s} active={active} delay={i * 0.15} />)}
    </div>
  );
}


// ═══════════════════════════════════════════
// MagneticButton
// ═══════════════════════════════════════════
export function MagneticButton({ children, className = '', ...props }) {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * 0.35;
    const dy = (e.clientY - (r.top  + r.height / 2)) * 0.35;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
    el.style.transition = 'transform 0.15s ease';
  };

  const onMouseLeave = () => {
    ref.current.style.transform = 'translate(0, 0)';
    ref.current.style.transition = 'transform 0.5s cubic-bezier(.22,1,.36,1)';
  };

  return (
    <div
      ref={ref}
      className={`nr-magnetic ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
}


// ═══════════════════════════════════════════
// LiveCounter — compteur depuis le 1er mariage
// ═══════════════════════════════════════════
export function LiveCounter({ firstDate = '2014-09-20' }) {
  const [diff, setDiff] = useState({ years: 0, months: 0, days: 0 });

  useEffect(() => {
    const calc = () => {
      const start = new Date(firstDate);
      const now   = new Date();
      let y = now.getFullYear() - start.getFullYear();
      let m = now.getMonth()   - start.getMonth();
      let d = now.getDate()    - start.getDate();
      if (d < 0) { m--; d += 30; }
      if (m < 0) { y--; m += 12; }
      setDiff({ years: y, months: m, days: d });
    };
    calc();
    const iv = setInterval(calc, 1000);
    return () => clearInterval(iv);
  }, [firstDate]);

  return (
    <div className="nr-live-counter">
      <p className="nr-live-counter__label">Depuis mon premier <MagneticWord>mariage</MagneticWord></p>
      <p className="nr-live-counter__text">
        Il y a{' '}
        <strong className="nr-live-counter__num">{diff.years}</strong> ans,{' '}
        <strong className="nr-live-counter__num">{diff.months}</strong> mois et{' '}
        <strong className="nr-live-counter__num">{diff.days}</strong> jours,
        je photographiais mon premier <MagneticWord>mariage</MagneticWord>.
      </p>
    </div>
  );
}


// ═══════════════════════════════════════════
// GalleryStrip — galerie défilante infinie
// ═══════════════════════════════════════════
const GALLERY_ITEMS = [
  { src: '/assets/images/portfolio/sophie-et-antonin/preparatif.avif',             label: 'Préparatifs' },
  { src: '/assets/images/portfolio/sophie-et-antonin/eglise.avif',                 label: 'Cérémonie'   },
  { src: '/assets/images/portfolio/sophie-et-antonin/mariée.avif',                 label: 'Portrait'    },
  { src: '/assets/images/portfolio/sophie-et-antonin/entree-eglise.avif',          label: 'Émotion'     },
  { src: '/assets/images/portfolio/sophie-et-antonin/robe.avif',                   label: 'Détails'     },
  { src: "/assets/images/portfolio/sophie-et-antonin/demoiselle-d'honneurs.avif",  label: 'Tendresse'   },
];

export function GalleryStrip() {
  const items = [...GALLERY_ITEMS, ...GALLERY_ITEMS];
  return (
    <section className="nr-gallery-strip">
      <p className="nr-gallery-strip__label">Portfolio — Instants capturés</p>
      <div className="nr-gallery-strip__track">
        {items.map((item, i) => (
          <div key={i} className="nr-gallery-strip__item">
            <img src={item.src} alt={item.label} loading="lazy" />
            <span className="nr-gallery-strip__caption">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}


// ═══════════════════════════════════════════
// TestimonialsStrip — bande d'avis défilante
// ═══════════════════════════════════════════
const TESTIMONIALS = [
  { author: 'Clara', text: 'Karsten nous a suivi tout le long du mariage, discret et sympathique, il a su capturer nos merveilleux souvenirs.' },
  { author: 'Valentin', text: 'Merci pour la disponibilité et la qualité des photos ! Discret et très compétent.' },
  { author: 'Oriane', text: 'Les photos sont magnifiques. Merci pour votre professionnalisme et votre gentillesse !' },
  { author: 'Aurélie', text: 'Très discret mais toujours disponible. Les photos sont justes magnifiques, rien de figé, juste l\'instant présent.' },
  { author: 'Aurore', text: 'Karsten a su capturer chaque moment avec discrétion et nous mettre à l\'aise. Un photographe passionné, professionnel et humain.' },
  { author: 'Coline', text: 'Toujours au bon endroit au bon moment. Des photos spontanées et naturelles qui racontent une histoire. Nous sommes ravis.' },
  { author: 'Lola', text: 'Deux jours de mariage avec Karsten, une écoute et un professionnalisme sans faille. Les photos sont incroyables.' },
  { author: 'Thibaut', text: 'Discret mais très à l\'écoute, il nous a mis à l\'aise dès le début. Nous sommes ravis et le recommandons vivement.' },
  { author: 'Axelle', text: 'Il a retranscrit les émotions et l\'ambiance de notre mariage avec authenticité. Merci pour tout.' },
  { author: 'Sandra', text: 'Photos naturelles, chargées de vie et d\'émotions. À l\'écoute, réactif, disponible — nous le recommandons vivement.' },
  { author: 'Théo & Anastasia', text: 'Discret mais présent, il nous a mis très à l\'aise. Des photos prises sur l\'instant, naturelles. Merci encore !' },
  { author: 'Coralie', text: 'Professionnel et très accessible, il s\'est fait discret tout en captant les moments essentiels. On recommande +++++' },
  { author: 'Audrey', text: 'Discret pendant toute la journée, il a su capturer de beaux moments. À l\'écoute, respectueux de nos envies. Très professionnel.' },
  { author: 'Clément', text: 'Fantastique — abordable, à l\'écoute, discret et rapide. Nous ne trouverez probablement pas meilleur photographe de mariage.' },
  { author: 'Pauline', text: 'Il a très bien capturé l\'émotion de la journée, sans jamais rien imposer. Photos magnifiques, douces et naturelles.' },
  { author: 'Emilie', text: 'Calme et discret, il s\'est adapté à nous dès les premiers instants. Les photos sont remplies d\'émotion, tout était parfait.' },
  { author: 'Morgane', text: 'On ressent l\'émotion, le rire et l\'amour à travers chaque photo. Nous qui ne sommes pas à l\'aise devant l\'objectif, on a adoré.' },
  { author: 'Albin', text: 'Professionnel, discret, avec une capacité rare à saisir les moments chargés en émotion. Ses photos sont lumineuses et solaires.' },
  { author: 'Benoît', text: 'Beaucoup d\'attention et de discrétion, des photos superbes et sans mauvaise surprise. Nous recommandons vivement.' },
  { author: 'Céline', text: 'Karsten a immortalisé notre mariage à la perfection. Nos invités ont été enchantés. Nous n\'hésiterons pas à le recommander !' },
];

export function TestimonialsStrip() {
  const items = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="nr-testimonials-strip">
      <div className="nr-testimonials-strip__track">
        {items.map((t, i) => (
          <div key={i} className="nr-testimonials-strip__item">
            <p className="nr-testimonials-strip__text">&ldquo;{t.text}&rdquo;</p>
            <p className="nr-testimonials-strip__author">— {t.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


// ═══════════════════════════════════════════
// SplitScreen — section à propos
// ═══════════════════════════════════════════
export function SplitScreen() {
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
        <img src="/assets/images/editorial/editorial-1-1200.avif" alt="Karsten, photographe de mariage" />
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


// ═══════════════════════════════════════════
// PageTransition — voile doré entre pages
// ═══════════════════════════════════════════
export function PageTransition() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add('nr-page-transition--out');
    const t = setTimeout(() => el.classList.remove('nr-page-transition--out'), 600);

    const onClick = (e) => {
      const link = e.target.closest('a[href]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return;
      e.preventDefault();
      el.classList.add('nr-page-transition--in');
      setTimeout(() => { window.location.href = href; }, 500);
    };

    document.addEventListener('click', onClick);
    return () => { clearTimeout(t); document.removeEventListener('click', onClick); };
  }, []);

  return <div ref={ref} className="nr-page-transition" />;
}
