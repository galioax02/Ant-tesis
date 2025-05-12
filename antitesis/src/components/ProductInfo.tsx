// app/products/[productId]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { getProductById } from "@/lib/products";

// Definición explícita de parámetros según los tipos de Next.js
interface ProductPageParams {
  productId: string;
}

// Usa directamente los tipos de Next.js
export default async function ProductPage({
  params,
  }: {
  params: ProductPageParams;
}) {
  // Intenta obtener el producto con un manejo de errores
  try {
    const producto = await getProductById(params.productId);
    
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
            className="rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.5)] object-contain max-h-[500px]"
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
  } catch (error) {
    console.error("Error al cargar el producto:", error);
    return notFound();
  }
}

// Si necesitas generateMetadata, también actualiza sus tipos
export async function generateMetadata({
  params,
}: {
  params: ProductPageParams;
}) {
  try {
    const producto = await getProductById(params.productId);
    
    if (!producto) {
      return {
        title: "Producto no encontrado",
        description: "El producto que buscas no existe",
      };
    }
    
    return {
      title: `${producto.nombre} | Mi Tienda`,
      description: producto.descripcion,
    };
  } catch (error) {
    return {
      title: ("Error" + error),
      description: "No se pudo cargar la información del producto",
    };
  }
}