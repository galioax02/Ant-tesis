"use client"; 

import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Mesh, MeshStandardMaterial } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

export function Model() {
  const ref = useRef<Mesh>(null);
  const obj = useLoader(OBJLoader, "/modelos/AnilloBase.obj");

  obj.traverse((child) => {
    if ((child as Mesh).isMesh) {
      (child as Mesh).material = new MeshStandardMaterial({
        color: 0xC0C0C0, 
        metalness: 1,
        roughness: 0.1,
      });
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  // Rotación
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z += 0.01;
    }
  });

  
  return (
    <primitive 
      ref={ref} 
      object={obj} 
      scale={0.1} 
      position={[-1.25, 0.2, 0]} 
      rotation={[1.5, 0, 0]}
    />
  );
}
