// app/layout.tsx
import "../globals.css";
import { ReactNode } from "react";
// import  Navbar  from "@/components/Navbar";

export const metadata = {
  title: "Ring Configurator",
  description: "Personaliza tu anillo con ShapeDiver",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    
    
      <body className="bg-white text-black">
        {/* <Navbar /> Navbar siempre presente */}
        <main>{children}</main> {/* Aquí se carga la página actual */}
      </body>

  );
}
