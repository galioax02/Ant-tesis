// src/lib/products.ts
export const productos = [
  {
    id: "anillo-2",
    nombre: "Anillo Clásico",
    categoria: "anillos",
    descripcion: "Elegancia atemporal en oro blanco.",
    imagen: "/placeholders/anillo2.jpg",
    precio: "$2,500 MXN",
  },
  {
    id: "anillo-3",
    nombre: "Anillo Minimal",
    categoria: "anillos",
    descripcion: "Simplicidad y sofisticación.",
    imagen: "/placeholders/anillo3.jpg",
  },
  {
    id: "dije-1",
    nombre: "Dije Estelar",
    categoria: "dijes",
    descripcion: "Inspirado en constelaciones antiguas.",
    imagen: "/placeholders/dije1.jpg",
  },
  {
    id: "dije-2",
    nombre: "Dije Corazón",
    categoria: "dijes",
    descripcion: "Un símbolo eterno del amor.",
    imagen: "/placeholders/dije2.jpg",
  },
  {
    id: "dije-3",
    nombre: "Dije Geométrico",
    categoria: "dijes",
    descripcion: "Formas limpias y modernas.",
    imagen: "/placeholders/dije1.jpg",
  },
];

export async function getProductById(id: string) {
  // Simula una llamada a base de datos o API
  await new Promise((r) => setTimeout(r, 100)); // Opcional, simula delay
  return productos.find((p) => p.id === id);
}
