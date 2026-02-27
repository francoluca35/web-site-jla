'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const PHONE = '+5491131536316';
const PHONE_RAW = '5491131536316';
const EMAIL_SERVICIO = 'serviciotecnicojla@jlatec.com.ar';
const WHATSAPP_SERVICIO = 'Hola, me comunico por el servicio técnico. Necesito información o presupuesto.';

const SERVICIOS = [
  { titulo: 'Mantenimiento preventivo y correctivo', descripcion: 'Revisiones programadas y reparaciones para hornos industriales y panificadoras.', icono: 'fa-wrench' },
  { titulo: 'Reparación de equipos', descripcion: 'Diagnóstico y solución de fallas en hornos rotativos, cámaras de fermentación y amasadoras.', icono: 'fa-tools' },
  { titulo: 'Repuestos originales', descripcion: 'Trabajamos solo con repuestos originales y de primera calidad.', icono: 'fa-cogs' },
  { titulo: 'Asesoramiento técnico', descripcion: 'Te acompañamos en la optimización y en la planificación del mantenimiento.', icono: 'fa-headset' },
];

const GALERIA = [
  '/assets/tecnico.png',
  '/assets/fondo1.png',
  '/assets/fondo2.jpg',
  '/assets/carrousel/hornorotativoindustrial.png',
  '/assets/carrousel/horno-muestra.png',
  '/assets/carrousel/espiedoecologico.png',
];

const VIDEOS = [
  { id: 'dQw4w9WgXcQ', titulo: 'Trabajos realizados' },
  { id: 'dQw4w9WgXcQ', titulo: 'Nuestro taller' },
];

function useFade(once = true) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '-60px' });
  return { ref, inView };
}

export default function ServicioTecnicoContent() {
  const [lightbox, setLightbox] = useState(null);
  const parallaxInstances = useRef([]);
  const whatsappLink = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(WHATSAPP_SERVICIO)}`;
  const telLink = `tel:${PHONE}`;
  const mailLink = `mailto:${EMAIL_SERVICIO}?subject=Consulta%20Servicio%20Técnico`;

  const a = useFade();
  const b = useFade();
  const c = useFade();
  const d = useFade();
  const e = useFade();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    let mounted = true;
    const t = setTimeout(() => {
      import('simple-parallax-js/vanilla').then(({ default: SimpleParallax }) => {
        if (!mounted) return;
        const bandImg = document.querySelector('[data-parallax-band]');
        if (bandImg) {
          const p = new SimpleParallax(bandImg, {
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

  const go = (delta) => setLightbox((i) => (i === null ? null : (i + delta + GALERIA.length) % GALERIA.length));
  const close = () => setLightbox(null);

  return (
    <div className="bg-stone-50">
      {/* Capa fija: una sola imagen con parallax que se desliza hacia abajo al scrollear; se ve en Respuesta rápida y al llegar a Videos */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <img
          data-parallax-band
          src="/assets/fondo1.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ minHeight: '200%', minWidth: '100%', top: '-25%', left: 0 }}
        />
      </div>

      {/* ——— HERO (sin parallax) ——— */}
      <section className="relative z-10 min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/fondo2.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/65" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#7dd87a] font-semibold text-xs uppercase tracking-[0.3em] mb-4">Servicio técnico</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Cuidamos tu equipamiento
            <br />
            <span className="text-stone-300">para que te enfoques en crecer</span>
          </h1>
          <p className="text-stone-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            +25 años en hornos industriales y panificadoras. Mantenimiento, reparación y repuestos originales.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-4 rounded-full shadow-xl transition-all"
            >
              <i className="fab fa-whatsapp text-xl" aria-hidden="true" />
              Solicitar servicio
            </a>
            <a href="#servicios" className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-8 py-4 rounded-full border border-white/30 backdrop-blur-sm transition-all">
              Ver servicios
              <i className="fa fa-arrow-down text-sm" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ——— INTRO ——— */}
      <section className="relative z-10 py-20 sm:py-28 bg-white" ref={a.ref}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={a.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-14 items-center"
          >
            <div>
              <span className="text-7xl sm:text-8xl font-bold text-[#3b9738]/20 tabular-nums">+25</span>
              <p className="text-[#3b9738] font-semibold text-sm uppercase tracking-widest mt-2">Años en el mercado</p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">Experiencia que se nota</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Trabajamos con panaderías, pastelerías y negocios gastronómicos. Objetivo: que tu maquinaria funcione al máximo con el mínimo tiempo de inactividad.
              </p>
              <p className="text-stone-500 leading-relaxed">Repuestos originales, diagnóstico preciso y trabajo con garantía.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ——— Respuesta rápida: se ve la imagen de la capa fija (parallax) con overlay ——— */}
      <section className="relative z-10 h-[50vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 bg-stone-900/55 pointer-events-none" />
        <p className="relative z-10 text-white/95 text-center text-lg sm:text-xl font-medium max-w-2xl px-4">
          Respuesta rápida · Repuestos originales · +25 años de experiencia
        </p>
      </section>

      {/* ——— SERVICIOS (fondo sólido tapa la capa fija) ——— */}
      <section id="servicios" className="relative z-10 py-20 sm:py-28 bg-stone-50 scroll-mt-24" ref={b.ref}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={b.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-[#3b9738] font-semibold text-sm uppercase tracking-widest mb-2">Qué hacemos</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">Servicios que ofrecemos</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {SERVICIOS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={b.inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-lg hover:border-[#3b9738]/30 transition-all"
              >
                <span className="inline-flex w-12 h-12 rounded-xl bg-[#3b9738]/10 text-[#3b9738] items-center justify-center text-lg mb-4">
                  <i className={`fa ${s.icono}`} aria-hidden="true" />
                </span>
                <h3 className="font-bold text-stone-900 text-lg mb-2">{s.titulo}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{s.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— GALERÍA (fondo sólido tapa la capa fija) ——— */}
      <section className="relative z-10 py-20 sm:py-28 bg-white" ref={c.ref}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={c.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-[#3b9738] font-semibold text-sm uppercase tracking-widest mb-2">Nuestro trabajo</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">Galería</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={c.inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {GALERIA.map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightbox(i)}
                className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 focus:outline-none focus:ring-2 focus:ring-[#3b9738] focus:ring-offset-2 group"
              >
                <Image src={src} alt="" fill sizes="33vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                  <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <i className="fa fa-search-plus text-stone-800" aria-hidden="true" />
                  </span>
                </div>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ——— VIDEOS: se ve la misma imagen de la capa fija (ya deslizada) con overlay oscuro ——— */}
      <section className="relative z-10 py-20 sm:py-28 text-white" ref={d.ref}>
        <div className="absolute inset-0 bg-stone-900/80 pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={d.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-[#7dd87a] font-semibold text-sm uppercase tracking-widest mb-2">Videos</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Conocé más</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {VIDEOS.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={d.inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <p className="font-semibold text-stone-200 mb-2">{v.titulo}</p>
                <div className="relative aspect-video rounded-xl overflow-hidden bg-stone-800">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section className="relative z-10 py-20 sm:py-28 bg-stone-100" ref={e.ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={e.inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl font-bold text-stone-900 mb-3">Comunicate con nosotros</h2>
          <p className="text-stone-600 mb-10">Pedí presupuesto o consultá por mantenimiento y reparación.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-6 py-3.5 rounded-full shadow-lg transition-all">
              <i className="fab fa-whatsapp text-xl" aria-hidden="true" /> WhatsApp
            </a>
            <a href={telLink} className="inline-flex items-center gap-2 bg-[#3b9738] hover:bg-[#2d7429] text-white font-semibold px-6 py-3.5 rounded-full shadow-lg transition-all">
              <i className="fa fa-phone-alt" aria-hidden="true" /> Llamar
            </a>
            <a href={mailLink} className="inline-flex items-center gap-2 bg-stone-700 hover:bg-stone-800 text-white font-semibold px-6 py-3.5 rounded-full transition-all">
              <i className="fa fa-envelope" aria-hidden="true" /> Email
            </a>
            <Link href="/#Contacto" className="inline-flex items-center gap-2 border-2 border-stone-300 hover:border-[#3b9738] text-stone-700 hover:text-[#3b9738] font-semibold px-6 py-3.5 rounded-full transition-all">
              Ver contacto <i className="fa fa-arrow-right text-sm" aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-8 text-stone-500 text-sm">{EMAIL_SERVICIO} · +54 11 3153-6316</p>
        </motion.div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Galería"
        >
          <button type="button" onClick={close} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center" aria-label="Cerrar">
            <i className="fa fa-times" aria-hidden="true" />
          </button>
          <button type="button" onClick={(ev) => { ev.stopPropagation(); go(-1); }} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center" aria-label="Anterior">
            <i className="fa fa-chevron-left" aria-hidden="true" />
          </button>
          <button type="button" onClick={(ev) => { ev.stopPropagation(); go(1); }} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center" aria-label="Siguiente">
            <i className="fa fa-chevron-right" aria-hidden="true" />
          </button>
          <div className="relative max-w-4xl w-full aspect-video rounded-lg overflow-hidden" onClick={(ev) => ev.stopPropagation()}>
            <Image src={GALERIA[lightbox]} alt="" fill className="object-contain" />
          </div>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">{lightbox + 1} / {GALERIA.length}</p>
        </div>
      )}
    </div>
  );
}
