'use client';

import { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Gracias por suscribirse');
    window.location.reload();
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start px-8">
        {/* Contacto */}
        <div className="w-full lg:w-1/3 text-center lg:text-left mb-6 lg:mb-0">
          <h2 className="text-xl font-semibold mb-4 text-green-400">Contacto</h2>
          <p className="flex items-center justify-center lg:justify-start mb-2">
            <FaMapMarkerAlt className="text-green-400 mr-2" /> Av. Gral. Lemos 1917, Los Polvorines (1613), Bs. As.
          </p>
          <p className="flex items-center justify-center lg:justify-start mb-2">
            <FaEnvelope className="text-green-400 mr-2" /> serviciotecnicojla@jlatec.com.ar
          </p>
          <p className="flex items-center justify-center lg:justify-start">
            <FaPhoneAlt className="text-green-400 mr-2" /> +54 911 4667-6624
          </p>
          <div className="mt-4 flex justify-center lg:justify-start space-x-4">
            <a href="#" className="bg-gray-700 hover:bg-green-500 p-3 rounded-full transition-all">
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-green-500 p-3 rounded-full transition-all">
              <FaWhatsapp className="text-white text-lg" />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-green-500 p-3 rounded-full transition-all">
              <FaInstagram className="text-white text-lg" />
            </a>
          </div>
        </div>

        {/* Logo */}
        <div className="hidden lg:flex w-1/3 justify-center">
          <Image src="/Assets/Logo.png" alt="Logo" width={160} height={60} className="opacity-90" />
        </div>

        {/* Suscripción */}
        <div className="w-full lg:w-1/3 text-center lg:text-right">
          <h2 className="text-xl font-semibold text-green-400">¡Suscríbase a nuestro newsletter!</h2>
          <form onSubmit={handleSubscribe} className="mt-4 flex flex-col lg:flex-row items-center lg:justify-end">
            <input 
              type="email" 
              placeholder="Ingrese su email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 lg:rounded-l-lg text-black w-full lg:w-auto border-2 border-green-400 focus:outline-none"
              required
            />
            <button type="submit" className="bg-green-500 hover:bg-green-600 px-6 py-3 mt-2 lg:mt-0  lg:rounded-r-lg w-full lg:w-auto transition-all font-semibold">Suscribirse</button>
          </form>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-10">
        &copy; Copyright 2024 <span className="text-green-400 font-semibold">@deamonDD</span>
      </div>
    </footer>
  );
}
