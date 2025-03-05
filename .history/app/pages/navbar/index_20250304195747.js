'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import imgnav from '@/assets/Logo-pagina.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-800/80' : 'bg-gray-900 bg-opacity-0'}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={imgnav} alt="Logo" width={80} height={80} />
        </div>

        {/* Botón de menú (mobile) */}
        <button
          className="text-white focus:outline-none lg:hidden"
          onClick={toggleMenu}
        >
          <i className={`fa ${menuOpen ? 'fa-times' : 'fa-bars'} text-2xl`} aria-hidden="true"></i>
        </button>

        {/* Menú de navegación */}
        <ul
          className={`lg:flex lg:items-center lg:space-x-6 ${
            menuOpen ? 'block' : 'hidden'
          } absolute lg:static top-24 left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0`}
        >
          <li className="mt-3 lg:mt-0">
            <a href="#" className="hover:text-gray-400">Inicio</a>
          </li>
          <li className="mt-3 lg:mt-0">
            <a href="#about" className="hover:text-gray-400">Empresa</a>
          </li>
          <li className="mt-3 lg:mt-0">
            <a href="#services" className="hover:text-gray-400">Productos</a>
          </li>
          <li className="mt-3 lg:mt-0">
            <a href="#contact" className="hover:text-gray-400">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
