"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/assets/fondo1.png", alt: "Equipamiento gastronómico industrial" },
  { src: "/assets/fondo2.jpg", alt: "Hornos y maquinaria para panificación" },
  { src: "/assets/fondo3.jpeg", alt: "Soluciones para cocinas industriales" },
];

const SLIDE_3_MOBILE = { src: "/assets/tecnico.png", alt: "Soluciones para cocinas industriales" };

const DURATION_MS = 2000;
const useCountUp = (end, start = 0, isActive) => {
  const [value, setValue] = useState(start);
  useEffect(() => {
    if (!isActive) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const easeOut = 1 - (1 - progress) ** 2;
      setValue(Math.round(start + (end - start) * easeOut));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, start, isActive]);
  return value;
};

const Inicio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [statsInView, setStatsInView] = useState(false);
  const count25 = useCountUp(25, 0, statsInView);
  const count2000 = useCountUp(2000, 0, statsInView);
  const count100 = useCountUp(100, 0, statsInView);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setCurrentSlide((p) => (p + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const el = document.getElementById("home-stats");
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setStatsInView(e.isIntersecting),
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero */}
      <section
        id="inicio"
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      >
        <div className="sr-only">
          JLA Equipamientos Gastronómicos. Hornos industriales, panificadoras,
          cocinas industriales, mantenimiento y servicio técnico para
          panaderías, pastelerías y comida rápida.
        </div>

        {/* Slider de fondo: en mobile el 3º slide usa tecnico.png */}
        <div className="absolute inset-0">
          {SLIDES.map((slide, i) => {
            const useSlide = i === 2 && isMobile ? SLIDE_3_MOBILE : slide;
            return (
              <div
                key={`${useSlide.src}-${i}`}
                className="absolute inset-0 transition-opacity duration-1000 ease-out"
                style={{ opacity: i === currentSlide ? 1 : 0 }}
              >
                <Image
                  src={useSlide.src}
                  alt={useSlide.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            );
          })}
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-stone-900/50"
          aria-hidden="true"
        />

        {/* Contenido - en mobile más abajo; espacio bajo el navbar */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-3 sm:px-5 lg:px-7 pt-60 sm:pt-52 lg:pt-56 pb-20">
          <div className="max-w-2xl">
            <p className="text-[#3b9738] font-semibold text-sm uppercase tracking-[0.2em] mb-4 animate-fade-in">
              Equipamiento gastronómico profesional
            </p>
            <h1 className="uppercase text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Tecnología profesional para la gastronomía que crece
            </h1>
            <p className="font-nunito text-lg sm:text-xl text-stone-200/95 leading-relaxed mb-10 max-w-xl">
              Acompañamos a profesionales, comercios e industrias desde el inicio
              y durante todo el desarrollo de su negocio.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("productos")}
                className="inline-flex items-center gap-2 bg-[#3b9738] hover:bg-[#2d7429] text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Ver productos
                <i className="fa fa-arrow-right text-sm" aria-hidden="true" />
              </button>
              <button
                onClick={() => scrollTo("Contacto")}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/30 backdrop-blur-sm transition-all duration-200"
              >
                Contacto
              </button>
            </div>
          </div>
        </div>

        {/* Indicadores del slider */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentSlide ? "w-8 bg-[#3b9738]" : "w-1.5 bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Barra de números */}
      <section
        id="home-stats"
        className="bg-stone-800 border-y border-stone-700/50 py-16 sm:py-20"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 text-center">
            <div>
              <p
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tabular-nums transition-all duration-300"
                style={{ color: "#38fc1b", textShadow: "0 0 20px rgba(56, 252, 27, 0.4)" }}
              >
                +{count25}
              </p>
              <p className="text-stone-400 text-sm sm:text-base mt-2 tracking-wide">
                Años en el mercado
              </p>
            </div>
            <div>
              <p
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tabular-nums transition-all duration-300"
                style={{ color: "#38fc1b", textShadow: "0 0 20px rgba(56, 252, 27, 0.4)" }}
              >
                {count2000}
              </p>
              <p className="text-stone-400 text-sm sm:text-base mt-2 tracking-wide">
                Desde 2000 con vos
              </p>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <p
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tabular-nums transition-all duration-300"
                style={{ color: "#38fc1b", textShadow: "0 0 20px rgba(56, 252, 27, 0.4)" }}
              >
                {count100}%
              </p>
              <p className="text-stone-400 text-sm sm:text-base mt-2 tracking-wide">
                Compromiso con la calidad
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inicio;
