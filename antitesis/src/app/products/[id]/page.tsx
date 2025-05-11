import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const productos = [
  {
    id: "anillo-2",
    nombre: "Anillo Clásico",
    categoria: "anillos",
    descripcion: "Elegancia atemporal en oro blanco.",
    imagen: "/placeholders/anillo2.jpg",
    precio: "$2,500 MXN",
  },
  {
    id: "anillo-3",
    nombre: "Anillo Minimal",
    categoria: "anillos",
    descripcion: "Simplicidad y sofisticación.",
    imagen: "/placeholders/anillo3.jpg",
    precio: "$1,900 MXN",
  },
  {
    id: "dije-1",
    nombre: "Dije Estelar",
    categoria: "dijes",
    descripcion: "Inspirado en constelaciones antiguas.",
    imagen: "/placeholders/dije1.jpg",
    precio: "$1,200 MXN",
  },
  {
    id: "dije-2",
    nombre: "Dije Corazón",
    categoria: "dijes",
    descripcion: "Un símbolo eterno del amor.",
    imagen: "/placeholders/dije2.jpg",
    precio: "$1,300 MXN",
  },
  {
    id: "dije-3",
    nombre: "Dije Geométrico",
    categoria: "dijes",
    descripcion: "Formas limpias y modernas.",
    imagen: "/placeholders/dije1.jpg",
    precio: "$1,150 MXN",
  },
];

type Params = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: Params) {
  const producto = productos.find((p) => p.id === params.id);

  if (!producto) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-[#002496] px-6 py-20 flex flex-col md:flex-row gap-10 max-w-7xl mx-auto">
      {/* Imagen del producto */}
      <Navbar/>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          width={500}
          height={500}
          className="rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.5)] object-contain max-h-[500px]"
        />
      </div>

      {/* Información del producto */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">{producto.nombre}</h1>
        <p className="text-2xl font-semibold mb-2">{producto.precio}</p>
        <p className="text-lg mb-6">{producto.descripcion}</p>

        {/* Botón deshabilitado */}
        <button
          disabled
          className="bg-[#002496] text-white px-6 py-3 rounded-lg opacity-60 cursor-not-allowed"
        >
          Sin stock
        </button>
      </div>
    </div>
  );
}
