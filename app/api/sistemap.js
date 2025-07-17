import { NextResponse } from "next/server";
import productosData from "@/app/data/productos.json";

export async function GET() {
  const baseUrl = "https://jlatecnicos.com";

  let urls = [];

  // Página principal
  urls.push(`${baseUrl}/`);

  // Agregar categorías
  productosData.categorias.forEach((categoria) => {
    urls.push(`${baseUrl}/catalogo/${encodeURIComponent(categoria.nombre)}`);
    categoria.subcategorias.forEach((sub) => {
      urls.push(
        `${baseUrl}/catalogo/${encodeURIComponent(
          categoria.nombre
        )}/${encodeURIComponent(sub)}`
      );
    });
  });

  // Agregar productos
  productosData.productos.forEach((producto) => {
    urls.push(`${baseUrl}/producto/${producto.id}`);
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
  </url>
`
  )
  .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
