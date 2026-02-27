"use client";

import { FaWhatsapp } from "react-icons/fa";

const PHONE_RAW = "5491131536316";
const MESSAGE = "Hola! Me gustaría saber más acerca de sus productos y servicios.";
const WHATSAPP_LINK = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(MESSAGE)}`;

export default function FloatWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-0 right-0 mr-4 mb-4 w-16 h-16 rounded-full bg-green-500 shadow-lg hover:bg-stone-800 transition-all flex items-center justify-center text-white"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}
