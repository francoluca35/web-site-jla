"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const SERVICIOS = [
  {
    icon: "fa-cog",
    title: "Venta de equipamiento",
    text: "Hornos industriales, amasadoras, cámaras de fermentación, freidoras y líneas completas para panaderías, pastelerías y gastronomía.",
  },
  {
    icon: "fa-wrench",
    title: "Servicio técnico",
    text: "Mantenimiento, reparación y optimización de hornos y equipos para panificación. Repuestos originales y soluciones a medida.",
  },
  {
    icon: "fa-truck",
    title: "Asesoramiento y logística",
    text: "Asesoramos en la elección del equipo adecuado y acompañamos en la instalación y puesta en marcha.",
  },
];

const FOTOS_GALERIA = [
  { src: "/assets/person1.jpg", alt: "Equipo JLA" },
  { src: "/assets/fondo1.png", alt: "Equipamiento industrial" },
  { src: "/assets/fondo2.jpg", alt: "Trabajo y maquinaria" },
  { src: "/assets/tecnico.png", alt: "Servicio técnico" },
];

function AnimatedSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 0.6, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutContent() {
  return (
    <main>
      {/* Hero con imagen de fondo y overlay */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <Image
            src="/assets/fondo1.png"
            fill
            className="object-cover"
            alt=""
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/75" />
        </div>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-[#3b9738] font-semibold text-sm uppercase tracking-[0.25em] mb-4">
            Sobre nosotros
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            JLA Equipamientos Gastronómicos
          </h1>
          <p className="text-stone-300 text-lg sm:text-xl max-w-2xl mx-auto font-nunito">
            Más de 25 años acompañando a profesionales y empresas del sector
            gastronómico.
          </p>
        </motion.div>
      </section>

      {/* Historia: imagen grande + texto */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <AnimatedSection className="order-2 lg:order-1" delay={0.1}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/assets/person1.jpg"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  alt="Equipo JLA en trabajo"
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2" delay={0.2}>
              <p className="text-[#3b9738] font-semibold text-sm uppercase tracking-wider mb-3">
                Nuestra historia
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
                Desde 2000, siempre juntos
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4 font-nunito">
                JLA nace con el objetivo de acercar equipamiento gastronómico de
                calidad a panaderías, pastelerías, restaurantes y locales de
                comida rápida. A lo largo de más de dos décadas nos consolidamos
                como referentes en venta, asesoramiento y servicio técnico
                especializado.
              </p>
              <p className="text-stone-600 leading-relaxed font-nunito">
                Trabajamos día a día para que la tarea de los profesionales del
                sector sea más cómoda y eficiente. Creemos en soluciones que
                permitan elaborar los mejores productos y crecer junto con
                nuestros clientes.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Galería de fotos: 4 imágenes en grid */}
      <section className="py-12 sm:py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10" delay={0}>
            <p className="text-[#3b9738] font-semibold text-sm uppercase tracking-wider mb-2">
              Así trabajamos
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              Nuestro día a día
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {FOTOS_GALERIA.map((img, i) => (
              <AnimatedSection key={img.src} delay={0.1 * i}>
                <div className="relative aspect-[3/4] sm:aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                  <Image
                    src={img.src}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    alt={img.alt}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            <AnimatedSection
              className="relative rounded-2xl overflow-hidden bg-stone-50 border border-stone-200/80 p-8 sm:p-10 hover:shadow-lg transition-shadow duration-300"
              delay={0.1}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3b9738]/5 rounded-bl-full" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-[#3b9738]/10 text-[#3b9738] flex items-center justify-center text-2xl mb-6">
                  <i className="fa fa-bullseye" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-4">
                  Misión
                </h3>
                <p className="text-stone-600 leading-relaxed font-nunito">
                  Ofrecer equipamiento gastronómico profesional e industrial de
                  calidad, con asesoramiento técnico y servicio postventa que
                  permita a nuestros clientes producir con eficiencia y crecer de
                  forma sostenible.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection
              className="relative rounded-2xl overflow-hidden bg-stone-50 border border-stone-200/80 p-8 sm:p-10 hover:shadow-lg transition-shadow duration-300"
              delay={0.2}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3b9738]/5 rounded-bl-full" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-[#3b9738]/10 text-[#3b9738] flex items-center justify-center text-2xl mb-6">
                  <i className="fa fa-eye" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-4">
                  Visión
                </h3>
                <p className="text-stone-600 leading-relaxed font-nunito">
                  Ser la opción preferida de profesionales y empresas del sector
                  gastronómico en Argentina, reconocidos por la calidad de
                  nuestros productos y por un servicio cercano, técnico y
                  confiable.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Servicios con imagen de apoyo */}
      <section className="py-20 sm:py-28 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14" delay={0}>
            <p className="text-[#3b9738] font-semibold text-sm uppercase tracking-wider mb-2">
              Lo que hacemos
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
              Nuestros servicios
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICIOS.map((item, i) => (
              <AnimatedSection key={item.title} delay={0.1 * (i + 1)}>
                <motion.div
                  className="h-full bg-white rounded-2xl p-8 border border-stone-200/80 hover:border-[#3b9738]/30 hover:shadow-xl transition-all duration-300 flex flex-col"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-[#3b9738]/10 text-[#3b9738] flex items-center justify-center text-2xl mb-6">
                    <i className={`fa ${item.icon}`} aria-hidden="true" />
                  </div>
                  <h4 className="text-xl font-bold text-stone-900 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-stone-600 leading-relaxed font-nunito flex-1">
                    {item.text}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA con fondo imagen */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/fondo2.jpg"
            fill
            className="object-cover"
            alt=""
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-stone-900/80" />
        </div>
        <motion.div
          className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Querés saber más?
          </h3>
          <p className="text-stone-300 text-lg mb-10 font-nunito">
            Escribinos o visitanos. Estamos para acompañarte.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5491131536316"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#3b9738] hover:bg-[#2d7429] text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              <FaWhatsapp className="text-xl shrink-0" aria-hidden="true" />
              Contactar por WhatsApp
            </a>
            <Link
              href="/#Contacto"
              className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-[#3b9738] text-white hover:text-[#3b9738] font-semibold px-6 py-3.5 rounded-xl transition-all"
            >
              Ir a contacto
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
