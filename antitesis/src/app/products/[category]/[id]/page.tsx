// src/app/products/[category]/[id]/page.tsx

import { productos, getCategories } from "@/lib/products";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";

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
    <div className="relative z-0 bg-white max-w-7xl mx-auto px-2 sm:px-6 pt-32 pb-10">
      <div className="min-h-screen bg-white text-[#002496] relative">
        <Navbar />

        <div className="max-w-7xl mx-auto px-0 sm:px-6 py-8 sm:py-15 relative z-10">
          {/* Imagen + descripción */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 mb-16 md:mb-32">
            <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
              <Carousel images={producto.galeria} />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h1 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">
                {producto.nombre}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold mb-2">
                {producto.precio}
              </p>
              <p className="text-base sm:text-lg mb-6">{producto.descripcion}</p>
              <button
                disabled
                className="bg-[#002496] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg opacity-60 cursor-not-allowed text-base sm:text-lg"
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
