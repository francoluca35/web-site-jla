'use client';

import { useState } from 'react';
import Image from 'next/image';

const categorias = [
  { nombre: 'Línea Calor', subcategorias: ['Hornos Convetores', 'Hornos Pasteleros', 'Hornos Rotativos', 'Anafes', 'Cámaras de Fermentación', 'Tostadoras'] },
  { nombre: 'Máquinas Industriales', subcategorias: [] },
  { nombre: 'Artículos de Aluminio', subcategorias: [] },
  { nombre: 'Artículos de Chapa Aluminizada', subcategorias: [] },
];

const productos = [
  {
    id: 1,
    nombre: 'Horno Pastelero a Gas',
    codigo: '521424',
    descripcion: '1050 x 815',
    imagen: '/assets/horno_pastelero.jpg',
  },
  {
    id: 2,
    nombre: 'Cámara de Fermentación',
    codigo: '5010',
    descripcion: 'Capacidad para 10 bandejas',
    imagen: '/assets/camara_fermentacion.jpg',
  },
];

export default function ProductosCatalogo() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Línea Calor');

  return (
    <div className="bg-gray-100">
      {/* Encabezado con imagen de fondo */}
      <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/fondo-catalogo.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold">PRODUCTOS</h1>
          <p className="text-lg mt-2">CREAMOS PRODUCTOS QUE SE CONVIERTEN EN UN STANDARD DE LA INDUSTRIA</p>
        </div>
      </div>
      
      {/* Línea divisoria */}
      <div className="w-full bg-green-600 py-2"></div>

      {/* Contenido */}
      <div className="max-w-6xl mx-auto py-10 px-6 flex flex-col md:flex-row">
        {/* Categorías */}
        <div className="w-full md:w-1/4 bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold text-blue-700 mb-4">Categorías</h2>
          {categorias.map((categoria, index) => (
            <div key={index}>
              <button
                className={`w-full text-left px-4 py-2 rounded-md transition-all ${
                  categoriaSeleccionada === categoria.nombre ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => setCategoriaSeleccionada(categoria.nombre)}
              >
                {categoria.nombre}
              </button>
              {categoria.subcategorias.length > 0 && categoriaSeleccionada === categoria.nombre && (
                <div className="ml-4 mt-2">
                  {categoria.subcategorias.map((sub, subIndex) => (
                    <p key={subIndex} className="text-sm text-gray-600 py-1">{sub}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Productos */}
        <div className="w-full md:w-3/4 p-4">
          {productos.map((producto) => (
            <div key={producto.id} className="bg-white p-4 rounded-lg shadow-md mb-6 flex items-center border border-gray-200">
              <Image src={producto.imagen} width={150} height={100} alt={producto.nombre} className="rounded-md" />
              <div className="ml-4 w-full">
                <h3 className="text-xl font-semibold text-gray-800">{producto.nombre}</h3>
                <div className="flex justify-between items-center text-gray-600 text-sm border-t border-gray-200 pt-2 mt-2">
                  <span>Código: {producto.codigo}</span>
                  <span>{producto.descripcion}</span>
                </div>
                <div className="flex justify-end mt-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
                    Solicitar Presupuesto
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}