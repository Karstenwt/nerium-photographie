'use client'

import { useState } from 'react'

export default function Contact() {
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    const res = await fetch('https://formspree.io/f/maqlbpjw', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })

    if (res.ok) {
      setSuccess(true)
      form.reset()
    }
  }

  return (
    <section className="section" style={{ paddingTop: '140px' }}>
      <h2 className="title center">Contact & Réservation</h2>
      <p className="center muted">Parlez-moi de votre mariage ou de votre projet photo.</p>

      <div className="form-wrapper">
        {success && (
          <div className="form-success visible">
            <p>Merci pour votre message — je vous répondrai sous 24–48h.</p>
          </div>
        )}

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Nom & Prénom</label>
            <input id="name" name="name" type="text" required autoComplete="name" />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required autoComplete="email" />
          </div>

          <div className="field">
            <label htmlFor="date">Date du mariage</label>
            <input id="date" name="date" type="date" />
          </div>

          <div className="field">
            <label htmlFor="type">Type de prestation</label>
            <select id="type" name="type">
              <option>Mariage</option>
              <option>Séance couple</option>
              <option>Événement</option>
            </select>
          </div>

          <div className="field full">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={6} />
          </div>

          <button className="btn btn-primary" type="submit">Envoyer</button>
        </form>
      </div>

      <p className="center muted contact-alt">
        06 50 54 25 22 — nerium.photographie@gmail.com
      </p>
    </section>
  )
}
