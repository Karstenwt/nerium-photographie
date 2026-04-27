import ContactTunnel from '@/components/ContactTunnel'

export const metadata = {
  title: 'Contact — Réservez votre photographe de mariage',
  description: 'Contactez Karsten, photographe de mariage dans les Deux-Sèvres (79). Parlez-moi de votre mariage, de votre lieu et de votre histoire. Réponse sous 48h, sans engagement.',
  alternates: { canonical: 'https://www.nerium-photographie.com/contact' },
}

export default function Contact() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <ContactTunnel />
    </div>
  )
}
