export const metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site Nerium Photographie, photographe de mariage dans les Deux-Sèvres (79).',
  alternates: { canonical: 'https://www.nerium-photographie.com/mentions-legales' },
}

export default function MentionsLegales() {
  return (
    <>
      <header className="hero hero-simple">
        <div className="hero-content center">
          <h1 className="hero-signature">Mentions légales</h1>
        </div>
      </header>

      <section className="editorial-dark">
        <div className="editorial-block" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 className="editorial-title" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Éditeur du site</h2>
          <p className="editorial-text">
            Nerium Photographie — Karsten Walraet<br />
            Photographe de mariage<br />
            Deux-Sèvres (79), France<br />
            Email : nerium.photographie@gmail.com<br />
            Téléphone : 06 50 54 25 22
          </p>

          <h2 className="editorial-title" style={{ fontSize: '1.2rem', marginTop: '3rem', marginBottom: '1rem' }}>Hébergement</h2>
          <p className="editorial-text">
            Ce site est hébergé par Vercel Inc.<br />
            440 N Barranca Ave #4133, Covina, CA 91723, USA<br />
            Site : vercel.com
          </p>

          <h2 className="editorial-title" style={{ fontSize: '1.2rem', marginTop: '3rem', marginBottom: '1rem' }}>Propriété intellectuelle</h2>
          <p className="editorial-text">
            L&apos;ensemble du contenu de ce site (textes, photographies, logo, design) est la propriété
            exclusive de Nerium Photographie — Karsten Walraet. Toute reproduction, même partielle,
            est interdite sans autorisation écrite préalable.
          </p>

          <h2 className="editorial-title" style={{ fontSize: '1.2rem', marginTop: '3rem', marginBottom: '1rem' }}>Données personnelles</h2>
          <p className="editorial-text">
            Les informations recueillies via le formulaire de contact sont destinées uniquement à
            Nerium Photographie et ne seront jamais transmises à des tiers. Conformément au RGPD,
            vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données.
            Pour exercer ce droit, contactez-nous à nerium.photographie@gmail.com.
          </p>

          <h2 className="editorial-title" style={{ fontSize: '1.2rem', marginTop: '3rem', marginBottom: '1rem' }}>Cookies</h2>
          <p className="editorial-text">
            Ce site n&apos;utilise aucun cookie publicitaire ni outil de tracking. Seuls des cookies
            techniques nécessaires au bon fonctionnement du site peuvent être utilisés.
          </p>
        </div>
      </section>
    </>
  )
}
