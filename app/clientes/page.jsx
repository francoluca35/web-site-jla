import React from "react";
import Navbar from "../pages/navbar";
import Footer from "../pages/Footer";
import ArrowUp from "../components/ArrowUp";
import FloatWhatsApp from "../components/FloatWhatsApp";
import ClientesPageContent from "./ClientesPageContent";

export const metadata = {
  title: "Clientes | JLA Equipamientos Gastronómicos",
  description: "Conocé a algunos de los clientes que confían en JLA para su equipamiento gastronómico.",
};

export default function ClientesPage() {
  return (
    <div>
      <Navbar />
      <main className="pt-28 min-h-screen bg-stone-50" id="Clientes">
        <ClientesPageContent />
      </main>
      <ArrowUp />
      <FloatWhatsApp />
      <Footer />
    </div>
  );
}
