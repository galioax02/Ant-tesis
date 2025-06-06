"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function FilterClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const seccion = searchParams.get("seccion");
  const angulo = searchParams.get("angulo");

  const tieneParametros =
    seccion && angulo && seccion !== "null" && angulo !== "null";

  const qrSrc = tieneParametros
    ? `/anillos/${seccion}/${angulo}.png`
    : "/marca/TituloAzulNBG.png";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-[#002496] px-4">
      <Navbar />

      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <Image src={qrSrc} alt="QR o Logo" width={240} height={240} />
      </div>
      <div className="text-center max-w-xl mb-10">
        {tieneParametros ? (
          <>
            <p className="text-lg font-semibold mb-2">¡Listo!</p>
            <p className="mb-2">
              Escanea el código con tu celular para poder ver el anillo que acabas
              de crear y probarlo en tu mano.
            </p>
            <p>
              Una vez que te guste tu modelo, da clic en “continuar” para poder
              comprarlo.
            </p>
          </>
        ) : (
          <>
            <p className="text-lg font-semibold mb-2">¡Listo!</p>
            <p className="mb-2">
              Has seleccionado un dije. No hay vista de realidad aumentada para
              este producto.
            </p>
            <p>Da clic en “continuar” para poder comprar tu dije.</p>
          </>
        )}
      </div>
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