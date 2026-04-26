import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      © 2025 — Nerium Photographie · Tous droits réservés
      <br />
      <Link href="/contact" className="muted">Me contacter</Link>
      <span className="muted"> · </span>
      <Link href="/a-propos" className="muted">À propos</Link>
    </footer>
  )
}
