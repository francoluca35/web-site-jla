// app/layout.js o app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "JLA Técnicos | Equipamiento Gastronómico Profesional",
  description:
    "Productos industriales para gastronomía. Hornos, anafes, espiedos, acero inoxidable y más. Fabricación nacional con calidad y garantía.",
  keywords:
    "equipamiento gastronómico, hornos industriales, acero inoxidable, hornos convectores, anafes industriales, cámaras de fermentación",
  authors: [{ name: "JLA Técnicos" }],
  creator: "JLA Técnicos",
  openGraph: {
    title: "JLA Técnicos | Equipamiento Gastronómico Profesional",
    description:
      "Explorá nuestro catálogo de hornos, espiedos y productos gastronómicos industriales fabricados en Argentina.",
    url: "https://jlatecnicos.com",
    siteName: "JLA Técnicos",
    images: [
      {
        url: "https://jlatecnicos.com/assets/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Catálogo JLA Técnicos",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JLA Técnicos | Equipamiento Gastronómico",
    description:
      "Productos industriales para gastronomía: hornos, acero inoxidable, espiedos y más.",
    images: ["https://jlatecnicos.com/assets/og-banner.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Venta, mantenimiento y reparación de hornos industriales y panificadoras. Soluciones gastronómicas para empresas."
        ></meta>
        <meta
          name="keywords"
          content="hornos industriales, panificadoras, mantenimiento de hornos, gastronomía industrial, JLA técnicos"
        ></meta>
        <link rel="canonical" href="https://jlatecnicos.com" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400&display=swap"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <title>
          Hornos Industriales y Equipamiento Gastronómico | JLA Técnicos
        </title>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `,
          }}
        />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "JLA Técnicos",
              url: "https://jlatecnicos.com",
              logo: "https://jlatecnicos.com/assets/logo1.png",
              sameAs: [
                "https://www.facebook.com/jlatecnico",
                "https://www.instagram.com/jlaservice",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
