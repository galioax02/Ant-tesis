"use client";

import Navbar from "@/components/Navbar";
// import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen scroll-smooth">
      {/* Sección 1 */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Video de fondo */}
        <video
          className="absolute pt-10 md:pt-20 top-0 left-0 w-full h-full object-cover z-[-1]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/homeVideo.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>

        {/* Navbar encima */}
        <Navbar />

        {/* Contenido sobre el video */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          {/* <h1 className="text-5xl font-bold bg-blue-900 px-4 py-2 rounded-md">
            Bienvenido a Antítesis
          </h1> */}

          {/* <Link href="/model" scroll={true}>
            <div className="mt-6 px-6 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors cursor-pointer">
              Modelo 3D (Pruebas)
            </div>
          </Link>
          <Link href="/configurator" scroll={true}>
            <div className="mt-6 px-6 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors cursor-pointer">
              Configurator (Pruebas)
            </div>
          </Link> */}
        </div>
      </section>

      {/* Sección 2: Personaliza tu anillo */}
      <section
        id="custom"
        className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/homeRing.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        <div className="flex justify-between items-center h-full w-250 px-6">
          <div className="flex-[3] flex-col items-end text-right">
            <p className="mt-4 text-xl bg-opacity-80 text-shadow-lg/30 px-6 py-2 rounded">
              Próximamente
            </p>
            <h2 className="text-6xl font-bold text-shadow-lg/30 px-4 py-2 rounded-md">
              Anillo
            </h2>
            <h2 className="text-6xl font-bold text-shadow-lg/30 px-4 py-2 rounded-md">
              Paramétrico
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
