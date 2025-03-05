'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import productosData from "@/app/data/productos.json"

export default function ProductosCatalogo() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Línea Calor');
  const [subCategoriaSeleccionada, setSubCategoriaSeleccionada] = useState(null);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    const categoria = productosData.categorias.find(cat => cat.nombre === categoriaSeleccionada);
    if (categoria) {
      setProductosFiltrados(productosData.productos.filter(prod => prod.categoria === categoriaSeleccionada && (subCategoriaSeleccionada ? prod.subcategoria === subCategoriaSeleccionada : true)));
    }
  }, [categoriaSeleccionada, subCategoriaSeleccionada]);

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
          <h2 className="text-lg font-semibold text-green-700 mb-4">Categorías</h2>
          {productosData.categorias.map((categoria, index) => (
            <div key={index}>
              <button
                className={`w-full text-left px-4 py-2 rounded-md transition-all ${
                  categoriaSeleccionada === categoria.nombre ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => { setCategoriaSeleccionada(categoria.nombre); setSubCategoriaSeleccionada(null); }}
              >
                {categoria.nombre}
              </button>
              {categoria.subcategorias.length > 0 && categoriaSeleccionada === categoria.nombre && (
                <div className="ml-4 mt-2">
                  {categoria.subcategorias.map((sub, subIndex) => (
                    <button
                      key={subIndex}
                      className={`text-sm text-gray-600 py-1 w-full text-left ${subCategoriaSeleccionada === sub ? 'font-bold' : ''}`}
                      onClick={() => setSubCategoriaSeleccionada(sub)}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Productos */}
        <div className="w-full md:w-3/4 p-4">
          {productosFiltrados.map((producto) => (
            <div key={producto.id} className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center border border-gray-200">
              <div className="w-full md:w-1/3 flex justify-center">
                <Image src={producto.imagen} width={200} height={200} alt={producto.nombre} className="rounded-md" />
              </div>
              <div className="w-full md:w-2/3 p-4">
                <h3 className="text-xl font-semibold text-gray-800">{producto.nombre}</h3>
                <table className="w-full mt-2">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 text-gray-800 font-semibold">Código:</td>
                      <td className="py-2 text-gray-800">{producto.codigo}</td>
                    </tr>
                    {producto.descripcion.split('\n').map((line, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2 text-gray-800 font-semibold">{line.split(':')[0]}:</td>
                        <td className="py-2 text-gray-800">{line.split(':')[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-end mt-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-all">
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
