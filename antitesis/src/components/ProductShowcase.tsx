"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"

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
  const [filtro, setFiltro] = useState("todos");
  const [busqueda, setBusqueda] = useState("");

  const productosFiltrados = productos.filter((p) => {
    const coincideCategoria = filtro === "todos" || p.categoria === filtro;
    const coincideBusqueda = p.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <div className="p-6 max-w-screen-xl bg-white mx-auto h-250">
      <h1 className="text-4xl mt-25 text-[#002496] font-bold mb-6 text-center">
        Catálogo de Productos
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="text-black w-full md:w-1/4 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Buscar por nombre..."
            className="px-4 py-2 rounded-md border border-gray-300"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />

          <div className="flex md:flex-col gap-2">
            {["todos", "anillos", "dijes"].map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-lg border transition ${
                  filtro === cat
                    ? "bg-[#002496] text-white"
                    : "bg-white text-black border-black"
                }`}
                onClick={() => setFiltro(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Galería */}
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosFiltrados.map((producto) => (
            <Link
              key={producto.id}
              href={`${producto.id == "anillo-1" ? "/configurator" : `/products/${producto.id}`}`}
              className="block border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <Image
                src={producto.imagen}
                alt={producto.nombre}
                className={`w-full h-64 object-cover ${
                  producto.categoria === "dijes"
                    ? "object-bottom"
                    : "object-center"
                }`}
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
    </div>
  );
}
