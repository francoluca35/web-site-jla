import Navbar from "./pages/navbar";
import ArrowUp from "./components/ArrowUp";
import FloatWhatsApp from "./components/FloatWhatsApp";
import Inicio from "./pages/home";
import Nosotros from "./pages/history";
import Producto from "./pages/productos";
import Stecnico from "./pages/Stecnico";
import Clientes from "./pages/Clientes";
import Contacto from "./pages/Contacto";
import Footer from "./pages/Footer";
import Head from "next/head";
import HomeParallaxLayer from "./components/HomeParallaxLayer";

export default function Home() {
  return (
    <>
      <Head>
        <title>JLA Técnicos - Equipamiento Gastronómico Industrial</title>
        <meta
          name="description"
          content="JLA Tecnicos, Hornos industriales, panificadoras, freidoras, amasadoras y mucho más. Soluciones gastronómicas profesionales para cocinas industriales y panaderías."
        />
        <meta
          name="keywords"
          content="hornos industriales, panificadoras, freidoras industriales, amasadoras, gastronomía industrial, equipamiento gastronómico"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="JLA Técnicos" />
        <meta
          property="og:description"
          content="Equipamiento gastronómico profesional e industrial. Desde 2000 trabajando con vos."
        />
        <meta
          property="og:image"
          content="https://jlatecnicos.com/assets/imagen-seo.jpg"
        />
        <meta property="og:url" content="https://jlatecnicos.com" />
      </Head>
      <HomeParallaxLayer>
        <div>
          <Navbar />
          <Inicio />
          <Nosotros />
          <Producto />
          <Clientes />
          <Stecnico />
          <Contacto />
          <ArrowUp />
          <FloatWhatsApp />
          <Footer />
        </div>
      </HomeParallaxLayer>
    </>
  );
}
