'use client';

import { useState } from 'react';
import axios from 'axios';

export default function Contacto() {
  const [activeField, setActiveField] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    empresa: "",
    email: "",
    mensaje: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/enviar-correo`, 
        formData
      );
  
      if (response.status === 200) {
        setSuccess(true);
        setError("");
        setFormData({
          nombre: "",
          apellido: "",
          empresa: "",
          email: "",
          mensaje: "",
        });
      } else {
        setError("Hubo un error al enviar el mensaje");
      }
    } catch (err) {
      setError("Hubo un error al enviar el mensaje");
    } finally {
      setLoading(false);
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
          <button type="submit" className="w-full bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700" disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </button>
          {success && <p className="text-green-400 text-center mt-2">Mensaje enviado con éxito</p>}
          {error && <p className="text-red-400 text-center mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
}
