'use client';

import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi'; // Icono para menú hamburguesa
import { HiSearch } from 'react-icons/hi'; // Icono de búsqueda

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Menú Hamburguesa */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HiMenuAlt3 />
        </button>

        {/* Barra de búsqueda */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Buscar..."
            className="px-4 py-2 rounded-md text-black focus:outline-none"
          />
          <HiSearch className="text-xl" />
        </div>

        {/* Logo */}
        <div className="text-xl font-bold">MiLogo</div>
      </div>

      {/* Menú Lateral (Solo visible en pantallas pequeñas) */}
      {isMenuOpen && (
        <div className="lg:hidden p-4 bg-blue-800">
          <ul className="space-y-4">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
