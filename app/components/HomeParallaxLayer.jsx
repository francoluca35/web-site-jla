'use client';

import { useEffect, useRef } from 'react';

export default function HomeParallaxLayer({ children }) {
  const parallaxInstances = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    let mounted = true;
    const t = setTimeout(() => {
      import('simple-parallax-js/vanilla').then(({ default: SimpleParallax }) => {
        if (!mounted) return;
        const img = document.querySelector('[data-parallax-home]');
        if (img) {
          const p = new SimpleParallax(img, {
            scale: 1.5,
            overflow: true,
            orientation: 'down',
          });
          parallaxInstances.current.push(p);
        }
      });
    }, 150);
    return () => {
      mounted = false;
      clearTimeout(t);
      parallaxInstances.current.forEach((i) => typeof i.destroy === 'function' && i.destroy());
      parallaxInstances.current = [];
    };
  }, []);

  return (
    <>
      {/* Capa fija: imagen fondo4 que se desliza hacia abajo; se ve en la barra de números y en Contacto */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <img
          data-parallax-home
          src="/assets/fondo4.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ minHeight: '200%', minWidth: '100%', top: '-25%', left: 0 }}
        />
      </div>
      {children}
    </>
  );
}
