'use client'

import { useState, useEffect } from 'react'
import { checkPassword } from '@/lib/galleries'
import Lightbox from '@/components/Lightbox'

export default function ClientGallery({ gallery }) {
  const storageKey = `gallery-auth-${gallery.slug}`
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  // Vérifier si déjà authentifié (session)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem(storageKey)
      if (saved === 'true') {
        setAuthed(true)
      }
    }
  }, [storageKey])

  // Charger les images via l'API route une fois authentifié
  useEffect(() => {
    if (!authed) return
    setLoading(true)
    fetch(`/api/galerie/${gallery.cloudinaryFolder}`)
      .then(r => r.json())
      .then(data => setImages(data.images.map(i => i.url)))
      .finally(() => setLoading(false))
  }, [authed, gallery.cloudinaryFolder])

  function handleLogin(e) {
    e.preventDefault()
    if (checkPassword(gallery, password)) {
      sessionStorage.setItem(storageKey, 'true')
      setAuthed(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  if (!authed) {
    return (
      <div className="client-login">
        <div className="client-login-box">
          <p className="client-login-logo">Nerium</p>
          <p className="client-login-sub">Photographie</p>
          <h1 className="client-login-title">Votre galerie privée</h1>
          <p className="client-login-text">
            Saisissez le mot de passe que vous a transmis votre photographe
            pour accéder à vos photos.
          </p>
          <form onSubmit={handleLogin}>
            <input
              className="client-login-input"
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={e => {
                setPassword(e.target.value)
                setError(false)
              }}
              autoFocus
            />
            <p className={`client-login-error${error ? ' visible' : ''}`}>
              Mot de passe incorrect. Vérifiez auprès de votre photographe.
            </p>
            <button className="btn btn-primary" type="submit" style={{ width: '100%' }}>
              Accéder à mes photos
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* EN-TÊTE */}
      <div style={{ paddingTop: '100px' }}>
        <div className="client-gallery-header">
          <div>
            <h1 className="client-gallery-title">{gallery.clientName}</h1>
            <p className="client-gallery-meta">
              {gallery.date && `${gallery.date} · `}
              {images.length} photo{images.length !== 1 ? 's' : ''}
            </p>
          </div>
          {gallery.downloadUrl && (
            <a href={gallery.downloadUrl} className="btn-download" download>
              ↓ Télécharger toutes les photos
            </a>
          )}
        </div>
      </div>

      {/* GALERIE */}
      {loading ? (
        <div className="center section" style={{ paddingTop: '80px' }}>
          <p className="muted">Chargement de vos photos…</p>
        </div>
      ) : images.length === 0 ? (
        <div className="center section" style={{ paddingTop: '80px' }}>
          <p className="muted">Les photos arrivent bientôt. Revenez dans quelques jours.</p>
        </div>
      ) : (
        <div className="client-gallery-grid">
          <Lightbox images={images} />
        </div>
      )}
    </>
  )
}
