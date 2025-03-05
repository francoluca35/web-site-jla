import { FaWhatsapp, FaBook } from 'react-icons/fa';

export default function FloatBars() {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-50">
      {/* Botón de Catálogo */}
      <a 
        href="/catalogo.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-gray-800 text-white w-20 h-20  flex items-center justify-center rounded-lg shadow-lg hover:bg-gray-700 transition-all"
      >
        <FaBook className="text-5xl" />
      </a>
      
      {/* Botón de WhatsApp */}
      <a 
        href="https://wa.me/549XXXXXXXX" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-gray-800 text-white w-20 h-20 flex items-center justify-center rounded-lg shadow-lg hover:bg-green-600 transition-all"
      >
        <FaWhatsapp className="text-5xl" />
      </a>
    </div>
  );
}
