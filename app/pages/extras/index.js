import React from "react";

function wsp() {
  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      <a
        href="/catalogo"
        target="_blank"
        style={{
          display: "block",
          marginBottom: "10px",
          textDecoration: "none",
          color: "#003366",
        }}
      >
        📄 Catálogo
      </a>
      <a
        href="/manuales"
        target="_blank"
        style={{
          display: "block",
          marginBottom: "10px",
          textDecoration: "none",
          color: "#003366",
        }}
      >
        📘 Manuales
      </a>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        style={{ display: "block", textDecoration: "none", color: "#25D366" }}
      >
        💬 WhatsApp
      </a>
    </div>
  );
}

export default wsp;
