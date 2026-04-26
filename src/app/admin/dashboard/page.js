'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from '@/lib/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { getAllGalleries, createGallery, deleteGallery } from '@/lib/galleries'

function slugify(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export default function AdminDashboard() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [galleries, setGalleries] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({
    clientName: '',
    date: '',
    password: '',
    cloudinaryFolder: '',
    description: '',
    downloadUrl: '',
  })
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [copied, setCopied] = useState(null)

  // Auth guard
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, u => {
      if (!u) {
        router.push('/admin')
      } else {
        setUser(u)
        loadGalleries()
      }
    })
    return unsub
  }, [router])

  async function loadGalleries() {
    try {
      const data = await getAllGalleries()
      setGalleries(data)
    } finally {
      setLoading(false)
    }
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => {
      const next = { ...f, [name]: value }
      // Auto-générer le slug Cloudinary depuis le nom client
      if (name === 'clientName') {
        next.cloudinaryFolder = slugify(value)
      }
      return next
    })
  }

  async function handleCreate(e) {
    e.preventDefault()
    setSaving(true)
    try {
      const slug = slugify(form.clientName)
      await createGallery({ ...form, slug })
      setForm({ clientName: '', date: '', password: '', cloudinaryFolder: '', description: '', downloadUrl: '' })
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
      loadGalleries()
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(id, clientName) {
    if (!confirm(`Supprimer la galerie de ${clientName} ?`)) return
    await deleteGallery(id)
    loadGalleries()
  }

  function copyLink(slug) {
    const url = `${window.location.origin}/galerie/${slug}`
    navigator.clipboard.writeText(url)
    setCopied(slug)
    setTimeout(() => setCopied(null), 2000)
  }

  if (!user) return null

  return (
    <div className="admin-layout">
      <div className="admin-header">
        <h1>Nerium — Admin</h1>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>{user.email}</span>
          <button onClick={() => signOut(auth).then(() => router.push('/admin'))}>
            Déconnexion
          </button>
        </div>
      </div>

      <div className="admin-content">

        {/* CRÉER UNE GALERIE */}
        <div className="admin-section">
          <h2>Créer une galerie client</h2>

          {saved && (
            <div className="form-success visible" style={{ marginBottom: '20px' }}>
              Galerie créée avec succès.
            </div>
          )}

          <form className="admin-form" onSubmit={handleCreate}>
            <div className="field">
              <label>Nom du client</label>
              <input
                name="clientName"
                value={form.clientName}
                onChange={handleChange}
                placeholder="Sophie & Antonin"
                required
              />
            </div>

            <div className="field">
              <label>Date du mariage</label>
              <input
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Mot de passe client</label>
              <input
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="mot de passe unique"
                required
              />
            </div>

            <div className="field">
              <label>Dossier Cloudinary</label>
              <input
                name="cloudinaryFolder"
                value={form.cloudinaryFolder}
                onChange={handleChange}
                placeholder="sophie-et-antonin-2025"
                required
              />
              <small style={{ fontSize: '12px', color: 'var(--muted)' }}>
                Créez ce dossier dans votre Cloudinary et uploadez les photos dedans.
              </small>
            </div>

            <div className="field">
              <label>Lien de téléchargement (optionnel)</label>
              <input
                name="downloadUrl"
                value={form.downloadUrl}
                onChange={handleChange}
                placeholder="https://..."
              />
              <small style={{ fontSize: '12px', color: 'var(--muted)' }}>
                Lien WeTransfer, Google Drive, etc. pour télécharger toutes les photos.
              </small>
            </div>

            <div className="field full">
              <label>Description (optionnelle)</label>
              <input
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Un mariage intime dans les Deux-Sèvres..."
              />
            </div>

            <div className="field full">
              <button className="btn-admin" type="submit" disabled={saving}>
                {saving ? 'Création…' : 'Créer la galerie'}
              </button>
            </div>
          </form>
        </div>

        {/* LISTE DES GALERIES */}
        <div className="admin-section">
          <h2>Galeries existantes ({galleries.length})</h2>

          {loading ? (
            <p className="muted">Chargement…</p>
          ) : galleries.length === 0 ? (
            <p className="muted">Aucune galerie pour l&apos;instant.</p>
          ) : (
            <div className="gallery-list">
              {galleries.map(g => (
                <div key={g.id} className="gallery-list-item">
                  <div>
                    <h3>{g.clientName}</h3>
                    <p>
                      {g.date && `${g.date} · `}
                      Dossier : <code>{g.cloudinaryFolder}</code>
                      {' · '}Mot de passe : <code>{g.password}</code>
                    </p>
                    <p style={{ marginTop: '4px' }}>
                      Lien :{' '}
                      <code style={{ fontSize: '12px' }}>
                        {typeof window !== 'undefined' ? window.location.origin : ''}/galerie/{g.slug}
                      </code>
                    </p>
                  </div>
                  <div className="gallery-list-actions">
                    <button
                      className="btn-admin"
                      onClick={() => copyLink(g.slug)}
                      style={{ fontSize: '12px', padding: '8px 14px' }}
                    >
                      {copied === g.slug ? '✓ Copié' : 'Copier le lien'}
                    </button>
                    <button
                      className="btn-admin danger"
                      onClick={() => handleDelete(g.id, g.clientName)}
                      style={{ fontSize: '12px', padding: '8px 14px' }}
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
