import Link from 'next/link'

export const metadata = {
  title: 'Page introuvable',
}

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--nr-bg, #0e0e0e)',
      color: 'var(--nr-text, #f5f0eb)',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <p style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.5, marginBottom: '1rem' }}>
        Erreur 404
      </p>
      <h1 style={{ fontFamily: 'var(--nr-font-display, Georgia, serif)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 300, marginBottom: '1.5rem' }}>
        Cette page n&apos;existe pas
      </h1>
      <p style={{ maxWidth: '420px', lineHeight: 1.7, opacity: 0.7, marginBottom: '2.5rem' }}>
        La page que vous cherchez a peut-être été déplacée ou supprimée.
      </p>
      <Link href="/" style={{
        display: 'inline-block',
        padding: '0.85rem 2.2rem',
        border: '1px solid var(--nr-gold, #c9a96e)',
        color: 'var(--nr-gold, #c9a96e)',
        textDecoration: 'none',
        letterSpacing: '0.08em',
        fontSize: '0.85rem',
        transition: 'all 0.3s ease',
      }}>
        Retour à l&apos;accueil
      </Link>
    </div>
  )
}
