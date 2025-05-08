"use client"; 

import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Mesh, MeshStandardMaterial } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

export function Model() {
  const ref = useRef<Mesh>(null);
  const obj = useLoader(OBJLoader, "/modelos/AnilloBase.obj");

  // Aplicar material plateado al modelo
  obj.traverse((child) => {
    if ((child as Mesh).isMesh) {
      (child as Mesh).material = new MeshStandardMaterial({
        color: 0xC0C0C0, // Plata clara (platinum)
        metalness: 1,
        roughness: 0.1,
      });
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  // Rotación animada
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z += 0.01; // Rotación suave en el eje Z
    }
  });

  // Posición y rotación ajustadas
  return (
    <primitive 
      ref={ref} 
      object={obj} 
      scale={0.1} 
      position={[-1.25, 0.2, 0]} // Coloca el modelo a la izquierda
      rotation={[1.5, 0, 0]} // Ajuste de rotación para verlo de frente
    />
  );
}
