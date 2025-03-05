import { FaWhatsapp, FaBook } from 'react-icons/fa';
import Image from 'next/image';

export default function FloatBars() {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-50">
      {/* Botón de Catálogo */}
      <a 
        href="/catalogo.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-gray-800 text-white w-16 h-16  flex items-center justify-center rounded-l-lg shadow-lg hover:bg-gray-700 transition-all"
      >
       <Image 
        src="/assets/ic_catalogo.png"
         className="text-4xl"
         width={50}
         height={50} /> 
      </a>
      
      {/* Botón de WhatsApp */}
      <a 
        href="https://wa.me/549XXXXXXXX" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-green-600 text-white w-16 h-16 flex items-center justify-center rounded-l-lg shadow-lg hover:bg-green-800 transition-all"
      >
        <FaWhatsapp className="text-4xl" />
      </a>
    </div>
  );
}
