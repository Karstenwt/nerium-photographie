'use client';

import { useEffect, useState } from 'react';

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem('nr-loaded');
    if (seen) { setVisible(false); return; }

    const timer = setTimeout(() => {
      setLeaving(true);
      setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem('nr-loaded', '1');
      }, 700);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`nr-loader ${leaving ? 'nr-loader--out' : ''}`}>
      <div className="nr-loader__logo">Nerium</div>
      <div className="nr-loader__bar" />
      <div className="nr-loader__sub">Photographe de mariage</div>
    </div>
  );
}
