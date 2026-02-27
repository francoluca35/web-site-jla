"use client";

import { useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const MAP_EMBED_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=-58.75%2C-34.68%2C-58.71%2C-34.65&layer=mapnik&marker=-34.6652,-58.7294";

const PHONE = "+54 11-3153-6316";
const PHONE_RAW = "5491131536316";
const EMAIL = "consultas@jlatecnicos.com.ar";
const WHATSAPP_MSG = "Hola! Me gustaría saber más acerca de sus productos y servicios.";
const WHATSAPP_LINK = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
const INSTAGRAM_URL =
  "https://www.instagram.com/jlaservice?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
const FACEBOOK_URL = "https://www.facebook.com/jlatecnico";
const ADDRESS = "Merlo (1722), Bs. As.";

export default function ContactPageContent() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sin backend: abrir cliente de correo con datos pre-rellenados
    const mailto = `mailto:${EMAIL}?subject=Consulta desde la web (${form.nombre})&body=${encodeURIComponent(
      `Nombre: ${form.nombre}\nEmail: ${form.email}\nTeléfono: ${form.telefono}\n\nMensaje:\n${form.mensaje}`
    )}`;
    window.location.href = mailto;
    setEnviado(true);
    setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-4">
          Contactanos
        </h1>
        <p className="text-stone-600 text-lg max-w-2xl mx-auto">
          Escribinos por el formulario, por redes o visitanos en Merlo. Estamos para ayudarte.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Columna izquierda: formulario + datos + redes */}
        <div className="space-y-10">
          {/* Formulario de contacto */}
          <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-stone-900 mb-6">
              Enviá tu consulta
            </h2>
            {enviado ? (
              <p className="text-[#3b9738] font-medium py-4">
                Se abrió tu cliente de correo. Completá el envío desde ahí.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-stone-700 mb-1">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={form.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-[#3b9738] focus:ring-2 focus:ring-[#3b9738]/20 outline-none transition"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-[#3b9738] focus:ring-2 focus:ring-[#3b9738]/20 outline-none transition"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-stone-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-[#3b9738] focus:ring-2 focus:ring-[#3b9738]/20 outline-none transition"
                    placeholder="+54 11 ..."
                  />
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-stone-700 mb-1">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    value={form.mensaje}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-[#3b9738] focus:ring-2 focus:ring-[#3b9738]/20 outline-none transition resize-none"
                    placeholder="Contanos en qué podemos ayudarte..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#3b9738] hover:bg-[#2d7429] text-white font-semibold transition-colors shadow-lg"
                >
                  Enviar consulta
                </button>
              </form>
            )}
          </div>

          {/* Datos de contacto + redes */}
          <div className="bg-stone-900 rounded-2xl p-6 sm:p-8 text-white">
            <h2 className="text-xl font-bold mb-6">Datos de contacto</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#3b9738] text-xl shrink-0" />
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
                  {PHONE}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#3b9738] text-xl shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-green-400 transition">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#3b9738] text-xl shrink-0" />
                <span>{ADDRESS}</span>
              </li>
            </ul>
            <p className="text-stone-400 text-sm mb-4">Seguinos en redes</p>
            <div className="flex gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-stone-700 hover:bg-[#25D366] text-white flex items-center justify-center text-2xl transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-stone-700 hover:bg-pink-600 text-white flex items-center justify-center text-2xl transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-stone-700 hover:bg-[#1877F2] text-white flex items-center justify-center text-xl transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>

        {/* Columna derecha: mapa */}
        <div className="lg:sticky lg:top-28">
          <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-xl bg-stone-100 min-h-[400px] lg:min-h-[500px]">
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              title="Ubicación JLA - Merlo, Buenos Aires"
              className="w-full h-full min-h-[400px] lg:min-h-[500px] block"
            />
          </div>
          <p className="mt-3 flex items-center gap-2 text-stone-600 text-sm">
            <FaMapMarkerAlt className="text-[#3b9738] shrink-0" />
            Taller de Producción — {ADDRESS}
          </p>
        </div>
      </div>
    </div>
  );
}
