'use client';
import { useEffect, useRef, useState } from 'react';

const STATS = [
  { target: 60,    prefix: '',  suffix: '+', label: 'Mariages accompagnés' },
  { target: 24000, prefix: '+', suffix: '',  label: 'Photos livrées'       },
  { target: 98,    prefix: '',  suffix: '%', label: 'De recommandation'    },
];

function useCountUp(target, duration = 1400, active = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let current = 0;
    const step = target / (duration / 16);
    const iv = setInterval(() => {
      current = Math.min(current + step, target);
      setValue(Math.round(current));
      if (current >= target) clearInterval(iv);
    }, 16);
    return () => clearInterval(iv);
  }, [active, target, duration]);
  return value;
}

function StatItem({ stat, active, delay }) {
  const val = useCountUp(stat.target, 1400, active);
  const display = stat.target >= 1000 ? val.toLocaleString('fr-FR') : val;
  return (
    <div className={`nr-stat ${active ? 'nr-stat--visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      <span className="nr-stat__number">{stat.prefix}{display}{stat.suffix}</span>
      <span className="nr-stat__label">{stat.label}</span>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setActive(true); io.disconnect(); }
    }, { threshold: 0.2 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div className="nr-stats-bar" ref={ref}>
      {STATS.map((s, i) => <StatItem key={s.label} stat={s} active={active} delay={i * 0.15} />)}
    </div>
  );
}
