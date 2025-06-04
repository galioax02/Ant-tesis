"use client";

import { useState } from "react";
import { HiMenuAlt3, HiSearch } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/60 backdrop-blur shadow-md/20 z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              console.log(isMenuOpen);
            }}
            className="text-[#002496] text-4xl hover:ring-2 hover:ring-blue-900 rounded-lg"
          >
            <HiMenuAlt3 />
          </button>

          {/* Barra de búsqueda */}
          <div className="md:flex justify-start hover:ring-2 hover:ring-blue-900 rounded-lg">
            <div className="flex items-center px-2 py-1 w-full max-w-md">
              <HiSearch className="text-[#002496] mr-2" />

              <input
                type="text"
                placeholder="Buscar..."
                className="text-2xl w-full outline-none text-[#002496] placeholder-[#002496] bg-transparent"
              />
            </div>
          </div>
        </div>

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

        {/* Logo */}
      </div>

      {/* Menú lateral opcional */}
      {isMenuOpen && (
        <div className="bg-[#002496] text-white p-4 shadow-lg z-20 transition-all duration-300 ease-out animate-fade-down">
          <ul className="space-y-3">
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
