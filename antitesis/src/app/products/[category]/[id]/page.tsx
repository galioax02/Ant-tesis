// src/app/products/[category]/[id]/page.tsx

import { productos, getCategories } from "@/lib/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ScrollGallery from "@/components/ScrollGallery";

export async function generateStaticParams() {
  const params = [];
  for (const category of getCategories()) {
    for (const producto of productos.filter((p) => p.categoria === category)) {
      params.push({ category, id: producto.id });
    }
  }
  return params;
}

export default async function ProductDetail({
  params,
}: {
  params: { category: string; id: string };
}) {
  const { category, id } = params;
  const producto = productos.find(
    (p) => p.categoria === category && p.id === id
  );
  if (!producto) return notFound();

  return (
    <div className="relative z-0 bg-white max-w-7xl mx-auto px-6 pt-32 pb-10">
      <div className="min-h-screen bg-white text-[#002496] relative">
        <div className="absolute inset-0 h-[300vh] z-0 pointer-events-none">
          <ScrollGallery images={producto.galeria} />
        </div>
        <Navbar />

        <div className="max-w-7xl mx-auto px-6 py-15 relative z-10">
          {/* Imagen + descripción */}
          <div className="flex flex-col md:flex-row gap-10 mb-32">
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <Image
                src={producto.imagen}
                alt={producto.nombre}
                width={500}
                height={500}
                className={
                  producto.categoria === "anillos"
                    ? "shadow object-center object-cover max-h-[500px]"
                    : "shadow object-bottom object-cover max-h-[500px]"
                }
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h1 className="text-4xl font-bold mb-4">{producto.nombre}</h1>
              <p className="text-2xl font-semibold mb-2">{producto.precio}</p>
              <p className="text-lg mb-6">{producto.descripcion}</p>
              <button
                disabled
                className="bg-[#002496] text-white px-6 py-3 rounded-lg opacity-60 cursor-not-allowed"
              >
                Sin stock
              </button>
            </div>
          </div>

          {/* Galería fullscreen activada por scroll */}
        </div>
      </div>
      
    </div>
  );
}
