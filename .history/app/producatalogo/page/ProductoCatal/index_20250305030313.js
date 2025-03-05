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
    imagen: '/assets/Catalogo/horno-1.jpeg',
  },
  {
    id: 2,
    nombre: 'Cámara de Fermentación',
    codigo: '5010',
    descripcion: 'Capacidad para 10 bandejas',
    imagen: '/assets/Catalogo/hornos-2.jpeg',
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
            <div key={producto.id} className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center border border-gray-200">
              <div className="w-full md:w-1/3 flex justify-center">
                <Image src={producto.imagen} width={200} height={200} alt={producto.nombre} className="rounded-md" />
              </div>
              <div className="w-full md:w-2/3 p-4">
                <h3 className="text-xl font-semibold text-gray-800">{producto.nombre}</h3>
                <table className="w-full mt-2">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left text-gray-600">CÓDIGO</th>
                      <th className="text-left text-gray-600">DESCRIPCIÓN</th>
                      <th className="text-left text-gray-600">PRESUPUESTO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 text-gray-800">{producto.codigo}</td>
                      <td className="py-2 text-gray-800">{producto.descripcion}</td>
                      <td className="py-2 text-gray-800">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
                          Solicitar Presupuesto
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}