import PortfolioClient from './PortfolioClient'

export const metadata = {
  title: 'Portfolio — Reportages de mariage',
  description: 'Découvrez mes reportages de mariage : des instants vrais, captés avec discrétion et lumière naturelle. Photographe de mariage dans les Deux-Sèvres (79), disponible partout en France.',
  alternates: { canonical: 'https://www.nerium-photographie.com/portfolio' },
}

export default function Portfolio() {
  return <PortfolioClient />
}
