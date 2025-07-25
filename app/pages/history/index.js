"use client";

import Image from "next/image";

export default function Nosotros() {
  return (
    <div className="bg-gray-100">
      <section
        id="Sobrenosotros"
        className="flex flex-col md:flex-row items-center justify-between p-8 rounded-lg max-w-6xl mx-auto"
      >
        {/* Imagen a la izquierda en desktop */}
        <div className="w-full md:w-1/2 hidden md:flex justify-center">
          <Image
            src="/Assets/person1.jpg"
            width={500}
            height={500}
            alt="Nosotros"
            className="rounded-lg object-cover"
          />
        </div>
        {/* Contenido a la derecha en desktop */}
        <div className="w-full md:w-1/2 p-6 text-gray-800 flex flex-col justify-center">
          <h2 className="font-bold text-green-500 text-4xl mb-4">Desde 2000</h2>
          <h2 className="font-bold text-green-500 text-4xl mb-4">
            Siempre Juntos
          </h2>
          <p className="text-lg font-semibold mb-2">
            Han pasado más de 25 años. Hoy sentimos orgullo de haber ubicado a
            Pauna entre las marcas líderes del mercado.
          </p>
          <p className="text-gray-600 mb-4">
            Nos enfocamos en lograr que la tarea de los profesionales de la
            panadería, pastelería, gastronomía, hotelería y food service sea lo
            más cómoda y eficiente posible. Trabajamos juntos en la creación de
            soluciones que los ayuden a elaborar los mejores productos para sus
            clientes.
          </p>
          {/* Imagen en mobile entre el texto y el botón */}
          <div className="w-full flex justify-center md:hidden mb-4">
            <Image
              src="/Assets/1.png"
              width={500}
              height={500}
              alt="Nosotros"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
