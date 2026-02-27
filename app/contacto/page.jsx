import React from "react";
import Navbar from "../pages/navbar";
import Footer from "../pages/Footer";
import ArrowUp from "../components/ArrowUp";
import FloatWhatsApp from "../components/FloatWhatsApp";
import ContactPageContent from "./ContactPageContent";

export const metadata = {
  title: "Contacto | JLA Equipamientos Gastronómicos",
  description:
    "Contactanos por formulario, WhatsApp, Instagram, Facebook o visitanos en Merlo, Buenos Aires.",
};

export default function ContactoPage() {
  return (
    <div>
      <Navbar />
      <main className="pt-28 min-h-screen bg-stone-50" id="Contacto">
        <ContactPageContent />
      </main>
      <ArrowUp />
      <FloatWhatsApp />
      <Footer />
    </div>
  );
}
