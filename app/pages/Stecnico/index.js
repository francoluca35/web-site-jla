'use client';

import Image from 'next/image';
import Link from 'next/link';

const PHONE = '+541131536316';
const WHATSAPP_MESSAGE = 'Hola, me comunico por el servicio técnico que ofrecen.';

const PUNTOS = [
  'Reparación y mantenimiento de hornos y panificadoras',
  'Repuestos originales · Respuesta rápida',
  '+25 años de experiencia en equipamiento gastronómico',
];

export default function Stecnico({ variant = 'summary' }) {
  const whatsappLink = `https://wa.me/${PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  const isFull = variant === 'full';

  return (
    <section
      id="ServicioTecnico"
      className="relative z-10 scroll-mt-24 bg-white"
    >
      <div className="max-w-6xl ml-2 sm:ml-2 lg:ml-16 mr-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Imagen: lado izquierdo en desktop */}
          <div className="w-full lg:w-[55%] flex justify-center order-1 lg:order-1">
            <div className="relative w-full max-w-2xl aspect-[4/3] flex items-center justify-center bg-stone-50/80 rounded-xl">
              <Image
                src="/assets/tecnico.png"
                alt="Técnico especializado en hornos y panificadoras"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain p-2"
              />
            </div>
          </div>

          {/* Contenido: lado derecho en desktop */}
          <div className="w-full lg:w-[45%] text-center lg:text-left order-2 lg:order-2">
            <p className="text-[#3b9738] font-semibold text-sm uppercase tracking-[0.25em] mb-3">
              Servicio técnico especializado
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight mb-5">
              Tu equipo no puede parar.
              <br />
              <span className="text-[#3b9738]">Nosotros tampoco.</span>
            </h2>
            <p className="text-stone-600 text-lg sm:text-xl leading-relaxed mb-6 max-w-xl">
              Mantenimiento, reparación y repuestos originales para hornos industriales y panificadoras. Respuesta rápida y trabajo con garantía.
            </p>

            <ul className="space-y-2 mb-8 text-stone-600 text-base sm:text-lg">
              {PUNTOS.map((texto, i) => (
                <li key={i} className="flex items-center gap-3 justify-center lg:justify-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3b9738]/15 flex items-center justify-center">
                    <i className="fa fa-check text-[#3b9738] text-xs" aria-hidden="true" />
                  </span>
                  {texto}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#3b9738] hover:bg-[#2d7429] text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                <i className="fab fa-whatsapp text-lg" aria-hidden="true" />
                Solicitar servicio técnico
              </a>
              <Link
                href="/servicio-tecnico"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-stone-800 font-semibold text-sm px-5 py-2.5 rounded-lg border border-stone-300 hover:border-[#3b9738] hover:text-[#3b9738] transition-all duration-200"
              >
                Conocer más
                <i className="fa fa-arrow-right text-sm" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {isFull && (
          <div className="mt-14 pt-10 border-t border-stone-200 text-center">
            <p className="text-stone-600 text-base max-w-2xl mx-auto">
              Trabajamos con panaderías, pastelerías y negocios gastronómicos. Garantizamos que tu maquinaria funcione con la máxima eficiencia y minimizamos los tiempos de inactividad.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
