// components/ProductShowcase.tsx
"use client";
import Image from "next/image";
import Link from "next/link";

type ProductProps = {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  ctaLabel?: string;
  ctaLink?: string;
};

export default function ProductShowcase({
  title,
  description,
  price,
  imageUrl,
  ctaLabel = "Comprar",
  ctaLink = "/comprar",
}: ProductProps) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 p-8 min-h-screen">
      {/* Imagen */}
      <div className="w-full md:w-1/2 relative aspect-square">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Información */}
      <div className="w-full md:w-1/2 flex flex-col items-start text-left">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-4">{description}</p>
        <p className="text-2xl font-semibold text-blue-800 mb-6">{price}</p>
        <Link href={ctaLink}>
          <button className="px-6 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors">
            {ctaLabel}
          </button>
        </Link>
      </div>
    </section>
  );
}
