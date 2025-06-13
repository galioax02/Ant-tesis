// Ejemplo de uso en page.tsx
'use client';
import CheckoutForm from "@/components/CheckoutForm";
import Navbar from "@/components/Navbar";
import { useSearchParams } from "next/navigation";

export default function CheckoutPage() {
  const searchParams = useSearchParams();

  // Convierte los parámetros de la URL en un objeto
  const params: Record<string, string | number> = {};
  searchParams.forEach((value, key) => {
    params[key] = isNaN(Number(value)) ? value : Number(value);
  });

  // Puedes calcular el precio aquí según los parámetros, o dejarlo fijo
  const price = 2300;

  return (
    <>
      <Navbar />
      <CheckoutForm params={params} price={price} />
    </>
  );
}