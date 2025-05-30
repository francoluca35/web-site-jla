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
