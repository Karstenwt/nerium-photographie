'use client';
import { useEffect, useState } from 'react';
import MagneticWord from '@/components/MagneticWord';

export default function LiveCounter({ firstDate = '2014-09-20' }) {
  const [diff, setDiff] = useState({ years: 0, months: 0, days: 0 });

  useEffect(() => {
    const calc = () => {
      const start = new Date(firstDate);
      const now   = new Date();
      let y = now.getFullYear() - start.getFullYear();
      let m = now.getMonth()   - start.getMonth();
      let d = now.getDate()    - start.getDate();
      if (d < 0) { m--; d += 30; }
      if (m < 0) { y--; m += 12; }
      setDiff({ years: y, months: m, days: d });
    };
    calc();
    const iv = setInterval(calc, 1000);
    return () => clearInterval(iv);
  }, [firstDate]);

  return (
    <div className="nr-live-counter">
      <p className="nr-live-counter__label">Depuis mon premier <MagneticWord>mariage</MagneticWord></p>
      <p className="nr-live-counter__text">
        Il y a{' '}
        <strong className="nr-live-counter__num">{diff.years}</strong> ans,{' '}
        <strong className="nr-live-counter__num">{diff.months}</strong> mois et{' '}
        <strong className="nr-live-counter__num">{diff.days}</strong> jours,
        je photographiais mon premier <MagneticWord>mariage</MagneticWord>.
      </p>
    </div>
  );
}
