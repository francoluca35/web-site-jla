'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const logos = [
  '/Assets/clientes/cliente-1.png',
  '/Assets/clientes/cliente-3.png',
  '/Assets/clientes/cliente-4.png',
  '/Assets/clientes/cliente-5.png',
  '/Assets/clientes/cliente-6.png',
  '/Assets/clientes/cliente-7.png',
  '/Assets/clientes/cliente-8.png',
];

export default function Clientes() {
  return (
    <div>
      <h2 className="uppercase bg-[#FFF6DA] py-2 text-center text-xl sm:text-2xl md:text-3xl font-semibold text-green-600">
        Algunos de nuestros clientes
      </h2>  

      {/* Contenedor del carrusel con efecto de máscara en los bordes */}
      <div className="relative bg-black py-10 overflow-hidden ">
        <div className="w-full inline-flex flex-nowrap">
          {/* Lista duplicada para efecto infinito */}
          {[...Array(2)].map((_, i) => (
            <motion.ul
              key={i}
              className="flex items-center justify-center md:justify-start space-x-16 animate-infinite-scroll"
              initial={{ x: '0%' }}
              animate={{ x: '-100%' }}
              transition={{
                ease: 'linear',
                duration: 8, 
                repeat: Infinity,
              }}
            >
              {logos.map((logo, index) => (
                <li key={`${i}-${index}`} className="min-w-[120px] md:min-w-[180px]">
                  <Image
                    src={logo}
                    alt="Cliente"
                    width={150}
                    height={100}
                    className="object-contain filter grayscale opacity-75"
                  />
                </li>
              ))}
            </motion.ul>
          ))}
        </div>
      </div>
    </div>
  );
}
