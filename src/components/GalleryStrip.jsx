import Image from 'next/image';

const GALLERY_ITEMS = [
  { src: '/assets/images/portfolio/sophie-et-antonin/sophie-et-antonin-01.avif',   label: 'Préparatifs' },
  { src: '/assets/images/portfolio/celine-et-paul/celine-et-paul-05.avif',         label: 'Cérémonie'   },
  { src: '/assets/images/portfolio/blandine-et-yann/blandine-et-yann-03.avif',     label: 'Portrait'    },
  { src: '/assets/images/portfolio/louise-et-nicolas/louise-et-nicolas-10.avif',   label: 'Émotion'     },
  { src: '/assets/images/portfolio/emilie-et-moussa/emilie-et-moussa-02.avif',     label: 'Détails'     },
  { src: '/assets/images/portfolio/marie-et-marc/marie-et-marc-08.avif',           label: 'Tendresse'   },
];

export default function GalleryStrip() {
  const items = [...GALLERY_ITEMS, ...GALLERY_ITEMS];
  return (
    <section className="nr-gallery-strip">
      <p className="nr-gallery-strip__label">Portfolio — Instants capturés</p>
      <div className="nr-gallery-strip__track">
        {items.map((item, i) => (
          <div key={i} className="nr-gallery-strip__item">
            <Image src={item.src} alt={item.label} width={400} height={600} loading="lazy" quality={75} sizes="(max-width: 768px) 50vw, 400px" />
            <span className="nr-gallery-strip__caption">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
