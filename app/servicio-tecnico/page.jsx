import React from "react";
import Navbar from "../pages/navbar";
import Footer from "../pages/Footer";
import ArrowUp from "../components/ArrowUp";
import Stecnico from "../pages/Stecnico";

export const metadata = {
  title: "Servicio Técnico | JLA Equipamientos Gastronómicos",
  description:
    "Servicio técnico especializado en hornos industriales y panificadoras. Mantenimiento, reparación y repuestos originales.",
};

export default function ServicioTecnicoPage() {
  return (
    <div>
      <Navbar />
      <main className="pt-24 min-h-screen">
        <Stecnico />
      </main>
      <ArrowUp />
      <Footer />
    </div>
  );
}
