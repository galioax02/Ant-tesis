
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { getProductsByCategory, getCategories } from "@/lib/products";

export async function generateStaticParams() {
  return getCategories().map((category) => ({ category }));
}

export default async function ProductShowcase({ params }: { params: { category: string } }) {
  const productosFiltrados = getProductsByCategory(params.category);

  return (
    <div className="p-6 bg-white mx-auto h-250">
      <Navbar />
      <h1 className="text-4xl mt-30 text-[#002496] font-bold mb-6 text-center">
        Catálogo de {params.category}
      </h1>

      {/* Galería */}
      <div className="w-full px-7.5 py-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
        {productosFiltrados.map((producto) => (
          <Link
            key={producto.id}
            href={
              producto.id === "anillo-1"
                ? "/configurator"
                : `/products/${params.category}/${producto.id}`
            }
            className="block border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <Image
              src={producto.imagen}
              alt={producto.nombre}
              width={720}
              height={720}
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