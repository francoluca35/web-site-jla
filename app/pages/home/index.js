"use client";
import React, { useState, useEffect } from "react";
import "../../../globals.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";

const images = [
  "/assets/fondo1.jpg",
  "/assets/fondo2.jpg",
  "/assets/fondo3.jpeg",
];

const Inicio = () => {
  const [text] = useTypewriter({
    words: [
      "JLA EQUIPAMIENTOS GASTRONOMICOS",
      "Potencia tu cocina con tecnología de Calidad.",
      "Soluciones gastronómicas que marcan la diferencia.",
      "Hacemos que tu cocina trabaje por ti.",
    ],
    loop: true,
    delaySpeed: 3000,
  });

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="inicio"
      className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden"
    >
      <div className="sr-only">
        JLA Equipamientos Gastronómicos, hornos industriales, panificadoras
        industriales, cocinas industriales, mantenimiento de hornos, repuestos
        para hornos gastronómicos, servicio técnico de gastronomía, soluciones
        para panaderías y restaurantes industriales, tecnología gastronómica
        profesional.
      </div>
      <h2 className="sr-only">
        Venta y reparación de hornos industriales y panificadoras
      </h2>

      <div className="absolute top-0 left-0 w-full h-full">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className={`absolute transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Contenido alineado a la izquierda en desktop, centrado en mobile */}
      <div className="main-content z-10 text-left md:text-center xl:text-left sm:text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
          {text}
          <Cursor cursorStyle="|" />
        </h1>
        <p className="text-lg lg:text-xl mb-6 drop-shadow-lg xl:text-left xl:w-[820px] md:w-full md:text-center sm:text-center sm:w-full">
          Acompañamos a los profesionales, comercios e industrias a cumplir sus
          objetivos con éxito, desde sus inicios y durante todo el desarrollo de
          su negocio.
        </p>
      </div>

      {/* Filtro oscuro para mejorar el contraste */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
    </div>
  );
};

export default Inicio;
