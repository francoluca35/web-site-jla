"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const PHONE = "+54 11-3153-6316";
const PHONE_LINK = "https://wa.me/5491131536316";
const EMAIL = "consultas@jlatecnicos.com.ar";
const ADDRESS = "Merlo (1722), Bs. As.";

const SECTION_IDS = ["inicio", "Sobrenosotros", "Clientes", "productos", "ServicioTecnico", "Contacto"];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
      setActiveSection(id);
    }
  };

  const handleTeLlamamos = () => {
    window.open(PHONE_LINK, "_blank", "noopener,noreferrer");
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollY = window.scrollY + 180;
      let current = "inicio";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) => {
    const base = "px-3 py-2 font-bold text-sm transition-colors rounded ";
    const active = "text-[#3b9738] underline decoration-[#3b9738] decoration-2 underline-offset-4 ";
    const inactive = "text-stone-700 hover:text-[#3b9738] hover:underline hover:decoration-[#3b9738] hover:decoration-2 hover:underline-offset-4 ";
    return base + (activeSection === id ? active : inactive);
  };
  const mobileLinkClass = (id) => {
    const base = "py-4 px-4 text-left font-bold text-lg rounded-xl transition-colors ";
    const active = "text-[#3b9738] underline decoration-[#3b9738] decoration-2 underline-offset-4 ";
    const inactive = "text-stone-800 hover:bg-stone-100 hover:text-[#3b9738] hover:underline hover:decoration-[#3b9738] hover:decoration-2 hover:underline-offset-4 active:bg-stone-200 ";
    return base + (activeSection === id ? active : inactive);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Barra superior: teléfono, email, dirección - verde JLA */}
      <div className="bg-[#3b9738] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between sm:justify-center lg:justify-between gap-3 py-2 text-sm font-medium">
            <a
              href={PHONE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <i className="fa fa-phone-alt" aria-hidden="true" />
              <span className="hidden xs:inline">{PHONE} </span>
              +54 11-3153-6316
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <i className="fa fa-envelope" aria-hidden="true" />
              <span className="hidden sm:inline">{EMAIL}</span>
            </a>
            <span className="flex items-center gap-2 text-white/95">
              <i className="fa fa-map-marker-alt" aria-hidden="true" />
              <span>{ADDRESS}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Barra principal: logo, enlaces, CTA - fondo blanco */}
      <nav
        className={`bg-white border-b border-stone-200 transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo + tagline */}
            <button
              onClick={() => scrollToSection("inicio")}
              className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
              aria-label="Ir al inicio"
            >
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0">
                <Image
                  src="/assets/Logo.png"
                  alt="JLA Equipamientos Gastronómicos"
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <p className="hidden md:block text-stone-800 font-semibold text-left max-w-[200px] lg:max-w-[260px] leading-tight text-sm lg:text-base">
              
              </p>
            </button>

            {/* Menú desktop: enlaces centrados */}
            <ul className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 absolute left-1/2 -translate-x-1/2">
              <li>
                <button
                  onClick={() => scrollToSection("Sobrenosotros")}
                  className={linkClass("Sobrenosotros")}
                >
                  Empresa
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("Clientes")}
                  className={linkClass("Clientes")}
                >
                  Clientes
                </button>
              </li>
              <li className="relative group">
                <button
                  onClick={() => scrollToSection("productos")}
                  className={linkClass("productos") + " inline-flex items-center gap-1"}
                >
                  Productos
                  <i className="fa fa-chevron-down text-xs opacity-70" aria-hidden="true" />
                </button>
                <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-white rounded-lg shadow-lg border border-stone-200 py-1 min-w-[160px]">
                    <button
                      onClick={() => scrollToSection("productos")}
                      className="block w-full text-left px-4 py-2 text-sm text-stone-700 hover:bg-primary/10 hover:text-primary"
                    >
                      Nuestros productos
                    </button>
                    <Link
                      href="/producatalogo"
                      className="block w-full text-left px-4 py-2 text-sm text-stone-700 hover:bg-primary/10 hover:text-primary"
                    >
                      Catálogo
                    </Link>
                  </div>
                </div>
              </li>
             
              <li>
                <button
                  onClick={() => scrollToSection("ServicioTecnico")}
                  className={linkClass("ServicioTecnico")}
                >
                  Servicio Técnico
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("Contacto")}
                  className={linkClass("Contacto")}
                >
                  Contacto
                </button>
              </li>
            </ul>

            {/* Derecha: búsqueda + CTA */}
            <div className="hidden lg:flex items-center gap-4">
           
              <button
                type="button"
                onClick={handleTeLlamamos}
                className="px-5 py-2.5 rounded-full border-2 border-[#0bc105] text-black font-semibold text-sm hover:bg-primary hover:text-gray-700 transition-all duration-200 shadow-sm"
              >
                ¿Te llamamos?
              </button>
            </div>

            {/* Mobile: hamburger animado */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-stone-100 active:scale-95 transition-transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <span className="sr-only">{menuOpen ? "Cerrar menú" : "Abrir menú"}</span>
              <span className="flex flex-col justify-center items-center gap-1.5 w-6">
                <span
                  className={`block h-0.5 w-6 bg-stone-700 rounded-full transition-all duration-300 origin-center ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-stone-700 rounded-full transition-all duration-300 ${
                    menuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-stone-700 rounded-full transition-all duration-300 origin-center ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Overlay del menú móvil */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ease-out ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden="true"
        >
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
          />
          {/* Panel lateral */}
          <div
            className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full pt-16 pb-8 px-6 overflow-y-auto">
              <div className="pb-5 mb-4 border-b border-stone-200 text-center">
                <span className="text-2xl font-bold tracking-tight">
                  <span className="text-[#3b9738]">JLA</span>
                  <span className="text-stone-900"> TECNICOS</span>
                </span>
              </div>
              <nav className="flex flex-col gap-1" aria-label="Menú principal">
                {[
                  { id: "Sobrenosotros", label: "Empresa" },
                  { id: "Clientes", label: "Clientes" },
                  { id: "productos", label: "Productos" },
                  { id: "ServicioTecnico", label: "Servicio Técnico" },
                  { id: "Contacto", label: "Contacto" },
                ].map((item, i) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={mobileLinkClass(item.id)}
                    style={{
                      animation: menuOpen ? `slideIn 0.3s ease-out ${i * 0.04}s both` : "none",
                    }}
                  >
                    {item.label}
                  </button>
                ))}
                <Link
                  href="/producatalogo"
                  onClick={() => setMenuOpen(false)}
                  className="py-4 px-4 text-left text-stone-800 font-bold text-lg rounded-xl hover:bg-stone-100 hover:text-[#3b9738] active:bg-stone-200 transition-colors"
                  style={{
                    animation: menuOpen ? "slideIn 0.3s ease-out 0.2s both" : "none",
                  }}
                >
                  Catálogo
                </Link>
              </nav>
              <div className="mt-auto pt-6 border-t border-stone-200">
                <button
                  onClick={handleTeLlamamos}
                  className="w-full py-4 px-6 rounded-xl bg-[#3b9738] text-white font-semibold text-base hover:bg-[#2d7429] active:scale-[0.98] transition-all shadow-lg"
                >
                  ¿Te llamamos?
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
