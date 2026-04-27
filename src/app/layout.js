import './globals.css'

const BASE_URL = 'https://www.nerium-photographie.com'

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Photographe de mariage Deux-Sèvres (79) | Nerium Photographie',
    template: '%s | Nerium Photographie',
  },
  description:
    'Karsten, photographe de mariage dans les Deux-Sèvres (79), près de Niort. Reportages naturels, lumineux et intemporels en France et à l\'international. Prestations de 1290 € à 1990 €.',
  keywords: [
    'photographe mariage',
    'photographe mariage Deux-Sèvres',
    'photographe mariage 79',
    'photographe mariage Niort',
    'photographe mariage Poitiers',
    'photographe mariage La Rochelle',
    'photographe mariage Nouvelle-Aquitaine',
    'reportage mariage naturel',
    'photographe mariage lumineux',
    'photos mariage intemporelles',
    'Nerium Photographie',
    'Karsten photographe',
  ],
  authors: [{ name: 'Karsten — Nerium Photographie' }],
  creator: 'Nerium Photographie',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: BASE_URL,
    siteName: 'Nerium Photographie',
    title: 'Photographe de mariage Deux-Sèvres (79) | Nerium Photographie',
    description:
      'Reportages de mariage naturels, lumineux et intemporels. Photographe basé dans les Deux-Sèvres, disponible en France et à l\'international.',
    images: [
      {
        url: '/assets/images/hero/hero-1920.avif',
        width: 1920,
        height: 1080,
        alt: 'Nerium Photographie — Photographe de mariage dans les Deux-Sèvres',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photographe de mariage Deux-Sèvres (79) | Nerium Photographie',
    description:
      'Reportages de mariage naturels, lumineux et intemporels. Photographe basé près de Niort.',
    images: ['/assets/images/hero/hero-1920.avif'],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// Données structurées JSON-LD
function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': BASE_URL,
    name: 'Nerium Photographie',
    description:
      'Photographe de mariage dans les Deux-Sèvres (79). Reportages naturels, lumineux et intemporels.',
    url: BASE_URL,
    telephone: '+33650542522',
    email: 'nerium.photographie@gmail.com',
    image: `${BASE_URL}/assets/images/hero/hero-1920.avif`,
    priceRange: '1290€ - 1990€',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Deux-Sèvres',
      postalCode: '79',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 46.32,
      longitude: -0.46,
    },
    areaServed: [
      { '@type': 'Country', name: 'France' },
      { '@type': 'AdministrativeArea', name: 'Deux-Sèvres' },
      { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
    ],
    sameAs: [],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '20',
      bestRating: '5',
    },
    makesOffer: {
      '@type': 'Offer',
      name: 'Reportage de mariage',
      description: 'Photographie de mariage naturelle et intemporelle — des préparatifs à la soirée',
      priceCurrency: 'EUR',
      price: '1290',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: '1290',
        maxPrice: '1990',
        priceCurrency: 'EUR',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <JsonLd />
      </head>
      <body>{children}</body>
    </html>
  )
}
