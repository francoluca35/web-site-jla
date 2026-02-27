import React from "react";
import Navbar from "../pages/navbar";
import Footer from "../pages/Footer";
import ArrowUp from "../components/ArrowUp";
import ServicioTecnicoContent from "./ServicioTecnicoContent";

export const metadata = {
  title: "Servicio Técnico | JLA Equipamientos Gastronómicos",
  description:
    "Servicio técnico especializado en hornos industriales y panificadoras. Mantenimiento, reparación, repuestos originales. Galería, videos y contacto.",
};

export default function ServicioTecnicoPage() {
  return (
    <div>
      <Navbar />
      <main className="pt-24 min-h-screen">
        <ServicioTecnicoContent />
      </main>
      <ArrowUp />
      <Footer />
    </div>
  );
}
