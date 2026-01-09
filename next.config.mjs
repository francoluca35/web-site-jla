// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // 🔥 Desactiva la optimización de imágenes (necesario para `output: export`)
  },
  trailingSlash: true,
  reactStrictMode: true,
  eslint: {
    // Deshabilitar ESLint durante el build para evitar problemas de serialización
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
