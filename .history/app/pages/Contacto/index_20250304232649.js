'use client';

import { useState, useEffect, useRef } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    localidad: '',
    mensaje: ''
  });
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY;
        bgRef.current.style.backgroundPosition = `center ${scrollY * 0.5}px`;
      }
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
    <div ref={bgRef} className="relative max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row justify-between items-start"
      style={{
        backgroundImage: "url('/Assets/contacto/fondo-contacto.png')",
        backgroundSize: "cover",
        backgroundPosition: "center 0px",
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
        <form onSubmit={handleSubmit} className="bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-md w-[90%]">
          <input type="text" name="nombre" placeholder="Nombre y Apellido *" className="w-full p-3 mb-4 border border-gray-600 rounded-lg bg-gray-800 text-white" onChange={handleChange} required />
          <input type="text" name="empresa" placeholder="Empresa" className="w-full p-3 mb-4 border border-gray-600 rounded-lg bg-gray-800 text-white" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email *" className="w-full p-3 mb-4 border border-gray-600 rounded-lg bg-gray-800 text-white" onChange={handleChange} required />
          <input type="tel" name="telefono" placeholder="N° teléfono *" className="w-full p-3 mb-4 border border-gray-600 rounded-lg bg-gray-800 text-white" onChange={handleChange} required />
          <input type="text" name="localidad" placeholder="Localidad *" className="w-full p-3 mb-4 border border-gray-600 rounded-lg bg-gray-800 text-white" onChange={handleChange} required />
          <textarea name="mensaje" placeholder="Mensaje *" className="w-full p-3 mb-4 border border-gray-600 rounded-lg bg-gray-800 text-white h-32" onChange={handleChange} required></textarea>
          <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700">Enviar</button>
        </form>
      </div>
      
      {/* Información y mapa */}
      <div className="relative w-full lg:w-1/2 flex flex-col items-start z-10">
        <h2 className="text-2xl font-semibold mb-4 text-white">Oficinas y Fábrica</h2>
        <p className="text-gray-300 mb-6">
          Ntra. Sra. de la Merced 3645<br />
          Caseros (B1678AOS), Buenos Aires, Argentina
        </p>
        <div className="w-[90%] h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13135.589670979474!2d-58.56957486520307!3d-34.6036913102565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb83b8a9b1e3d%3A0x33b1f2b6d95391ea!2sCaseros%2C%20Buenos%20Aires%20Province!5e0!3m2!1sen!2sar!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}