"use client";

import { useRef } from "react";
import { DirectionalLightHelper } from "three";
import { useHelper } from "@react-three/drei";

export function Scene() {
  const lightRef1 = useRef<THREE.DirectionalLight>(null);
  const lightRef2 = useRef<THREE.DirectionalLight>(null);
  const lightRef3 = useRef<THREE.DirectionalLight>(null);
  const lightRef4 = useRef<THREE.DirectionalLight>(null);

  // Agregar el helper para ver la dirección de la luz en la escena
  useHelper(lightRef1, DirectionalLightHelper, 1);
  useHelper(lightRef2, DirectionalLightHelper, 1);
  useHelper(lightRef3, DirectionalLightHelper, 1);
  useHelper(lightRef4, DirectionalLightHelper, 1);

  return (
    <>
      {/* LUZ PRINCIPAL */}
      <directionalLight
        ref={lightRef1}
        intensity={150}
        position={[0, 1, 1]}
        castShadow
        color="#ffffff"
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <directionalLight
        ref={lightRef2}
        intensity={100}
        position={[0, 0, 4]}
        castShadow
        color="#ffffff"
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <directionalLight
        ref={lightRef3}
        intensity={100}
        position={[4, 0, 0]}
        castShadow
        color="#ffffff"
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <directionalLight
        ref={lightRef4}
        intensity={100}
        position={[-4, 0, 0]}
        castShadow
        color="#ffffff"
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* LUZ AMBIENTE SUAVE */}
      <ambientLight
        intensity={1000}
        color="#ffffff"/>

      {/* PISO */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#000" />
      </mesh>

      {/* FONDO */}
      {/* <color attach="background" args={["#383838"]} /> */}
    </>
  );
}
