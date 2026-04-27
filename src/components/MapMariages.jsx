'use client';

import { useEffect, useRef } from 'react';
import MagneticWord from '@/components/MagneticWord';

const MARIAGES = [
  { lat: 46.32, lng: -0.46, lieu: 'Niort' },
  { lat: 46.58, lng: 0.34,  lieu: 'Poitiers' },
  { lat: 46.50, lng: -1.79, lieu: 'Les Sables-d\'Olonne' },
  { lat: 44.73, lng: 4.60,  lieu: 'Ardèche' },
  { lat: 47.39, lng: 0.69,  lieu: 'Tours' },
  { lat: 46.16, lng: -1.15, lieu: 'La Rochelle' },
  { lat: 46.84, lng: -0.49, lieu: 'Bressuire' },
  { lat: 47.06, lng: -0.88, lieu: 'Cholet' },
  { lat: 45.74, lng: -0.63, lieu: 'Saint-Jean-d\'Angély' },
  { lat: 44.84, lng: -0.58, lieu: 'Bordeaux' },
  { lat: 44.93, lng: 4.89,  lieu: 'Valence' },
  { lat: 44.05, lng: -123.09, lieu: 'Eugene, Oregon, USA' },
];

export default function MapMariages() {
  const mapRef       = useRef(null);
  const instanceRef  = useRef(null);

  useEffect(() => {
    if (instanceRef.current || !mapRef.current) return;

    import('leaflet').then(L => {
      // Import leaflet CSS dynamically
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: '/leaflet/marker-icon-2x.png',
        iconUrl:       '/leaflet/marker-icon.png',
        shadowUrl:     '/leaflet/marker-shadow.png',
      });

      const map = L.map(mapRef.current, {
        center:          [46.5, 2.5],
        zoom:            5,
        zoomControl:     true,
        scrollWheelZoom: false,
        attributionControl: false,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 18,
      }).addTo(map);

      const goldIcon = L.divIcon({
        className: '',
        html: `<div class="nr-map-marker"></div>`,
        iconSize:   [12, 12],
        iconAnchor: [6, 6],
      });

      MARIAGES.forEach(m => {
        L.marker([m.lat, m.lng], { icon: goldIcon })
          .addTo(map)
          .bindPopup(`
            <div class="nr-map-popup">
              <strong>${m.lieu}</strong>
              <span>${m.annee}</span>
            </div>
          `, { className: 'nr-map-popup-wrapper', closeButton: false });
      });

      instanceRef.current = map;
    }).catch(console.error);

    return () => {
      if (instanceRef.current) {
        instanceRef.current.remove();
        instanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className="nr-map-section">
      <div className="nr-map-section__header">
        <p className="nr-map-section__label">Rayonnement</p>
        <h2 className="nr-map-section__title">
          60+ <MagneticWord>mariages</MagneticWord> à travers<br /><em>la France &amp; l&apos;international</em>
        </h2>
      </div>
      <div ref={mapRef} className="nr-map-container" />
    </section>
  );
}
