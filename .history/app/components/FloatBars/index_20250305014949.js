'use client';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

export default function FloatBars() {
  const [hovered, setHovered] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-50">
        {/* Botón de Catálogo */}
        <a 
          href="/catalogo.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gray-800 text-white w-16 h-16 flex flex-col items-center justify-center rounded-l-lg shadow-lg hover:bg-gray-700 transition-all relative"
          onMouseEnter={() => setHovered('catalogo')}
          onMouseLeave={() => setHovered(null)}
        >
          <Image 
            src="/assets/ic_catalogo.png"
            width={25}
            height={30} 
            alt="Catálogo"
          /> 
          {hovered === 'catalogo' && (
            <span className="bottom-[-20px] text-xs text-white px-2 py-1 rounded-md">Catálogo</span>
          )}
        </a>
        
        {/* Botón de WhatsApp */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-600 text-white w-16 h-16 flex flex-col items-center justify-center rounded-l-lg shadow-lg hover:bg-green-800 transition-all relative"
          onMouseEnter={() => setHovered('whatsapp')}
          onMouseLeave={() => setHovered(null)}
        >
          <FaWhatsapp className="text-4xl" />
          {hovered === 'whatsapp' && (
            <span className="bottom-[-20px] text-xs text-white px-2 py-1 rounded-md">WhatsApp</span>
          )}
        </button>
      </div>
      
      {/* Modal de WhatsApp */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold mb-4">Selecciona una opción</h2>
            <button
              className="bg-green-500 text-white px-4 py-2 mb-2 rounded-lg w-full hover:bg-green-600"
              onClick={() => window.open('https://wa.me/549XXXXXXXX?text=' + encodeURIComponent('Hola, necesito presupuesto para una reparación'), '_blank')}
            >
              🛠 Servicio Técnico
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 mb-2 rounded-lg w-full hover:bg-blue-600"
              onClick={() => window.open('https://wa.me/549XXXXXXXX?text=' + encodeURIComponent('Necesito un presupuesto para un horno'), '_blank')}
            >
              💰 Presupuesto
            </button>
            <button
              className="bg-gray-800 text-white px-4 py-2 rounded-lg w-full hover:bg-gray-700"
              onClick={() => window.open('https://wa.me/549XXXXXXXX?text=' + encodeURIComponent('Me gustaría un horno como el del catálogo'), '_blank')}
            >
              📖 Pregunta de Catálogo
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}