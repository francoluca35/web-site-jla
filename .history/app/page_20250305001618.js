import Image from "next/image";
import Navbar from "./pages/navbar";
import ArrowUp from "./components/ArrowUp";
import Inicio from "./pages/home";
import Nosotros from "./pages/history";
import Producto from "./pages/productos";
import Stecnico from "./pages/Stecnico";
import Clientes from "./pages/Clientes";
import Contacto from "./pages/Contacto";
import Footer from "./pages/Footer";

export default function Home() {
  return (
    <div >
    <Navbar />
    <Inicio />
    <Nosotros />
    <Producto />
    <Clientes />
    <Stecnico />
    <Contacto />
    <ArrowUp/>
    <Footer />
    </div>
  );
}
