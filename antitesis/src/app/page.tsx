import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold rounded-lg bg-blue-900 px-4 py-2 rounded">
          Bienvenido a Antítesis
        </h1>
        <span className="mt-5 bg-blue-900 rounded-lg text-white text-xl text-center px-5 max-w-2xl">
          Somos una empresa innovadora que redefine la experiencia digital.
        </span>

        {/* Botón para redirigir a la página del modelo 3D */}
        <Link href="/model">
          <div className="mt-10 px-6 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors">
            Ver Modelo 3D
          </div>
        </Link>
      </div>
    </div>
  );
}
