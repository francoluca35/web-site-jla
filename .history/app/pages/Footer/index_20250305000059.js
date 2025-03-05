'use client';

import { useState, useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

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
  const [email, setEmail] = useState('');
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

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Gracias por suscribirse');
    window.location.reload();
  };

  return (
    <div>
      {/* Footer */}
      <footer className="bg-[#1a2235] text-white py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 relative">
          {/* Contacto */}
          <div>
            <h2 className="text-lg font-bold mb-4">Contacto</h2>
            <p className="flex items-center mb-2">
              <FaMapMarkerAlt className="text-green-500 mr-2" /> Av. Gral. Lemos 1917, Los Polvorines (1613), Bs. As.
            </p>
            <p className="flex items-center mb-2">
              <FaEnvelope className="text-green-500 mr-2" /> serviciotecnicojla@jlatec.com.ar
            </p>
            <p className="flex items-center">
              <FaPhoneAlt className="text-green-500 mr-2" /> +54 911 4667-6624
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-gray-600 p-3 rounded-lg inline-block">
                <FaFacebookF className="text-green-500  text-xl" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-600 p-3 rounded-lg inline-block">
                <FaWhatsapp className="text-green-500 text-xl" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-600 p-3 rounded-lg inline-block">
                <FaInstagram className="text-green-500 text-xl" />
              </a>
            </div>
          </div>
          
          {/* Logo (oculto en mobile y tablet) */}
          <div className="hidden lg:block">
            <Image src="/Assets/Logo.png" alt="Logo" width={150} height={50} />
          </div>
          
          {/* Suscripción */}
          <div className="text-right">
            <h2 className="text-lg font-bold mr-7">¡Suscríbase a nuestro newsletter!</h2>
            <form onSubmit={handleSubscribe} className="mt-4">
              <input 
                type="email" 
                placeholder="Ingrese su email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 rounded-l-lg text-black"
                required
              />
              <button type="submit" className="bg-green-500 px-4 py-2 rounded-r-lg">Suscribirse</button>
            </form>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm mt-10">
          &copy; Copyright 2024 <span className="text-white">@deamonDD</span>
        </div>
      </footer>
    </div>
  );
}
