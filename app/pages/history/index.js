"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const EMPRESA_IMAGES = [
  { src: "/assets/person1.jpg", alt: "Equipo JLA Equipamientos Gastronómicos" },
  { src: "/assets/fondo1.png", alt: "Equipamiento gastronómico industrial" },
  { src: "/assets/fondo2.jpg", alt: "Trabajo y maquinaria JLA" },
];

export default function Nosotros() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrentImage((p) => (p + 1) % EMPRESA_IMAGES.length),
      4500
    );
    return () => clearInterval(t);
  }, []);

  const scrollToContacto = () => {
    const el = document.getElementById("Contacto");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="Sobrenosotros"
      className="relative z-10 overflow-hidden bg-stone-50 border-t border-stone-200 scroll-mt-24 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-1 py-16 sm:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Slider de 3 fotos */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden  shadow-lg ring-1 ring-stone-200/80">
              {EMPRESA_IMAGES.map((img, i) => (
                <div
                  key={img.src}
                  className="absolute inset-0 transition-opacity duration-700 ease-out"
                  style={{ opacity: i === currentImage ? 1 : 0 }}
                >
                  <Image
                    src={img.src}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    alt={img.alt}
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Contenido */}
          <div className="order-1 lg:order-2">
            <p className="text-[#3b9738] font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              Nuestra empresa
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight mb-6">
              Desde 2005, siempre juntos
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-4">
              Más de 20 años ubicando a JLA Técnicos entre las marcas líderes del mercado
              de equipamiento gastronómico industrial.
            </p>
            <p className="text-stone-500 leading-relaxed mb-8">
              Nos enfocamos en que la tarea de los profesionales de panadería,
              pastelería, gastronomía, hotelería y food service sea cómoda y
              eficiente. Desarrollamos soluciones para que elaboren los mejores
              productos para sus clientes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#3b9738] hover:bg-[#2d7429] text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Saber más sobre nosotros
                <i className="fa fa-arrow-right text-sm" aria-hidden="true" />
              </Link>
              <button
                type="button"
                onClick={scrollToContacto}
                className="inline-flex items-center gap-2 bg-transparent border-2 border-stone-400 hover:border-[#3b9738] text-stone-700 hover:text-[#3b9738] font-semibold px-6 py-3.5 rounded-xl transition-all duration-200"
              >
                Contactanos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
