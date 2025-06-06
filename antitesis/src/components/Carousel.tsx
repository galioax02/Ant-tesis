"use client";

import Image from "next/image";
import { useState } from "react";

export default function Carousel({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrev = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () =>
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className="
        relative
        w-full
        h-[220px]
        sm:h-[320px]
        md:w-[600px] md:h-[400px]
        lg:w-[800px] lg:h-[500px]
        flex items-center justify-center
        max-w-full
      "
      >
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 bg-white/80 text-3xl p-2 shadow hover:shadow-lg/50"
          aria-label="Anterior"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          &#8592;
        </button>
        <Image
          src={images[activeIndex]}
          alt={`Imagen ${activeIndex + 1}`}
          fill
          className="object-cover rounded-lg shadow-lg"
          priority
        />
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 bg-white/80 text-3xl p-2 shadow hover:shadow-lg/50"
          aria-label="Siguiente"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          &#8594;
        </button>
      </div>
      <div className="flex gap-2 mt-4 justify-center">
        {images.map((img, idx) => (
          <button
            key={img}
            onClick={() => setActiveIndex(idx)}
            className={`border ${
              activeIndex === idx ? "border-[#002496]" : "border-transparent"
            } rounded`}
          >
            <Image
              src={img}
              alt={`Miniatura ${idx + 1}`}
              width={40}
              height={40}
              className="object-cover rounded"
            />
          </button>
        ))}
      </div>
    </div>
  );
}