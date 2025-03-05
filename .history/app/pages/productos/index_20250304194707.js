'use client';

import Image from 'next/image';

export default function Producto() {
  return (
    <div className=' bg-gray-200'>
    <section className="flex flex-col md:flex-row items-center justify-between p-8 rounded-lg  max-w-6xl mx-auto">
      {/* Imagen */}
 

      {/* Contenido */}
      <div className="w-full md:w-1/2 p-6 text-gray-800 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-[#00FF00] mb-4">Productos</h2>
        <p className="text-lg font-semibold mb-2">
          Hornos, equipos, máquinas, carros, bandejas y útiles para panificación y gastronomía.
        </p>
        <p className="text-gray-600 mb-4">
          Nuestro sistema productivo contempla el cumplimiento de los estándares de calidad más exigentes, que incluye etapas de auditoría y estrictos lineamientos en la fabricación de partes.
          Nuestro departamento de Ingeniería para el desarrollo de productos, supervisa cada etapa del proceso.
        </p>
        <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/assets/1.png" 
          width={500}
          height={500}
          alt="Producto"
          className="rounded-lg object-cover"
        />
      </div>
        <button className="bg-[#00FF00] text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition self-start">
          VER PRODUCTOS
        </button>
      </div>
    </section>
    </div>
  );
}