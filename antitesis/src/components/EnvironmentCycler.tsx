"use client";

import { Environment } from "@react-three/drei";
import { useEffect, useState } from "react";

const presets = [
  "sunset",
  "night",
  "warehouse",
  "apartment",
  "city",
] as const;

export default function EnvironmentCycler() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % presets.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return <Environment preset={presets[index]} />;
}
