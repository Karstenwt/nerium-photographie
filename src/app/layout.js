import './globals.css'

export const metadata = {
  title: 'Photographe de mariage dans les Deux-Sèvres (79) — Nerium Photographie',
  description: "Photographe de mariage dans les Deux-Sèvres (79), près de Niort. Images naturelles et intemporelles. Reportages en France et à l'international.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
