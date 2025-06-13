// Ejemplo de uso en page.tsx
'use client';
import CheckoutForm from "@/components/CheckoutForm";
import Navbar from "@/components/Navbar";

import { Suspense } from "react";

export default function CheckoutPage() {
  

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <CheckoutForm/>
      </Suspense>
    </>
  );
}