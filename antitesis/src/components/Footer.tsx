"use client";

import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#002496] text-white py-6 px-4 w-full">
      <div className="max-w-7xl mx-auto flex justify-center items-center text-center">
        {/* Grid de 4 columnas */}
        <div className="grid grid-cols-4 gap-4 w-full max-w-2xl items-center">
          {/* Columna izquierda: Instagram */}
          <div className="flex justify-center items-center min-w-[70px]">
            <Link href="https://instagram.com/antitesis.mx" target="_blank">
              <FaInstagram className="text-white text-2xl hover:opacity-80 transition-opacity" />
            </Link>
          </div>

          {/* Columna central izquierda: Marca */}
          <div className="flex justify-center items-center">
            <Image
              src="/marca/TituloBlancoNBG.png"
              alt="Logo"
              className="w-32 sm:w-40 md:w-48 lg:w-56"
              width={0}
              height={0}
              sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
            />
          </div>

          {/* Columna central derecha: Hecho por */}
          <div className="flex justify-center items-center min-w-[100px]">
            <p className="text-xs text-white/70 whitespace-nowrap">
              Diseñado por<br />Galilea Oaxaca
            </p>
          </div>

          {/* Columna derecha extra */}
          <div className="flex justify-center items-center min-w-[100px]">
            <p className="text-xs text-white/70 whitespace-nowrap">
              Desarrollo por<br />Martín Rivera
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
