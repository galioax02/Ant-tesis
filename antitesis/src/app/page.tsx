"use client";

import Navbar from "@/components/HomeNavbar";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Scene } from "@/components/Scene";
import { Model } from "@/components/Model";
import EnvironmentCycler from "@/components/EnvironmentCycler";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <div className="w-full min-h-screen scroll-smooth">
      {/* Sección 1 */}
      <Navbar />
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* Imagen de fondo */}
        <Image
          src="/placeholders/FotosModelo/ATModelo-7.jpg"
          alt="Modelo con piezas de joyería"
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
          width={0}
          height={0}
          sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
        />

        {/* Logo siempre abajo */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center pb-10 sm:pb-16 z-10">
          <Image
            src="/marca/TituloBlancoNBG.png"
            alt="Logo"
            className="w-48 md:w-64 lg:w-128"
            width={0}
            height={0}
            sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 320px"
          />
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
            <h1 className="text-4xl md:text-6xl font-bold text-shadow-lg/1 0 px-4 rounded-md">
              Anillo Paramétrico
            </h1>
            <h2 className="mt-2 text-base md:text-4xl bg-opacity-80 text-shadow-lg/1 0 px-6 py-2 rounded">
              Personaliza tu anillo
            </h2>

            <Link
              href="/viewer"
              className="inline-block bg-[#002496] text-white text-md px-4 py-3 mx-5 my-10 rounded-lg font-semibold shadow hover:bg-blue-900 transition"
            >
              Personalizar
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
