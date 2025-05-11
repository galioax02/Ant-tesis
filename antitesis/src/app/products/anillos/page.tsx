"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const productos = [
  {
    id: "anillo-1",
    nombre: "Anillo Paramétrico",
    categoria: "anillos",
    descripcion: "Diseño único basado en parámetros generativos.",
    imagen: "/placeholders/anillo1.jpg",
  },
  {
    id: "anillo-2",
    nombre: "Anillo Clásico",
    categoria: "anillos",
    descripcion: "Elegancia atemporal en oro blanco.",
    imagen: "/placeholders/anillo2.jpg",
  },
  {
    id: "anillo-3",
    nombre: "Anillo Minimal",
    categoria: "anillos",
    descripcion: "Simplicidad y sofisticación.",
    imagen: "/placeholders/anillo3.jpg",
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
            href={`${
              producto.id == "anillo-1"
                ? "/configurator"
                : `/products/${producto.id}`
            }`}
            className="block border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-64 object-cover object-center"
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
