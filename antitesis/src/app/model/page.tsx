'use client'

import { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'; // Cargador OBJ
import { Mesh } from 'three';

// Componente para cargar y mostrar el modelo .obj
function ObjModel() {
  const [model, setModel] = useState<THREE.Object3D | null>(null);
  const modelRef = useRef<THREE.Object3D | null>(null); // Usamos ref para el modelo
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const loader = new OBJLoader();
    loader.load('/modelos/prueba.obj', (object) => {
      setModel(object);
    });

    // Controlar la rotación con el scroll
    const handleScroll = (event: WheelEvent) => {
      setRotation((prev) => prev + event.deltaY * 0.005); // Ajusta la sensibilidad
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      // Aplica la rotación al modelo en su propio eje
      modelRef.current.rotation.y = rotation;
    }
  });

  return (
    model && (
      <primitive
        ref={modelRef}
        object={model}
        scale={0.5} // Puedes ajustar el tamaño
        position={[0, 0, 0]} // Ajusta la posición
      />
    )
  );
}

const ModelPage: React.FC = () => {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        {/* Agregar luces */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        {/* Modelo 3D */}
        <ObjModel />
      </Canvas>
    </div>
  );
};

export default ModelPage;
