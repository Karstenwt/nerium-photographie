'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef   = useRef(null);
  const mx = useRef(200), my = useRef(200);
  const rx = useRef(200), ry = useRef(200);
  const lastPx = useRef(-999), lastPy = useRef(-999);
  const rafId  = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cursor = cursorRef.current;
    const ring   = ringRef.current;
    if (!cursor || !ring) return;

    document.body.style.cursor = 'none';

    const onMove = (e) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
      spawnParticle(e.clientX, e.clientY);
    };

    const lerpRing = () => {
      rx.current += (mx.current - rx.current) * 0.1;
      ry.current += (my.current - ry.current) * 0.1;
      ring.style.left = rx.current + 'px';
      ring.style.top  = ry.current + 'px';
      rafId.current = requestAnimationFrame(lerpRing);
    };

    const onEnter = () => {
      cursor.classList.add('nr-cursor--hover');
      ring.classList.add('nr-cursor-ring--hover');
    };
    const onLeave = () => {
      cursor.classList.remove('nr-cursor--hover');
      ring.classList.remove('nr-cursor-ring--hover');
    };

    const bindHover = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    function spawnParticle(x, y) {
      const dist = Math.hypot(x - lastPx.current, y - lastPy.current);
      if (dist < 22) return;
      lastPx.current = x;
      lastPy.current = y;

      const p = document.createElement('div');
      p.className = 'nr-particle';
      const size = Math.random() * 4 + 2;
      p.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px;`;
      document.body.appendChild(p);

      let opacity = 0.75;
      const iv = setInterval(() => {
        opacity -= 0.05;
        p.style.opacity = opacity;
        p.style.top = (parseFloat(p.style.top) - 0.8) + 'px';
        if (opacity <= 0) { clearInterval(iv); p.remove(); }
      }, 20);
    }

    document.addEventListener('mousemove', onMove);
    rafId.current = requestAnimationFrame(lerpRing);
    bindHover();

    const observer = new MutationObserver(bindHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId.current);
      observer.disconnect();
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="nr-cursor" />
      <div ref={ringRef}   className="nr-cursor-ring" />
    </>
  );
}
