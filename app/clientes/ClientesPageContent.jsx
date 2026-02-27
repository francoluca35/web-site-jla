"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const LOGOS = [
  "/assets/clientes/cliente-1.png",
  "/assets/clientes/cliente-2.png",
  "/assets/clientes/cliente-3.png",
  "/assets/clientes/cliente-4.jpg",
  "/assets/clientes/cliente-9.jpg",
  "/assets/clientes/cliente-6.png",
  "/assets/clientes/cliente-8.jpg",
  "/assets/clientes/cliente-7.png",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 * i },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function LogoCard({ src, alt }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={itemVariants}
      className="group relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm border border-stone-200/80 shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-center justify-center min-h-[160px] md:min-h-[200px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#3b9738]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      <motion.div
        className="relative z-10 p-6 flex items-center justify-center w-full h-full"
        animate={{ scale: hovered ? 1.03 : 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <Image
          src={src}
          alt={alt}
          width={140}
          height={100}
          className={`object-contain transition-all duration-300 ${
            hovered ? "grayscale-0 opacity-100" : "grayscale opacity-70"
          }`}
        />
      </motion.div>
    </motion.div>
  );
}

export default function ClientesPageContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg, rgba(59,151,56,0.04)_0%, transparent_50%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-px bg-gradient-to-r from-transparent via-[#3b9738]/30 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.35em] text-[#3b9738] font-semibold mb-4"
          >
            Confían en nosotros
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 tracking-tight mb-6"
          >
            Nuestros clientes
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="origin-center w-16 h-0.5 bg-[#3b9738] mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-stone-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Empresas y emprendedores que eligen equipamiento gastronómico de calidad. Desde 2000 construyendo confianza.
          </motion.p>
        </div>
      </section>

      {/* Grid de logos */}
      <section ref={ref} className="relative pb-24 md:pb-32 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {LOGOS.map((src, index) => (
              <LogoCard
                key={src}
                src={src}
                alt={`Cliente ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>

        {/* Línea de cierre */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-stone-500 text-sm md:text-base font-medium">
            +25 años acompañando a panaderías, pastelerías y cocinas industriales
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-stone-300" />
            <span className="text-[#3b9738] font-semibold">JLA Técnicos</span>
            <span className="w-8 h-px bg-stone-300" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
