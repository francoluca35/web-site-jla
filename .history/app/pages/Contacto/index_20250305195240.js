'use client';

import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    localidad: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/enviar-correo`, 
        formData
      );
      
      const data = await response.json();
      
      if (response.ok) {
        alert("Correo enviado exitosamente");
      } else {
        alert("Error al enviar el correo: " + data.message);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un problema al enviar el formulario. Inténtalo nuevamente.");
    }
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center md:bg-[url('/Assets/contacto/fondo-contacto.png')] bg-[url('/Assets/contacto/fondo-contacto-mobile.png')]"
      id='Contacto'
    >
      <div className="w-full max-w-lg p-6 bg-gray-100/30 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 uppercase text-center">Envíanos tu Consulta</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="nombre" placeholder="Nombre y Apellido *" className="w-full p-3 border border-gray-300 rounded-lg bg-gray-200" onChange={handleChange} required />
          <input type="text" name="empresa" placeholder="Empresa" className="w-full p-3 border border-gray-300 rounded-lg bg-gray-200" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email *" className="w-full p-3 border border-gray-300 rounded-lg bg-gray-200" onChange={handleChange} required />
          <input type="tel" name="telefono" placeholder="N° teléfono *" className="w-full p-3 border border-gray-300 rounded-lg bg-gray-200" onChange={handleChange} required />
          <input type="text" name="localidad" placeholder="Localidad *" className="w-full p-3 border border-gray-300 rounded-lg bg-gray-200" onChange={handleChange} required />
          <textarea name="mensaje" placeholder="Mensaje *" className="w-full p-3 border border-gray-300 rounded-lg bg-gray-200 h-32" onChange={handleChange} required></textarea>
          <button type="submit" className="w-full bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700">Enviar</button>
        </form>
      </div>
    </div>
  );
}
