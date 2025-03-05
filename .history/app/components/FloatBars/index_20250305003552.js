'use client'
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

export default function FloatBars() {
  const [hovered, setHovered] = useState(null);

  return (
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
          width={30}
          height={30} 
          alt="Catálogo"
        /> 
        {hovered === 'catalogo' && (
          <span className=" bottom-[-20px] text-xs  text-white px-2 py-1 rounded-md">Catálogo</span>
        )}
      </a>
      
      {/* Botón de WhatsApp */}
      <a 
        href="https://wa.me/549XXXXXXXX" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-green-600 text-white w-16 h-16 flex flex-col items-center justify-center rounded-l-lg shadow-lg hover:bg-green-800 transition-all relative"
        onMouseEnter={() => setHovered('whatsapp')}
        onMouseLeave={() => setHovered(null)}
      >
        <FaWhatsapp className="text-4xl" />
        {hovered === 'whatsapp' && (
          <span className=" bottom-[-20px] text-xs  text-white px-2 py-1 rounded-md">WhatsApp</span>
        )}
      </a>
    </div>
  );
}
