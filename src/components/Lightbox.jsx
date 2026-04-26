'use client'

import { useState, useEffect, useCallback } from 'react'

export default function Lightbox({ images }) {
  const [current, setCurrent] = useState(null)

  const close = useCallback(() => setCurrent(null), [])

  const prev = useCallback(() => {
    setCurrent(i => (i > 0 ? i - 1 : images.length - 1))
  }, [images])

  const next = useCallback(() => {
    setCurrent(i => (i < images.length - 1 ? i + 1 : 0))
  }, [images])

  useEffect(() => {
    const handler = (e) => {
      if (current === null) return
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [current, close, prev, next])

  return (
    <>
      {images.map((src, i) => (
        <div key={i} className="gallery-item">
          <img
            src={src}
            alt=""
            onClick={() => setCurrent(i)}
          />
        </div>
      ))}

      {current !== null && (
        <div className="lightbox show">
          <div className="lightbox-backdrop" onClick={close} />
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={close}>×</button>
            <img
              className="lightbox-image"
              src={images[current]}
              alt=""
            />
          </div>
        </div>
      )}
    </>
  )
}
