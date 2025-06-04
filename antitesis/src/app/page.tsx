"use client";

import Navbar from "@/components/Navbar";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Scene } from "@/components/Scene";
import { Model } from "@/components/Model";
import EnvironmentCycler from "@/components/EnvironmentCycler";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Home() {
  const isMobile = useIsMobile();

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
        <div className="absolute top-0 left-0 w-full h-full z-[-1]">
          <Canvas
            shadows
            camera={{
              position: isMobile ? [-15, 1, 10] : [0, 1, 18], // Paneo a la izquierda en móvil
              fov: 10,
            }}
            className="!w-full !h-full"
            style={{ position: "absolute", top: 0 }}
          >
            <Scene />
            <Suspense fallback={null}>
              <Model />
            </Suspense>
            <Suspense fallback={null}>
              <EnvironmentCycler />
            </Suspense>
          </Canvas>
        </div>
        <div className="flex justify-between items-center h-full w-250 px-6">
          <div className="flex-[3] flex-col items-end text-right">
            <p className="mt-4 text-base md:text-xl bg-opacity-80 text-shadow-lg/30 px-6 py-2 rounded">
              Joyería Paramétrica
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-shadow-lg/30 px-4 py-2 rounded-md">
              Personaliza tu joya
            </h2>
            <h2 className="text-4xl md:text-6xl font-bold text-shadow-lg/30 px-4 py-2 rounded-md">
              en tiempo real
            </h2>
            
            <Link
              href="/viewer"
              className="inline-block bg-[#002496] text-white px-4 py-3 my-2 rounded-lg text-xl font-semibold shadow hover:bg-blue-900 transition"
            >
              Ir al configurador paramétrico
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
