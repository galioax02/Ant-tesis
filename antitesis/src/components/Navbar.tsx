"use client";

import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md/20 z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Botón de regreso a la izquierda */}
        <button
          onClick={() => window.history.back()}
          className="text-[#002496] text-5xl hover:ring-2 hover:ring-blue-900 rounded-lg mr-2"
          aria-label="Regresar"
        >
          &#8592;
        </button>
        {/* Logo centrado */}
        <div className="flex-1 flex justify-center">
          <Link href="/" scroll={true}>
            <Image
              src="/marca/TituloAzulNBG.png"
              alt="Logo"
              className="w-32 sm:w-40 md:w-48 lg:w-56"
              width={0}
              height={0}
              sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
            />
          </Link>
        </div>
        {/* Menú hamburguesa a la derecha */}
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            console.log(isMenuOpen);
          }}
          className="text-[#002496] text-4xl hover:ring-2 hover:ring-blue-900 rounded-lg ml-2"
          aria-label="Abrir menú"
        >
          <HiMenuAlt3 />
        </button>
      </div>

      {/* Menú lateral opcional */}
      {isMenuOpen && (
        <div className="bg-[#002496] text-white p-4 shadow-lg z-20 transition-all duration-300 ease-out animate-fade-down flex flex-col items-end text-right">
          <ul className="space-y-3 w-full text-right">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            {/* <li>
              <Link href="/products/anillos">Anillos</Link>
            </li> */}
            <li>
              <Link href="/products/dijes">Dijes</Link>
            </li>
            <li>
              <Link href="/viewer">Joyería Paramétrica</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
