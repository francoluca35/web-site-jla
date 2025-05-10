"use client";

import Image from "next/image";
import { FaRunning, FaMapMarkerAlt } from "react-icons/fa";

export default function Contacto() {
  const phone = "+5491131536316";
  const message = "Hola!, Me gustaria saber mas acerca de sus hornos.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section
      className="bg-gray-900/10 py-20 px-6 md:px-12 text-center"
      id="Contacto"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="w-24 h-24 mb-6 rounded-full overflow-hidden">
          <Image
            src="/Assets/logo.png"
            alt="Contacto"
            width={100}
            height={100}
            className="object-cover w-full h-full"
          />
        </div>

        <h2 className="text-4xl font-bold text-gray-900 mb-4">Contactanos</h2>

        <p className="text-gray-600 mb-2 text-sm max-w-md">
          Para más información sobre nuestros trabajos podés seguirnos o
          mandarnos un mensaje a nuestras redes sociales.
        </p>
      </div>

      {/* Íconos de contacto - CENTRADOS */}
      <div className="flex flex-wrap justify-center gap-12 mt-16">
        {/* Item 1 */}
        <div className="flex flex-col items-center w-[240px]">
          <div className="w-20 h-20 rounded-full bg-green-500 text-white flex items-center justify-center mb-4 text-3xl">
            <FaRunning />
          </div>
          <h3 className="font-bold text-gray-900 text-lg mb-1">
            REDES SOCIALES
          </h3>
          <p className="text-gray-600  text-sm">
            <a
              href={whatsappLink}
              target="_blank"
              className="hover:text-gray-800"
            >
              WhatsApp
            </a>
            <br />
            <a
              href="https://www.instagram.com/jlaservice?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              className="hover:text-gray-800"
            >
              Instagram
            </a>
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center w-[240px]">
          <div className="w-20 h-20 rounded-full bg-green-500 text-white flex items-center justify-center mb-4 text-3xl">
            <FaMapMarkerAlt />
          </div>
          <h3 className="font-bold text-gray-900 text-lg mb-1">UBICACIÓN</h3>
          <p className="text-gray-600 text-sm">
            Taller de Producción
            <br />
            Merlo, Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </section>
  );
}
