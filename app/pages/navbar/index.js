"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // cierra el menú en mobile
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-800/80" : "bg-gray-900 bg-opacity-0"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/assets/logo.png" alt="Logo" width={80} height={80} />
        </div>

        {/* Botón de menú (mobile) */}
        <button
          className="text-white focus:outline-none lg:hidden"
          onClick={toggleMenu}
        >
          <i
            className={`fa ${menuOpen ? "fa-times" : "fa-bars"} text-2xl`}
            aria-hidden="true"
          ></i>
        </button>

        <ul
          className={`lg:flex lg:items-center lg:space-x-6 ${
            menuOpen ? "block" : "hidden"
          } absolute lg:static top-[106.45px] left-0 w-full lg:w-auto bg-gray-800/80 lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0`}
        >
          <li className="mt-3 lg:mt-0">
            <button
              onClick={() => scrollToSection("inicio")}
              className="hover:text-gray-400 text-white"
            >
              Inicio
            </button>
          </li>
          <li className="mt-3 lg:mt-0">
            <button
              onClick={() => scrollToSection("Sobrenosotros")}
              className="hover:text-gray-400 text-white"
            >
              Empresa
            </button>
          </li>
          <li className="mt-3 lg:mt-0">
            <button
              onClick={() => scrollToSection("productos")}
              className="hover:text-gray-400 text-white"
            >
              Productos
            </button>
          </li>
          <li className="mt-3 lg:mt-0">
            <button
              onClick={() => scrollToSection("ServicioTecnico")}
              className="hover:text-gray-400 text-white"
            >
              Servicio Técnico
            </button>
          </li>
          <li className="mt-3 lg:mt-0">
            <button
              onClick={() => scrollToSection("Contacto")}
              className="hover:text-gray-400 text-white"
            >
              Contacto
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
