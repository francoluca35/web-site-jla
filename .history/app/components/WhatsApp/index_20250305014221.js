"use client";
import React from "react";

const WhatsApp = () => {
  const phone = "+541131536316";
  const message = "Hola!, Quisiera mas información acerca de los servicios ofrecidos de deamonDD.😃";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-20 rounded-full p-2 shadow-lg transition duration-200 ease-in-out animate-float-slow"
    >
      <img
        src="/assets/whatsapp.png"
        alt="WhatsApp"
        className="w-16 h-16 object-cover"
      />
    </a>
  );
};

export default WhatsApp;
