"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Scene } from "@/components/Scene";
import { Model } from "@/components/Model";
import EnvironmentCycler from "@/components/EnvironmentCycler";

export default function Page() {
  return (
    <div className="pt-10 md:pt-20 relative w-screen h-screen">
      <Canvas shadows camera={{ position: [0, 1, 18], fov: 10 }}>
        <Scene />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Suspense fallback={null}>
          <EnvironmentCycler />
        </Suspense>
      </Canvas>
    </div>
  );
}
