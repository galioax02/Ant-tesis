"use client"

import ScrollGallery from "@/components/ScrollGallery";
import Navbar from "@/components/Navbar";

export default function Page() {
    const gallery = ["/placeholders/Nodo/NodoHorizontal.jpg","/placeholders/Nodo/DijeNodo.jpg", "/placeholders/Nodo/NodoHorizontal2.jpg"]
  return (
    <>
      <Navbar />
      <div>
      <ScrollGallery images={gallery}/>
      </div>
    </>
  );
}
