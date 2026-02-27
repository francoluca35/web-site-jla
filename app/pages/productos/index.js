'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CARROUSEL_IMAGES = [
  { src: '/assets/carrousel/hornorotativoindustrial.png', alt: 'Horno rotativo industrial JLA' },
  { src: '/assets/carrousel/horno-muestra.png', alt: 'Horno de muestra para panificación' },
  { src: '/assets/carrousel/espiedoecologico.png', alt: 'Espiedo ecológico JLA' },
];

const CATEGORIAS = [
  'Hornos industriales',
  'Equipos y máquinas',
  'Acero inoxidable',
  'Panificación',
  'Gastronomía',
];

export default function Producto() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrentSlide((p) => (p + 1) % CARROUSEL_IMAGES.length),
      4500
    );
    return () => clearInterval(t);
  }, []);

  const handleVerCatalogo = () => {
    router.push('/producatalogo');
  };

  const handlePedirPresupuesto = () => {
    const el = document.getElementById('Contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      id="productos"
      className="relative bg-stone-50  scroll-mt-24"
    >
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Columna texto + CTAs */}
          <div className="order-2 lg:order-1 flex flex-col">
            <p className="text-[#3b9738] font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              Productos
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight mb-6">
              Soluciones en hornos y equipamiento gastronómico
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-4">
              Hornos, equipos, máquinas, carros, bandejas y útiles para
              panificación y gastronomía. Calidad y garantía en cada producto.
            </p>
            <p className="text-stone-500 leading-relaxed mb-6">
              Nuestro sistema productivo contempla estándares de calidad
              exigentes, con auditoría e ingeniería supervisando cada etapa del
              proceso.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {CATEGORIAS.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 rounded-full bg-stone-200/80 text-stone-600 text-xs font-medium"
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleVerCatalogo}
                className="inline-flex items-center gap-2 bg-[#3b9738] hover:bg-[#2d7429] text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Ver catálogo
                <i className="fa fa-arrow-right text-sm" aria-hidden="true" />
              </button>
              <button
                onClick={handlePedirPresupuesto}
                className="inline-flex items-center gap-2 bg-transparent border-2 border-stone-400 hover:border-[#3b9738] text-stone-700 hover:text-[#3b9738] font-semibold px-6 py-3.5 rounded-xl transition-all duration-200"
              >
                Pedir presupuesto
              </button>
            </div>
          </div>

          {/* Columna carrusel de productos: misma altura que texto + botones, imágenes completas */}
          <div className="order-1 lg:order-2 flex justify-center items-center min-h-[280px]">
            <div className="relative w-full max-w-lg h-full min-h-[280px] max-h-[420px] overflow-hidden">
              {CARROUSEL_IMAGES.map((img, i) => (
                <div
                  key={img.src}
                  className="absolute inset-0 transition-opacity duration-700 ease-out flex items-center justify-center"
                  style={{ opacity: i === currentSlide ? 1 : 0 }}
                >
                  <Image
                    src={img.src}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    alt={img.alt}
                    className="object-contain"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
