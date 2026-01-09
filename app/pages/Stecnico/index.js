'use client';

import Image from 'next/image';

export default function Nosotros() {
  const phone = "+541131536316";
  const message = "Hola, me comunico por el servicio técnico que ofrecen.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div id='ServicioTecnico' className='bg-gray-100'>
      <section className="flex flex-col md:flex-row items-center justify-between p-8 rounded-lg max-w-6xl mx-auto">
        {/* Imagen a la izquierda en desktop */}
        <div className="w-full md:w-1/2 hidden md:flex justify-center">
          <Image
            src="/assets/tecnico.png"
            width={500}
            height={100}
            alt="Nosotros"
            className="rounded-lg object-cover"
          />
        </div>
        {/* Contenido a la derecha en desktop */}
        <div className="w-full md:w-1/2 p-6 text-gray-800 flex flex-col justify-center">
          <h2 className="font-bold text-green-500 text-4xl mb-4">Servicio Técnico</h2>
          <p className="text-lg font-semibold mb-2">
            Más de 25 años brindando soporte especializado en hornos industriales y panificadoras.
          </p>
          <p className="text-gray-600 mb-4">
            Nos especializamos en el mantenimiento, reparación y optimización de hornos industriales y equipos para panificación. 
            Nuestro objetivo es garantizar que tu maquinaria funcione con la máxima eficiencia, evitando tiempos de inactividad y 
            asegurando la producción continua. Trabajamos con repuestos originales y ofrecemos soluciones adaptadas a las necesidades 
            de panaderías, pastelerías y negocios gastronómicos.
          </p>
          {/* Imagen en mobile entre el texto y el botón */}
          <div className="w-full flex justify-center md:hidden mb-4">
            <Image
              src="/assets/tecnico.png"
              width={500}
              height={500}
              alt="Nosotros"
              className="rounded-lg object-cover"
            />
          </div>
          {/* Botón que abre WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition self-start"
          >
            Solicitar servicio técnico
          </a>
        </div>
      </section>
    </div>
  );
}
