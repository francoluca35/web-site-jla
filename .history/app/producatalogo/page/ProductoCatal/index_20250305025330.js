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

export default function ProductoCatalolo() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Línea Calor');

  return (
    <div className="bg-gray-600 py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado */}
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">PRODUCTOS</h1>
        <p className="text-center text-gray-600 mb-8">
          CREAMOS PRODUCTOS QUE SE CONVIERTEN EN UN STANDARD DE LA INDUSTRIA
        </p>

        {/* Categorías */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Categorías</h2>
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
              <div key={producto.id} className="bg-white p-4 rounded-lg shadow-md mb-6 flex items-center">
                <Image src={producto.imagen} width={150} height={100} alt={producto.nombre} className="rounded-md" />
                <div className="ml-4 w-full">
                  <h3 className="text-xl font-semibold text-gray-800">{producto.nombre}</h3>
                  <p className="text-gray-600 text-sm">Código: {producto.codigo}</p>
                  <p className="text-gray-600 text-sm">{producto.descripcion}</p>
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
    </div>
  );
}