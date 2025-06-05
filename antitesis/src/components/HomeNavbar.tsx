"use client";

import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/20 backdrop-blur shadow-md/20 z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Botones de texto a la izquierda */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xl text-white px-2 font-semibold hover:shadow-md/20">
            Inicio
          </Link>
          <Link
            href="/quienes-somos"
            className="text-xl text-white px-2 font-semibold hover:shadow-md/20"
          >
            Quienes somos
          </Link>
        </div>
        {/* Botón hamburguesa a la derecha */}
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            console.log(isMenuOpen);
          }}
          className="text-white text-5xl hover:shadow-xl/40 rounded-lg"
        >
          <HiMenuAlt3 />
        </button>
      </div>

      {/* Menú lateral opcional */}
      {isMenuOpen && (
        <div className="text-black items-end flex flex-col shadow-md/20 bg-white/10 p-4 shadow-lg z-10 transition-all duration-300 ease-out animate-fade-down">
          <ul className="space-y-3 w-full text-right">
            <li>
              <Link className="h-10 text-white text-xl px-3 mx-10 hover:shadow-lg/50" href="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link className="h-10 text-white text-xl px-3 mx-10 hover:shadow-lg/50" href="/products/Dijes">
                Dijes
              </Link>
            </li>
            <li>
              <Link className="h-10 text-white text-xl px-3 mx-10 hover:shadow-lg/50" href="/viewer">
                Joyería Paramétrica
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
