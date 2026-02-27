"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import productosData from "@/app/data/productos.json";

const GREEN = "#3b9738";
const GREEN_HOVER = "#2d7429";

function parseDescripcion(descripcion) {
  if (!descripcion || typeof descripcion !== "string") return [];
  return descripcion
    .split("\n")
    .map((line) => {
      const idx = line.indexOf(":");
      if (idx < 0) return null;
      return [line.slice(0, idx).trim(), line.slice(idx + 1).trim()];
    })
    .filter(Boolean);
}

export default function ProductosCatalogo() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [subCategoriaSeleccionada, setSubCategoriaSeleccionada] =
    useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [productoGaleria, setProductoGaleria] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const enviarPresupuestoPorWhatsapp = (producto) => {
    const telefono = "541131536316";
    const mensaje = `Hola, quisiera solicitar presupuesto para el siguiente producto:\n\n*${producto.nombre}*\nCódigo: ${producto.codigo}\nDescripción: ${producto.descripcion}\n\nGracias!`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    let list = productosData.productos;
    if (categoriaSeleccionada) {
      list = list.filter(
        (prod) =>
          prod.categoria === categoriaSeleccionada &&
          (subCategoriaSeleccionada
            ? prod.subcategoria === subCategoriaSeleccionada
            : true)
      );
    }
    const term = busqueda.trim().toLowerCase();
    if (term) {
      list = list.filter(
        (p) =>
          p.nombre.toLowerCase().includes(term) ||
          (p.codigo && p.codigo.toLowerCase().includes(term))
      );
    }
    setProductosFiltrados(list);
  }, [categoriaSeleccionada, subCategoriaSeleccionada, busqueda]);

  const openGaleria = (producto) => {
    setProductoGaleria(producto);
    setCurrentIndex(0);
    setModalAbierto(true);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero */}
      <section className="relative bg-stone-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 to-stone-800" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url(/assets/fondo-catalogo.jpg)" }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <p
            className="text-sm font-semibold uppercase tracking-[0.2em] mb-3"
            style={{ color: "#7dd87a" }}
          >
            Catálogo
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Productos que marcan el estándar
          </h1>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            Equipamiento gastronómico profesional. Hornos, acero inoxidable y
            soluciones para tu negocio.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Sidebar categorías */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-stone-200/80 p-4 sticky top-24">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-500 mb-4">
                Categorías
              </h2>
              <nav className="space-y-1">
                <button
                  onClick={() => {
                    setCategoriaSeleccionada(null);
                    setSubCategoriaSeleccionada(null);
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    categoriaSeleccionada === null
                      ? "text-white"
                      : "text-stone-700 hover:bg-stone-100"
                  }`}
                  style={
                    categoriaSeleccionada === null
                      ? { backgroundColor: GREEN }
                      : {}
                  }
                >
                  Todo el catálogo
                </button>
                {productosData.categorias.map((categoria) => (
                  <div key={categoria.nombre}>
                    <button
                      onClick={() => {
                        setCategoriaSeleccionada(categoria.nombre);
                        setSubCategoriaSeleccionada(null);
                      }}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        categoriaSeleccionada === categoria.nombre
                          ? "text-white"
                          : "text-stone-700 hover:bg-stone-100"
                      }`}
                      style={
                        categoriaSeleccionada === categoria.nombre
                          ? { backgroundColor: GREEN }
                          : {}
                      }
                    >
                      {categoria.nombre}
                    </button>
                    {categoria.subcategorias?.length > 0 &&
                      categoriaSeleccionada === categoria.nombre && (
                        <div className="ml-3 mt-1 pl-3 border-l border-stone-200 space-y-0.5">
                          <button
                            onClick={() => setSubCategoriaSeleccionada(null)}
                            className={`block w-full text-left py-1.5 text-sm rounded ${
                              !subCategoriaSeleccionada
                                ? "font-semibold text-stone-900"
                                : "text-stone-600 hover:text-stone-900"
                            }`}
                          >
                            Todas
                          </button>
                          {categoria.subcategorias.map((sub) => (
                            <button
                              key={sub}
                              onClick={() => setSubCategoriaSeleccionada(sub)}
                              className={`block w-full text-left py-1.5 text-sm rounded ${
                                subCategoriaSeleccionada === sub
                                  ? "font-semibold text-stone-900"
                                  : "text-stone-600 hover:text-stone-900"
                              }`}
                            >
                              {sub}
                            </button>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          {/* Grid de productos */}
          <main className="flex-1 min-w-0">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-3">
              <label htmlFor="buscar-producto" className="sr-only">
                Buscar por nombre o código
              </label>
              <input
                id="buscar-producto"
                type="search"
                placeholder="Buscar por nombre o código..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full sm:max-w-xs px-4 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent"
              />
              <span className="text-sm text-stone-500">
                {productosFiltrados.length} producto
                {productosFiltrados.length !== 1 ? "s" : ""}
              </span>
            </div>
            {productosFiltrados.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm ring-1 ring-stone-200/80 p-12 text-center text-stone-500">
                No se encontraron productos. Probá otro filtro o búsqueda.
              </div>
            ) : (
              <ul className="grid sm:grid-cols-2 gap-6">
                {productosFiltrados.map((producto) => {
                  const items = parseDescripcion(producto.descripcion);
                  return (
                    <li
                      key={producto.id}
                      className="bg-white rounded-xl shadow-sm ring-1 ring-stone-200/80 overflow-hidden flex flex-col hover:shadow-md transition-shadow"
                    >
                      <div className="relative aspect-[4/3] bg-stone-100">
                        <Image
                          src={producto.imagen || "/assets/Catalogo/default.jpg"}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          alt={producto.nombre}
                          className="object-contain p-4"
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="text-lg font-bold text-stone-900 mb-1">
                          {producto.nombre}
                        </h3>
                        <p className="text-xs font-medium text-stone-500 mb-3">
                          Código {producto.codigo}
                        </p>
                        {items.length > 0 && (
                          <dl className="space-y-1.5 mb-4 flex-1">
                            {items.slice(0, 4).map(([label, value], i) => (
                              <div
                                key={i}
                                className="flex gap-2 text-sm flex-wrap"
                              >
                                <dt className="text-stone-500 font-medium shrink-0">
                                  {label}:
                                </dt>
                                <dd className="text-stone-700">{value}</dd>
                              </div>
                            ))}
                          </dl>
                        )}
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-stone-100">
                          <button
                            onClick={() =>
                              enviarPresupuestoPorWhatsapp(producto)
                            }
                            className="inline-flex items-center gap-2 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors hover:opacity-95"
                            style={{
                              backgroundColor: GREEN,
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor =
                                GREEN_HOVER;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = GREEN;
                            }}
                          >
                            Pedir presupuesto
                          </button>
                          {producto.galeria && producto.galeria.length > 0 && (
                            <button
                              onClick={() => openGaleria(producto)}
                              className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 text-sm font-semibold px-4 py-2.5 rounded-lg border border-stone-300 hover:border-stone-400 transition-colors"
                            >
                              Ver galería
                            </button>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </main>
        </div>
      </div>

      {/* Modal galería */}
      {modalAbierto && productoGaleria && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/90 backdrop-blur-sm"
          onClick={() => setModalAbierto(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Galería de imágenes"
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] flex items-center justify-center px-12 py-16"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalAbierto(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Cerrar"
            >
              <span className="text-2xl leading-none">&times;</span>
            </button>

            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev === 0
                    ? productoGaleria.galeria.length - 1
                    : prev - 1
                )
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-2xl transition-colors"
              aria-label="Anterior"
            >
              ‹
            </button>

            <div className="relative w-full h-[70vh] flex items-center justify-center">
              <Image
                src={productoGaleria.galeria[currentIndex]}
                alt={`${productoGaleria.nombre} - imagen ${currentIndex + 1}`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>

            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev === productoGaleria.galeria.length - 1
                    ? 0
                    : prev + 1
                )
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-2xl transition-colors"
              aria-label="Siguiente"
            >
              ›
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {productoGaleria.galeria.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === currentIndex
                      ? "bg-white"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Ir a imagen ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
