"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ScrollGallery({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  // Puedes ajustar este factor para hacer el scroll más largo o más corto
  const SCROLL_FACTOR = 1.2; // 1.2 pantallas por imagen

  useEffect(() => {
    const onScroll = () => {
      const sectionHeight = window.innerHeight;
      const totalScroll =
        images.length > 0
          ? sectionHeight * images.length * SCROLL_FACTOR
          : sectionHeight;

      // Empieza a mostrar imágenes solo después de 1/3 de pantalla
      if (window.scrollY < (sectionHeight * 3) / 5) {
        setActiveIndex(-1);
      } else {
        // Calcula el índice según la fracción del scroll
        const scrollStart = sectionHeight / 3
        const scrollY = Math.max(0, window.scrollY - scrollStart);
        const index = Math.min(
          images.length - 1,
          Math.floor((scrollY / totalScroll) * images.length)
        );
        setActiveIndex(index);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [images]);

  // Ajusta la altura del área de scroll dinámicamente
  const sectionHeight = typeof window !== "undefined" ? window.innerHeight : 800;
  const totalScrollHeight =
    images.length > 0
      ? sectionHeight * images.length * SCROLL_FACTOR
      : sectionHeight;

  return (
    <div
      className="w-full relative z-0 pointer-events-none"
      style={{ height: `${totalScrollHeight}px` }}
    >
      {images.map((img, i) => (
        <div
          key={i}
          className={`fixed left-1/2 top-1/2 transition-opacity duration-250 ease-in-out ${
            i === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            zIndex: 0,
            width: "800px",
            height: "500px",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        >
          <Image
            src={img}
            alt={`Imagen ${i + 1}`}
            fill
            className="object-cover rounded-lg shadow-lg"
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  );
}