"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const PHONE = "+54 11-3153-6316";
const PHONE_RAW = "5491131536316";
const EMAIL = "consultas@jlatecnicos.com.ar";
const ADDRESS = "Merlo (1722), Bs. As.";
const WHATSAPP_MSG = "Hola! Me gustaría saber más acerca de sus productos.";
const WHATSAPP_LINK = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
const INSTAGRAM_URL =
  "https://www.instagram.com/jlaservice?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
const FACEBOOK_URL = "https://www.facebook.com/jlatecnico";

const FOOTER_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Empresa" },
  { href: "/producatalogo", label: "Productos" },
  { href: "/servicio-tecnico", label: "Servicio Técnico" },
  { href: "/clientes", label: "Clientes" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer id="site-footer" className="relative z-10 bg-stone-900 text-white">
      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo + descripción */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4" aria-label="Ir al inicio">
              <Image
                src="/assets/Logo.png"
                alt="JLA Equipamientos Gastronómicos"
                width={120}
                height={120}
                className="object-contain"
              />
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              Equipamiento gastronómico profesional. Hornos, panificadoras y soluciones para tu negocio desde 2000.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-stone-400 hover:text-[#3b9738] text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-stone-400 hover:text-[#3b9738] transition-colors"
                >
                  <FaPhoneAlt className="text-[#3b9738] shrink-0 w-4" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-stone-400 hover:text-[#3b9738] transition-colors"
                >
                  <FaEnvelope className="text-[#3b9738] shrink-0 w-4" />
                  <span className="break-all">{EMAIL}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-stone-400">
                <FaMapMarkerAlt className="text-[#3b9738] shrink-0 w-4 mt-0.5" />
                <span>{ADDRESS}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter + redes */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Novedades
            </h3>
            {subscribed ? (
              <p className="text-stone-400 text-sm">
                Gracias por suscribirte. Te enviaremos nuestras novedades.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-stone-800 border border-stone-700 text-white placeholder-stone-500 focus:border-[#3b9738] focus:ring-1 focus:ring-[#3b9738]/30 outline-none transition text-sm"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#3b9738] hover:bg-[#2d7429] text-white font-semibold text-sm transition-colors"
                >
                  Suscribirme
                </button>
              </form>
            )}
            <p className="text-stone-500 text-xs mt-4 mb-3">Seguinos</p>
            <div className="flex gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-[#25D366] text-white flex items-center justify-center text-lg transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-pink-600 text-white flex items-center justify-center text-lg transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-[#1877F2] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-500">
            <p>© {new Date().getFullYear()} JLA Equipamientos Gastronómicos. Todos los derechos reservados.</p>
            <p>
              Desarrollado por{" "}
              <a
                href="https://deamondd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3b9738] hover:text-[#2d7429] font-medium transition-colors"
              >
                @deamonDD
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
