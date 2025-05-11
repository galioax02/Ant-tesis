"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar"

const productos = [
  {
    id: "dije-1",
    nombre: "Dije Estelar",
    categoria: "dijes",
    descripcion: "Inspirado en constelaciones antiguas.",
    imagen: "/placeholders/dije1.jpg",
  },
  {
    id: "dije-2",
    nombre: "Dije Corazón",
    categoria: "dijes",
    descripcion: "Un símbolo eterno del amor.",
    imagen: "/placeholders/dije2.jpg",
  },
  {
    id: "dije-3",
    nombre: "Dije Geométrico",
    categoria: "dijes",
    descripcion: "Formas limpias y modernas.",
    imagen: "/placeholders/dije1.jpg",
  },
];

export default function ProductShowcase() {
  return (
    <div className="p-6 bg-white mx-auto h-250">
      <Navbar />
      <h1 className="text-4xl mt-30 text-[#002496] font-bold mb-6 text-center">
        Catálogo de Productos
      </h1>

      {/* Galería */}
      <div className="w-full px-7.5 py-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
        {productos.map((producto) => (
          <Link
            key={producto.id}
            href={`/products/${producto.id}`}
            className="block border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-64 object-cover object-bottom"
            />
            <div className="p-4">
              <h2 className="text-xl text-black font-semibold mb-1">
                {producto.nombre}
              </h2>
              <p className="text-sm text-gray-600">{producto.descripcion}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
