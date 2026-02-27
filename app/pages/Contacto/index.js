"use client";

import Link from "next/link";
import { FaRunning, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

// Mapa: Merlo, Buenos Aires. Para usar Google Maps, reemplazá esta URL por la que te da Google (Compartir > Insertar un mapa).
const MAP_EMBED_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=-58.75%2C-34.68%2C-58.71%2C-34.65&layer=mapnik&marker=-34.6652,-58.7294";

export default function Contacto() {
  const phone = "+5491131536316";
  const message = "Hola!, Me gustaria saber mas acerca de sus hornos.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section
      className="relative z-10 py-20 px-4 sm:px-6 md:px-12"
      id="Contacto"
    >
      <div className="absolute inset-0 bg-stone-900/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {/* Izquierda: datos y botones */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <h2 className="text-4xl font-bold text-white mb-4">Contactanos</h2>
          <p className="text-stone-200 mb-8 text-sm max-w-md">
            Para más información sobre nuestros trabajos podés seguirnos o
            mandarnos un mensaje a nuestras redes sociales.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 backdrop-blur-sm transition-all duration-200 w-fit"
            >
              Contactanos
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#3b9738] hover:bg-[#2d7429] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl w-fit"
            >
              <FaWhatsapp className="text-xl shrink-0" aria-hidden="true" />
              Contáctanos por WhatsApp
            </a>
          </div>

          {/* Datos de contacto */}
          <div className="mt-10 flex flex-wrap gap-8 sm:gap-12">
            <div className="flex flex-col">
              <div className="w-14 h-14 rounded-full bg-[#3b9738] text-white flex items-center justify-center mb-3 text-2xl">
                <FaRunning />
              </div>
              <h3 className="font-bold text-white text-base mb-1">REDES SOCIALES</h3>
              <p className="text-stone-200 text-sm">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white text-green-300">
                  WhatsApp
                </a>
                <br />
                <a
                  href="https://www.instagram.com/jlaservice?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-green-300"
                >
                  Instagram
                </a>
              </p>
            </div>
            <div className="flex flex-col">
              <div className="w-14 h-14 rounded-full bg-[#3b9738] text-white flex items-center justify-center mb-3 text-2xl">
                <FaMapMarkerAlt />
              </div>
              <h3 className="font-bold text-white text-base mb-1">UBICACIÓN</h3>
              <p className="text-stone-200 text-sm">
                Taller de Producción
                <br />
                Merlo (1722), Bs. As.
              </p>
            </div>
          </div>
        </div>

        {/* Derecha: mapa */}
        <div className="order-1 lg:order-2 rounded-2xl overflow-hidden border border-stone-600/50 shadow-xl bg-stone-800/50 min-h-[320px] lg:min-h-[400px]">
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "320px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación JLA - Merlo, Buenos Aires"
            className="w-full h-full min-h-[320px] lg:min-h-[400px] block"
          />
        </div>
      </div>
    </section>
  );
}
