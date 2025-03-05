'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const logos = [
  '/Assets/clientes/cliente-1.png',
  '/Assets/clientes/cliente-2.png',
  '/Assets/clientes/cliente-3.png',
  '/Assets/clientes/cliente-4.png',
  '/Assets/clientes/cliente-5.png',
  '/Assets/clientes/cliente-6.png',
  '/Assets/clientes/cliente-7.png',
  '/Assets/clientes/cliente-8.png',
];

export default function Clientes() {
  return (
    <div className="bg-gray-800 py-6">
      <h2 className="text-center text-xl font-semibold text-gray-700 mb-4">
        Algunos de nuestros clientes
      </h2>
      <div className="overflow-hidden relative w-full">
        <motion.div
          className="flex space-x-12"
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{
            ease: 'linear',
            duration: 5,
            repeat: Infinity,
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="min-w-[150px] md:min-w-[200px]">
              <Image src={logo} alt="Cliente" width={150} height={80} className="object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
