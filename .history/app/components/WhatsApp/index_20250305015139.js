'use client';
import React, { useState } from "react";

const WhatsApp = () => {
  const phone = "+541131536316";
  const [selectedOption, setSelectedOption] = useState("");

  const options = {
    "servicio-tecnico": "Hola, necesito presupuesto para una reparación",
    presupuesto: "Necesito un presupuesto para un horno",
    "pregunta-catalogo": "Me gustaría un horno como el del catálogo"
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    const message = options[option];
    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="fixed bottom-5 right-5 z-20 flex flex-col items-center space-y-2">
        <h1>hola</h1>
      <button
        className="bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 transition-all"
        onClick={() => handleSelect("servicio-tecnico")}
      >
        🛠
      </button>
      <button
        className="bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-600 transition-all"
        onClick={() => handleSelect("presupuesto")}
      >
        💰
      </button>
      <button
        className="bg-gray-800 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:bg-gray-700 transition-all"
        onClick={() => handleSelect("pregunta-catalogo")}
      >
        📖
      </button>
    </div>
  );
};

export default WhatsApp;
