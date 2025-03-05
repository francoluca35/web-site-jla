'use client';

import { useState, useEffect } from 'react';
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
    <footer className="bg-[#1a2235] text-white py-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-6">
        {/* Contacto */}
        <div className="w-full lg:w-1/3 text-center lg:text-left mb-6 lg:mb-0">
          <h2 className="text-lg font-bold mb-4">Contacto</h2>
          <p className="flex items-center justify-center lg:justify-start mb-2">
            <FaMapMarkerAlt className="text-green-500 mr-2" /> Av. Gral. Lemos 1917, Los Polvorines (1613), Bs. As.
          </p>
          <p className="flex items-center justify-center lg:justify-start mb-2">
            <FaEnvelope className="text-green-500 mr-2" /> serviciotecnicojla@jlatec.com.ar
          </p>
          <p className="flex items-center justify-center lg:justify-start">
            <FaPhoneAlt className="text-green-500 mr-2" /> +54 911 4667-6624
          </p>
          <div className="mt-4 flex justify-center lg:justify-start space-x-4">
            <a href="#" className="bg-gray-800 hover:bg-gray-600 p-3 rounded-lg inline-block">
              <FaFacebookF className="text-green-500 text-xl" />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-600 p-3 rounded-lg inline-block">
              <FaWhatsapp className="text-green-500 text-xl" />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-600 p-3 rounded-lg inline-block">
              <FaInstagram className="text-green-500 text-xl" />
            </a>
          </div>
        </div>

        {/* Logo */}
        <div className="hidden lg:block w-1/3 flex justify-center">
          <Image src="/Assets/Logo.png" alt="Logo" width={150} height={50} />
        </div>

        {/* Suscripción */}
        <div className="w-full lg:w-1/3 text-center lg:text-right">
          <h2 className="text-lg font-bold">¡Suscríbase a nuestro newsletter!</h2>
          <form onSubmit={handleSubscribe} className="mt-4 flex flex-col lg:flex-row items-center lg:justify-end">
            <input 
              type="email" 
              placeholder="Ingrese su email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded-lg lg:rounded-l-lg text-black w-full lg:w-auto"
              required
            />
            <button type="submit" className="bg-green-500 px-4 py-2 mt-2 lg:mt-0 rounded-lg lg:rounded-r-lg w-full lg:w-auto">Suscribirse</button>
          </form>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-10">
        &copy; Copyright 2024 <span className="text-white">@deamonDD</span>
      </div>
    </footer>
  );
}