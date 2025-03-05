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
    <div className="relative bg-black py-10">
      {/* Título */}
      <h2 className="bg-[#c8b89b] uppercase font-light py-2 text-center text-lg font-semibold text-white">
        Algunos de nuestros clientes
      </h2>

      {/* Carrusel de logos */}
      <div className="flex justify-center py-6">
        <div className="overflow-hidden relative w-[80%]">
          <motion.div
            className="flex space-x-16"
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{
              ease: 'linear',
              duration: 40, // 🔹 Movimiento lento y continuo
              repeat: Infinity,
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="min-w-[120px] md:min-w-[180px]">
                <Image
                  src={logo}
                  alt="Cliente"
                  width={150}
                  height={80}
                  className="object-contain filter grayscale opacity-75"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
