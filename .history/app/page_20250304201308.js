import Image from "next/image";
import Navbar from "./pages/navbar";
import Inicio from "./pages/home";
import Nosotros from "./pages/history";
import Producto from "./pages/productos";
import Stecnico from "./pages/Stecnico";
export default function Home() {
  return (
    <div >
    <Navbar />
    <Inicio />
    <Nosotros />
    <Producto />
    <Stecnico />
    </div>
  );
}
