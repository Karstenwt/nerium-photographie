'use client';

import { useEffect, useRef } from 'react';

const ATTRACT_R  = 90;
const MAX_SHIFT  = 36;
const LERP_IN    = 0.05;
const LERP_OUT   = 0.06;
const SPARK_COUNT= 28;

let globalCanvas = null;
let globalCtx    = null;
const sparks     = [];

function ensureCanvas() {
  if (globalCanvas) return;
  globalCanvas = document.createElement('canvas');
  globalCanvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9990;';
  globalCanvas.width  = window.innerWidth;
  globalCanvas.height = window.innerHeight;
  document.body.appendChild(globalCanvas);
  globalCtx = globalCanvas.getContext('2d');

  window.addEventListener('resize', () => {
    globalCanvas.width  = window.innerWidth;
    globalCanvas.height = window.innerHeight;
  });

  (function drawLoop() {
    globalCtx.clearRect(0, 0, globalCanvas.width, globalCanvas.height);
    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i];
      s.x  += s.vx;
      s.y  += s.vy;
      s.vy += 0.045;
      s.life -= s.decay;
      if (s.life <= 0) { sparks.splice(i, 1); continue; }

      const a = s.life * 0.85;
      globalCtx.beginPath();
      globalCtx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      globalCtx.fillStyle = `rgba(201,160,87,${a})`;
      globalCtx.fill();

      globalCtx.beginPath();
      globalCtx.arc(s.x, s.y, s.size * 2.4, 0, Math.PI * 2);
      globalCtx.fillStyle = `rgba(201,160,87,${a * 0.07})`;
      globalCtx.fill();
    }
    requestAnimationFrame(drawLoop);
  })();
}

function addSparks(x, y) {
  for (let i = 0; i < SPARK_COUNT; i++) {
    const angle = Math.random() * Math.PI * 2;
    const spd   = Math.random() * 2.2 + 0.5;
    sparks.push({
      x, y,
      vx:   Math.cos(angle) * spd,
      vy:   Math.sin(angle) * spd - 1.4,
      life: 1,
      size: Math.random() * 1.1 + 0.3,
      decay:0.016 + Math.random() * 0.014,
    });
  }
}

const wordRegistry = new Map();
let   rafStarted   = false;
let   globalMx     = -999, globalMy = -999;

function startGlobalLoop() {
  if (rafStarted) return;
  rafStarted = true;

  document.addEventListener('mousemove', e => {
    globalMx = e.clientX;
    globalMy = e.clientY;
  });

  (function loop() {
    wordRegistry.forEach((s, el) => {
      if (s.exploding) return;

      const r   = el.getBoundingClientRect();
      const cx  = r.left + r.width  / 2;
      const cy  = r.top  + r.height / 2;
      const dx  = globalMx - cx;
      const dy  = globalMy - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < ATTRACT_R) {
        s.attracted = true;
        const pull   = Math.pow(1 - dist / ATTRACT_R, 1.3);
        const shift  = pull * MAX_SHIFT;
        const angle  = Math.atan2(dy, dx);
        const targetX = Math.cos(angle) * shift;
        const targetY = Math.sin(angle) * shift;

        s.ox += (targetX - s.ox) * 0.07;
        s.oy += (targetY - s.oy) * 0.07;

        const gold = Math.round(pull * 100);
        el.style.color = `color-mix(in srgb, #c9a057 ${gold}%, currentColor)`;

        if (Math.random() < 0.035) {
          const wx = r.left + r.width  / 2 + s.tx + (Math.random() - 0.5) * r.width  * 0.7;
          const wy = r.top  + r.height / 2 + s.ty + (Math.random() - 0.5) * r.height * 0.7;
          sparks.push({ x: wx, y: wy, vx: (Math.random()-0.5)*0.6, vy: -0.8-Math.random()*0.6, life: 0.7, size: 0.6+Math.random()*0.5, decay: 0.03 });
        }

      } else {
        if (s.attracted) {
          const wx = r.left + r.width  / 2 + s.tx;
          const wy = r.top  + r.height / 2 + s.ty;
          addSparks(wx, wy);

          s.attracted  = false;
          s.exploding  = true;
          s.ox = 0; s.oy = 0;
          el.style.color = '';

          setTimeout(() => { s.exploding = false; }, 100);
        }
        s.ox = 0; s.oy = 0;
      }

      s.tx += (s.ox - s.tx) * (s.attracted ? LERP_IN : LERP_OUT);
      s.ty += (s.oy - s.ty) * (s.attracted ? LERP_IN : LERP_OUT);
      el.style.transform = `translate(${s.tx.toFixed(2)}px,${s.ty.toFixed(2)}px)`;
    });

    requestAnimationFrame(loop);
  })();
}

export default function MagneticWord({ children, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    ensureCanvas();
    startGlobalLoop();

    const el = ref.current;
    if (!el) return;

    wordRegistry.set(el, {
      tx: 0, ty: 0,
      ox: 0, oy: 0,
      attracted: false,
      exploding: false,
    });

    return () => {
      wordRegistry.delete(el);
      el.style.transform = '';
      el.style.color     = '';
    };
  }, []);

  return (
    <span
      ref={ref}
      className={`nr-magnetic-word ${className}`}
      style={{ display: 'inline-block', willChange: 'transform, color', fontStyle: 'italic' }}
    >
      {children}
    </span>
  );
}
