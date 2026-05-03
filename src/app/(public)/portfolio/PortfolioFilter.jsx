'use client'

import { useState, useEffect } from 'react'

const cats = [
  { key: 'mariage',  label: 'Mariage'  },
  { key: 'portrait', label: 'Portrait' },
  { key: 'famille',  label: 'Famille'  },
]

export default function PortfolioFilter() {
  const [active, setActive] = useState('mariage')

  useEffect(() => {
    document.querySelectorAll('.gallery-group').forEach(g => {
      g.classList.toggle('active', g.dataset.category === active)
    })
  }, [active])

  return (
    <div className="portfolio-categories">
      {cats.map(({ key, label }) => (
        <button
          key={key}
          className={`portfolio-cat${active === key ? ' active' : ''}`}
          onClick={() => setActive(key)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
