"use client";

import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#002496] text-white py-6 px-4 w-full">
      <div className="max-w-7xl mx-auto flex justify-center items-center text-center">
        {/* Grid de 3 columnas iguales */}
        <div className="grid grid-cols-3 gap-4 w-full max-w-md">
          {/* Columna izquierda: Instagram */}
          <div className="flex justify-center items-center min-w-[100px]">
            <Link href="https://instagram.com/tucuenta" target="_blank">
              <FaInstagram className="text-white text-2xl hover:opacity-80 transition-opacity" />
            </Link>
          </div>

          {/* Columna central: Marca */}
          <Image
          src="/marca/TituloBlancoNBG.png"
          alt="Logo"
          className="w-32 sm:w-40 md:w-48 lg:w-56"
          width={0}
          height={0}
          sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
        />

          {/* Columna derecha: Hecho por */}
          <div className="flex justify-center items-center min-w-[100px]">
            <p className="text-sm text-white/70 whitespace-nowrap">
              Hecho con 💍
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
