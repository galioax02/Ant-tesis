"use client";

export function Scene() {
   // Agregar el helper para ver la dirección de la luz en la escena

  return (
    <>
      {/* LUZ PRINCIPAL */}
      <directionalLight
        intensity={150}
        position={[0, 1, 1]}
        castShadow
        color="#ffffff"
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <directionalLight
        intensity={100}
        position={[0, 0, 4]}
        castShadow
        color="#ffffff"
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <directionalLight
        intensity={100}
        position={[4, 0, 0]}
        castShadow
        color="#ffffff"
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <directionalLight
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
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* FONDO */}
      <color attach="background" args={["#bbbbbb"]} />
    </>
  );
}
