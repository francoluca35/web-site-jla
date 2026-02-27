import React from "react";
import Navbar from "../pages/navbar";
import Footer from "../pages/Footer";
import ArrowUp from "../components/ArrowUp";
import Clientes from "../pages/Clientes";

export const metadata = {
  title: "Clientes | JLA Equipamientos Gastronómicos",
  description: "Conocé a algunos de los clientes que confían en JLA para su equipamiento gastronómico.",
};

export default function ClientesPage() {
  return (
    <div>
      <Navbar />
      <main className="pt-24 min-h-screen">
        <Clientes />
      </main>
      <ArrowUp />
      <Footer />
    </div>
  );
}
