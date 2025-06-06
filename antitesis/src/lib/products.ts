// src/lib/products.ts
export const productos = [
  {
    id: "Nodo",
    nombre: "Dije nodo",
    categoria: "Dijes",
    descripcion:
      "Su forma asimétrica y envolvente juega con el vacío, dejando espacio entre líneas que parecen pensadas por la naturaleza. Evoca movimiento interno, exploración y equilibrio imperfecto, es una pieza pensada para quienes disfrutan de las formas que no necesitan explicación.",
    imagen: "/placeholders/Nodo/DijeNodo.jpg",
    precio: "$2,500 MXN",
    galeria: [
      "/placeholders/Nodo/NodoHorizontal.jpg",
      "/placeholders/Nodo/NodoHorizontal2.jpg",
      "/placeholders/Nodo/NodoModelo.jpg",
      "/placeholders/Nodo/DijeNodo.jpg"
    ],
  },
  {
    id: "Elipse",
    nombre: "Dije elipse",
    categoria: "Dijes",
    descripcion:
      "Elipse toma inspiración en las trayectorias naturales y armónicas del universo. Su contorno fluido y centro vacío invitan a la contemplación, como una pausa que da sentido al ritmo. Simboliza el equilibrio, el ciclo vital y la continuidad.",
    imagen: "/placeholders/Elipse/DijeElipse.jpg",
    precio: "$2,500 MXN",
    galeria: [
      "/placeholders/Elipse/ElipseHorizontal.jpg",
      "/placeholders/Elipse/ElipseHorizontal2.jpg",
      "/placeholders/Elipse/ElipseModelo.jpg",
      "/placeholders/Elipse/DijeElipse.jpg"
    ],
  },
  {
    id: "Cenit",
    nombre: "Dije cenit",
    categoria: "Dijes",
    descripcion:
      "Su forma ligera y abierta sugiere dirección, expansión y claridad. Evoca crecimiento, paso y transición. Este dije minimalista captura el instante en que todo parece avanzar.",
    imagen: "/placeholders/Cenit/DijeCenit.jpg",
    precio: "$2,500 MXN",
    galeria: [
      "/placeholders/Cenit/CenitHorizontal.jpg",
      "/placeholders/Cenit/CenitModelo.jpg",
      "/placeholders/Cenit/DijeCenit.jpg"
    ],
  },
];

export async function getProductById(id: string) {
  // Simula una llamada a base de datos o API
  await new Promise((r) => setTimeout(r, 100)); // Opcional, simula delay
  return productos.find((p) => p.id === id);
}

export function getProductsByCategory(categoria: string) {
  return productos.filter((p) => p.categoria === categoria);
}

export async function getAllProducts() {
  // Simula una llamada a base de datos o API
  await new Promise((r) => setTimeout(r, 100)); // Opcional, simula delay
  return productos;
}

export function getCategories() {
  return [...new Set(productos.map((p) => p.categoria))];
}
