'use client';
import { useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function PageTransition() {
  const ref = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove('nr-page-transition--in');
    el.classList.add('nr-page-transition--out');
    const t = setTimeout(() => el.classList.remove('nr-page-transition--out'), 600);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onClick = (e) => {
      const link = e.target.closest('a[href]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return;
      e.preventDefault();
      el.classList.add('nr-page-transition--in');
      setTimeout(() => { router.push(href); }, 500);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [router]);

  return <div ref={ref} className="nr-page-transition" />;
}
