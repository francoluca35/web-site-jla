import Image from "next/image";

const Nosotros = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-10 md:p-36">
      {/* Sección de imágenes superpuestas */}
      <div className="relative w-full md:w-1/2 max-w-md flex justify-center mb-10 md:mb-0">
        <Image
          src="/Assets/person1.jpg"
          alt="Imagen 1"
          width={500}
          height={5000}
          className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 rotate-[-3deg]"
        />
      </div>

      {/* Sección de texto */}
      <div className="text-left max-w-lg md:ml-10">
        <h1 className="text-green-500 text-4xl md:text-5xl mb-5">
          Desde 2000
          <br />
          <span className="text-green-500">Siempre Juntos</span>
        </h1>
        <p className="text-lg leading-8 text-black mb-5">
          Han pasado más de 25 años. Hoy sentimos orgullo de haber ubicado a
          Pauna entre las marcas líderes del mercado.
          <br />
          <br />
          Nos enfocamos en lograr que la tarea de los profesionales de la
          panadería, pastelería, gastronomía, hotelería y food service sea lo
          más cómoda y eficiente posible. Trabajamos juntos en la creación de
          soluciones que los ayuden a elaborar los mejores productos para sus
          clientes.
        </p>
        <button className="bg-green-500 text-white py-2 px-6 rounded-md text-lg hover:bg-green-600 transition">
          Conocé más
        </button>
      </div>
    </div>
  );
};

export default Nosotros;
