"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function FilterPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-[#002496] px-4">
        <Navbar />
    
        {/* Título */}
      {/* Logo */}
      <div className="flex flex-col items-center mb-8">
        <Image
                      src="/marca/TituloAzulNBG.png"
                      alt="Logo"
                      className="w-32 sm:w-40 md:w-48 lg:w-56"
                      width={0}
                      height={0}
                      sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                    />
      </div>

      {/* QR */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <Image
          src="/qr-placeholder.png" // Cambia por tu QR real
          alt="QR"
          width={240}
          height={240}
        />
      </div>

      {/* Texto */}
      <div className="text-center max-w-xl mb-10">
        <p className="text-lg font-semibold mb-2">¡Listo!</p>
        <p className="mb-2">
          Escanea el código con tu celular para poder ver el anillo que acabas de crear y probarlo en tu mano.
        </p>
        <p>
          Una vez que te guste tu modelo, da clic en “continuar” para poder comprarlo.
        </p>
      </div>

      {/* Botones */}
      <div className="flex gap-8">
        <button
          onClick={() => router.back()}
          className="bg-[#002496] text-white px-10 py-3 rounded-full font-semibold hover:bg-[#001a70] transition"
        >
          Regresar
        </button>
        <button
          onClick={() => router.push("/checkout")}
          className="bg-[#002496] text-white px-10 py-3 rounded-full font-semibold hover:bg-[#001a70] transition"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}