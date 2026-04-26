'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from '@/lib/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function AdminLogin() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(e) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/admin/dashboard')
    } catch {
      setError('Email ou mot de passe incorrect.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="client-login">
      <div className="client-login-box">
        <p className="client-login-logo">Nerium</p>
        <p className="client-login-sub">Espace photographe</p>
        <h1 className="client-login-title">Connexion admin</h1>

        <form onSubmit={handleLogin} style={{ textAlign: 'left' }}>
          <div className="field" style={{ marginBottom: '14px' }}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              autoFocus
              style={{ borderRadius: '10px', padding: '12px', border: '1px solid rgba(0,0,0,0.12)', fontFamily: 'inherit', fontSize: '15px' }}
            />
          </div>

          <div className="field" style={{ marginBottom: '14px' }}>
            <label htmlFor="password">Mot de passe</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{ borderRadius: '10px', padding: '12px', border: '1px solid rgba(0,0,0,0.12)', fontFamily: 'inherit', fontSize: '15px' }}
            />
          </div>

          {error && (
            <p className="client-login-error visible" style={{ marginBottom: '12px' }}>
              {error}
            </p>
          )}

          <button
            className="btn btn-primary"
            type="submit"
            disabled={loading}
            style={{ width: '100%', marginTop: '8px' }}
          >
            {loading ? 'Connexion…' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  )
}
