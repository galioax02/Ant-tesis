import { productos, getCategories } from "@/lib/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export async function generateStaticParams() {
  const params = [];
  for (const category of getCategories()) {
    for (const producto of productos.filter((p) => p.categoria === category)) {
      params.push({ category, id: producto.id });
    }
  }
  return params;
}

export default async function ProductDetail(
  { params }: { params: { category: string; id: string } }
) {
  const { category, id } = params;
  const producto = productos.find(
    (p) => p.categoria === category && p.id === id
  );
  if (!producto) return notFound();

  return (
    <div className="min-h-screen bg-white text-[#002496] px-6 py-20 flex flex-col md:flex-row gap-10 max-w-7xl mx-auto">
      <Navbar />
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          width={500}
          height={500}
          className={producto.categoria === "anillos"
                ? "rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.5)] object-center object-cover max-h-[500px]"
                :"rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.5)] object-bottom object-cover max-h-[500px]"}
          
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
  );
}