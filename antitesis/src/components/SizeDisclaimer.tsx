"use client";
import { useState } from "react";
import Image from "next/image";

export default function SizeDisclaimer() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"instrucciones" | "tabla">("instrucciones");

  return (
    <>
      <button
        type="button"
        className="underline text-sm text-[#002496] hover:text-blue-700 mb-2 self-start"
        onClick={() => setOpen(true)}
      >
        ¿No sabes tu talla?
      </button>
      {open && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 text-xl"
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
            >
              ×
            </button>
            <div className="flex gap-2 mb-4">
              <button
                className={`px-3 py-1 rounded font-semibold ${
                  tab === "instrucciones"
                    ? "bg-[#e6eaff] text-[#002496]"
                    : "bg-gray-100 text-gray-500"
                }`}
                onClick={() => setTab("instrucciones")}
              >
                Instrucciones
              </button>
              <button
                className={`px-3 py-1 rounded font-semibold ${
                  tab === "tabla"
                    ? "bg-[#e6eaff] text-[#002496]"
                    : "bg-gray-100 text-gray-500"
                }`}
                onClick={() => setTab("tabla")}
              >
                Tabla de tallas
              </button>
            </div>
            {tab === "instrucciones" ? (
              <div>
                <h2 className="text-lg font-bold mb-2 text-[#002496]">
                  ¿Cómo saber tu talla?
                </h2>
                <ol className="list-decimal pl-5 text-sm text-gray-700 space-y-1">
                  <li>Corta una tira de papel o usa una cinta delgada.</li>
                  <li>Enróllala alrededor de la base de tu dedo.</li>
                  <li>Marca el punto donde se superpone.</li>
                  <li>Mide la longitud con una regla (en mm).</li>
                  <li>Consulta una tabla de tallas para saber tu número.</li>
                </ol>
                <p className="mt-3 text-xs text-gray-500">
                  Tip: Hazlo al final del día, cuando tus dedos estén más grandes.
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
              
                <Image
                  src="/placeholders/tallas.png"
                  alt="Tabla de tallas grande"
                  width={220}
                  height={440}
                  className="object-contain max-h-[70vh] h-auto w-auto"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}