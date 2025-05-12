import type { NextConfig } from "next";

// Configuración tipada para Next.js
const nextConfig: NextConfig = {
  // Configuración para exportación estática
  output: 'export',
  
  // Optimización de imágenes (necesario para exportaciones estáticas)
  images: {
    unoptimized: true,
  },
  
  // Opciones de configuración adicionales
  reactStrictMode: true,
  
  
};

export default nextConfig;