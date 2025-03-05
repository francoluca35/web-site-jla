'use client';

import { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const phone = "+5491131536316";
  const message = "Hola!, Me gustaria saber mas acerca de sus hornos.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const handleSubscribe = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  const refreshPage = () => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.location.reload();
      }
    }, 500); 
  }; 
 

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 relative">
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
            <a href={whatsappLink} target='_blank' className="bg-gray-700 hover:bg-green-500 p-3 rounded-full transition-all">
              <FaWhatsapp className="text-white text-lg" />
            </a>
            <a href="https://www.instagram.com/jlaservice?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' className="bg-gray-700 hover:bg-green-500 p-3 rounded-full transition-all">
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
              className="p-3 lg:rounded-l-lg text-black w-full lg:w-auto borderborder-green-400 focus:outline-none"
              required
            />
            <button type="submit" className="bg-green-500 hover:bg-green-600 px-6 py-3 mt-2 lg:mt-0 lg:rounded-r-lg w-full lg:w-auto transition-all font-semibold">Suscribirse</button>
          </form>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-10">
      © 2025 Powered by <span className="text-green-400 font-semibold"><a href='https://deamondd.com' target="_blank" rel="noopener noreferrer">@deamonDD</a> </span> All rights reserved
      </div>

      {/* Modal de suscripción */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold mb-2">¡Gracias por suscribirse!</h2>
            <p className="text-gray-700">Recibirá nuestras novedades en su correo electrónico.</p>
            <button onClick={() => { setShowModal(false); refreshPage(); }} className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Cerrar</button>
          </div>
        </div>
      )}
    </footer>
  );
}
