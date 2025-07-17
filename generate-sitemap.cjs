const fs = require("fs");
const path = require("path");

const baseUrl = "https://jlatecnicos.com";

const pages = [
  "",
  "/inicio",
  "/history",
  "/productos",
  "/Stecnico",
  "/Clientes",
  "/Contacto",
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?> 
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
  </url>`
    )
    .join("")}
</urlset>`;

fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), sitemap);

console.log("✅ Sitemap generado en /public/sitemap.xml");
