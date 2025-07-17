// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // 🔥 Desactiva la optimización de imágenes (necesario para `output: export`)
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
