import Image from "next/image";

const Nosotros = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center sm:px-16 px-1 md:px-96 py-10 md:py-24 gap-10 md:gap-16">
      {/* Imagen */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <Image
          src="/Assets/person1.jpg"
          alt="Imagen 1"
          width={500}
          height={500}
          className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 object-cover w-full max-w-sm md:max-w-md h-auto md:h-[500px]"
        />
      </div>

      {/* Texto */}
      <div className="text-left w-full md:w-1/2 max-w-lg">
        <h1 className="text-green-500 text-3xl md:text-5xl font-bold mb-5 leading-tight">
          Desde  2000 <br />
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
