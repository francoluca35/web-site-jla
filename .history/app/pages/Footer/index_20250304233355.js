'use client';

import { useState, useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    localidad: '',
    mensaje: ''
  });
  const [scrollY, setScrollY] = useState(0);
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  return (
    <div>
      {/* Sección de Contacto */}
      <div
        ref={bgRef}
        className="relative max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row justify-between items-start"
        style={{
          backgroundImage: "url('/Assets/background-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: `center ${scrollY * 0.3}px`,
          transition: "background-position 0.1s ease-out"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Formulario */}
        <div className="relative w-full lg:w-1/2 z-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">Envíanos tu Consulta</h2>
          <p className="text-gray-300 mb-6 w-[90%]">
            Para todo tipo de preguntas, comentarios e inquietudes; por favor llamanos:
            <a href="tel:+541147508805" className="text-blue-400"> (+54) 11-4750-8805</a>
            {' '}o completá el formulario a continuación
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a2235] text-white py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between px-6">
          {/* Contacto */}
          <div>
            <h2 className="text-lg font-bold mb-4">Contacto</h2>
            <p className="flex items-center mb-2">
              <FaMapMarkerAlt className="text-red-500 mr-2" /> Av. Gral. Lemos 1917, Los Polvorines (1613), Bs. As.
            </p>
            <p className="flex items-center mb-2">
              <FaEnvelope className="text-red-500 mr-2" /> ventas@britohermanos.com.ar
            </p>
            <p className="flex items-center">
              <FaPhoneAlt className="text-red-500 mr-2" /> +54 911 4667-6624
            </p>
            <div className="mt-4">
              <a href="#" className="bg-gray-800 p-3 rounded-lg inline-block">
                <FaFacebookF className="text-white" />
              </a>
            </div>
          </div>
          
          {/* Suscripción */}
          <div className="text-right">
            <h2 className="text-lg font-bold">¡Suscríbase a nuestro newsletter!</h2>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm mt-10">
          &copy; Copyright 2024 <span className="text-white">@deamonDD</span>
        </div>
      </footer>
    </div>
  );
}
