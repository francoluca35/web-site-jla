import React from "react";
import Navbar from "../pages/navbar";
import Footer from "../pages/Footer";
import ArrowUp from "../components/ArrowUp";
import AboutContent from "../pages/about/AboutContent";

export const metadata = {
  title: "Sobre nosotros | JLA Equipamientos Gastronómicos",
  description:
    "Historia, misión, visión y servicios de JLA. Más de 25 años en equipamiento gastronómico para panaderías, pastelerías y comida rápida.",
};

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <AboutContent />
      <ArrowUp />
      <Footer />
    </div>
  );
}
