import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute pt-20 top-0 left-0 w-full h-full object-cover z-[-1]"
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
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold">Bienvenido a Antítesis</h1>
      </div>
    </div>
  );
}
