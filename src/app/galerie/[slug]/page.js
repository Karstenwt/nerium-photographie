export const dynamic = 'force-dynamic'

import ClientGallery from './ClientGallery'
import { getGalleryBySlug } from '@/lib/galleries'

export default async function GalleriePage({ params }) {
  const { slug } = await params
  const gallery = await getGalleryBySlug(slug)

  if (!gallery) {
    return (
      <div className="client-login">
        <div className="client-login-box">
          <p className="client-login-logo">Nerium</p>
          <p className="client-login-sub">Photographie</p>
          <h1 className="client-login-title">Galerie introuvable</h1>
          <p className="client-login-text">
            Ce lien ne correspond à aucune galerie active.
            Vérifiez l&apos;adresse ou contactez votre photographe.
          </p>
        </div>
      </div>
    )
  }

  return <ClientGallery gallery={gallery} />
}
