// Ejemplo de uso en page.tsx
import CheckoutForm from "@/components/CheckoutForm"
import Navbar from "@/components/Navbar";

export default function CheckoutPage() {
  // Simula los parámetros y el precio
  const params = { tamaño: "7", material: "Plata", textura: "Lisa" };
  const price = 2300;

  return (
    <>
      <Navbar />
      <CheckoutForm params={params} price={price} />
    </>
  );
}