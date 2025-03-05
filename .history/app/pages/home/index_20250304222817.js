'use client'
import React from 'react';
import '../../../globals.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Inicio = () => {
  const [text] = useTypewriter({
    words: [
      'Trabajamos para convertir los sueños en realidad',
      'Acompañamos a los profesionales a cumplir sus objetivos',
      'Desde los inicios hasta el crecimiento de tu negocio'
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/video_home.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Contenido alineado a la izquierda en desktop, centrado en mobile */}
      <div className="main-content z-10 text-left md:text-center xl:text-left sm:text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
          {text}
          <Cursor cursorStyle="|" />
        </h1>
        <p className="text-lg lg:text-xl mb-6 drop-shadow-lg xl:text-left xl:w-[820px] md:w-full md:text-center sm:text-center sm:w-full">
          Acompañamos a los profesionales, comercios e industrias a cumplir sus objetivos con éxito, desde sus inicios y durante todo el desarrollo de su negocio.
        </p>
      </div>

      {/* Flecha hacia abajo */}
      <div className="absolute bottom-10 flex justify-center w-full animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Filtro oscuro para mejorar el contraste */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
    </div>
  );
};

export default Inicio;
