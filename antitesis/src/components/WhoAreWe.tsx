import Image from "next/image";
import React from "react";

const WhoAreWe = () => {
  return (
    <div className="w-full min-h-screen bg-white text-[#002496]">
      {/* 1. Logo + Slogan */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-white">
        <Image
          src="/marca/MarcaAzulNBG.png" // Cambia la ruta según tu logo
          alt="Antitesis Logo"
          width={1080}
          height={1080}
          className="py-10 w-[500px] md:w-[600px] lg:w-[700px] object-contain mb-6"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center">
          El algoritmo interpreta, la identidad define
        </h1>
      </section>

      {/* 2. Grid de 4 imágenes pantalla completa */}
      <section className="w-full h-screen grid grid-cols-2 grid-rows-2 gap-0">
        <div className="relative w-full h-full">
          <Image
            src="/placeholders/Somos1.jpg"
            alt="Imagen 1"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="/placeholders/Somos4.jpg"
            alt="Imagen 2"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="/placeholders/Somos3.jpg"
            alt="Imagen 3"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="/placeholders/Somos2.jpg"
            alt="Imagen 4"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
      </section>

      {/* 3. Misión, Visión, Valores + Imagen vertical */}
      <section className="flex flex-col md:flex-row w-full min-h-screen bg-white">  
        {/* Textos */}
        <div className="w-full md:w-3/5 flex flex-col justify-center px-10 sm:px-20 py-8 sm:py-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">MISIÓN</h2>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg text-justify sm:text-left">
            Nos dedicamos a crear piezas que combinan procesos artesanales y
            tecnológicos, porque creemos que en el mundo actual, la fusión de
            ambos recursos permite lograr diseños únicos y significativos.
            Valoramos la tradición y el detalle del trabajo manual, mientras
            exploramos las posibilidades innovadoras que ofrece la tecnología,
            para ofrecer piezas que no solo embellecen, sino que representan la
            forma de ser de cada persona.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">VISIÓN</h2>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg text-justify sm:text-left">
            Ser de las primeras marcas de joyería a nivel nacional que usa
            modelado paramétrico personalizado por el mismo usuario para crear
            piezas únicas.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">VALORES</h2>
          <p className="text-base sm:text-lg text-justify sm:text-left">
            Conexión, comunidad e innovación.
          </p>
        </div>
        {/* Imagen vertical */}
        <div className="w-full md:w-2/5 h-[600px] md:h-auto">
          <Image
            src="/placeholders/FotosModelo/ATModelo-17.jpg"
            alt="Antitesis Logo"
            width={1080}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default WhoAreWe;
