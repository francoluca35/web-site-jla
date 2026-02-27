import React from "react";
import Navbar from "../pages/navbar";
import Footer from "../pages/Footer";
import ArrowUp from "../components/ArrowUp";
import Contacto from "../pages/Contacto";

export const metadata = {
  title: "Contacto | JLA Equipamientos Gastronómicos",
  description:
    "Contactanos por WhatsApp, Instagram o visitanos en Merlo, Buenos Aires.",
};

export default function ContactoPage() {
  return (
    <div>
      <Navbar />
      <main className="pt-24 min-h-screen" id="Contacto">
        <Contacto />
      </main>
      <ArrowUp />
      <Footer />
    </div>
  );
}
