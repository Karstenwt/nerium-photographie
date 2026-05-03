import './globals.css'

const BASE_URL = 'https://www.nerium-photographie.com'

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Photographe de mariage Deux-Sèvres (79) | Nerium Photographie',
    template: '%s | Nerium Photographie',
  },
  description:
    'Karsten, photographe de mariage dans les Deux-Sèvres (79), près de Niort. Reportages naturels, lumineux et intemporels en France et à l\'international. Prestations de 1090 € à 1790 €.',
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
        url: '/assets/images/hero/og-image.jpg',
        width: 1920,
        height: 1080,
        alt: 'Nerium Photographie — Photographe de mariage dans les Deux-Sèvres',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photographe de mariage Deux-Sèvres (79) | Nerium Photographie',
    description:
      'Reportages de mariage naturels, lumineux et intemporels. Photographe basé près de Niort.',
    images: ['/assets/images/hero/og-image.jpg'],
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
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': `${BASE_URL}/#business`,
      name: 'Nerium Photographie',
      description: 'Photographe de mariage dans les Deux-Sèvres (79), près de Niort. Reportages naturels, lumineux et intemporels en France et à l\'international.',
      url: BASE_URL,
      telephone: '+33650542522',
      email: 'nerium.photographie@gmail.com',
      image: `${BASE_URL}/assets/images/hero/og-image.jpg`,
      priceRange: '1090€ - 1790€',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Deux-Sèvres',
        addressLocality: 'Niort',
        postalCode: '79000',
        addressRegion: 'Deux-Sèvres',
        addressCountry: 'FR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 46.3225,
        longitude: -0.4618,
      },
      areaServed: [
        { '@type': 'Country',             name: 'France'           },
        { '@type': 'AdministrativeArea',  name: 'Deux-Sèvres'     },
        { '@type': 'AdministrativeArea',  name: 'Nouvelle-Aquitaine' },
        { '@type': 'City',               name: 'Niort'            },
        { '@type': 'City',               name: 'Poitiers'         },
        { '@type': 'City',               name: 'La Rochelle'      },
        { '@type': 'City',               name: 'Bordeaux'         },
        { '@type': 'City',               name: 'Nantes'           },
      ],
      sameAs: [],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '20',
        bestRating: '5',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Prestations mariage',
        itemListElement: [
          { '@type': 'Offer', name: 'Cérémonies',             price: '1090', priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Préparatifs',            price: '1290', priceCurrency: 'EUR' },
          { '@type': 'Offer', name: "Jusqu'à la première danse", price: '1490', priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Reportage complet',      price: '1790', priceCurrency: 'EUR' },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': `${BASE_URL}/#person`,
      name: 'Karsten Walraet',
      jobTitle: 'Photographe de mariage',
      worksFor: { '@id': `${BASE_URL}/#business` },
      url: `${BASE_URL}/a-propos`,
      image: `${BASE_URL}/assets/images/hero/og-image.jpg`,
      knowsAbout: ['Photographie de mariage', 'Reportage', 'Photographie éditoriale', 'Photographie naturelle'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Nerium Photographie',
      inLanguage: 'fr-FR',
      publisher: { '@id': `${BASE_URL}/#business` },
    },
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
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
