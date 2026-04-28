import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      &copy; 2025 &mdash; Nerium Photographie &middot; Tous droits r&eacute;serv&eacute;s
      <br />
      <Link href="/contact">Me contacter</Link>
      <span> &middot; </span>
      <Link href="/a-propos">&Agrave; propos</Link>
      <span> &middot; </span>
      <Link href="/mentions-legales">Mentions l&eacute;gales</Link>
    </footer>
  )
}
