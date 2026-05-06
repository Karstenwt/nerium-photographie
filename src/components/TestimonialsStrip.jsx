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
  { author: 'Clément', text: 'Fantastique — abordable, à l\'écoute, discret et rapide. Vous ne trouverez probablement pas meilleur photographe de mariage.' },
  { author: 'Pauline', text: 'Il a très bien capturé l\'émotion de la journée, sans jamais rien imposer. Photos magnifiques, douces et naturelles.' },
  { author: 'Emilie', text: 'Calme et discret, il s\'est adapté à nous dès les premiers instants. Les photos sont remplies d\'émotion, tout était parfait.' },
  { author: 'Morgane', text: 'On ressent l\'émotion, le rire et l\'amour à travers chaque photo. Nous qui ne sommes pas à l\'aise devant l\'objectif, on a adoré.' },
  { author: 'Albin', text: 'Professionnel, discret, avec une capacité rare à saisir les moments chargés en émotion. Ses photos sont lumineuses et solaires.' },
  { author: 'Benoît', text: 'Beaucoup d\'attention et de discrétion, des photos superbes et sans mauvaise surprise. Nous recommandons vivement.' },
  { author: 'Céline', text: 'Karsten a immortalisé notre mariage à la perfection. Nos invités ont été enchantés. Nous n\'hésiterons pas à le recommander !' },
];

export default function TestimonialsStrip() {
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
