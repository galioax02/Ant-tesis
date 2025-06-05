import React from "react";

interface ParametricIntroProps {
  open: boolean;
  onClose: () => void;
}

const ParametricIntro: React.FC<ParametricIntroProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white text-[#002496] rounded-xl shadow-2xl max-w-2xl w-full p-12 relative">
        <h2 className="text-lg font-bold mb-4">¿Qué es una joya paramétrica?</h2>
        <p className="mb-4 text-base">
          Un anillo o un dije paramétrico no parte de un molde fijo, sino de un sistema de diseño que responde a tus decisiones. Cada curva, volumen o textura cambia en tiempo real según lo que elijas.
        </p>
        <p className="mb-4 font-semibold text-base">
          Esto no es un catálogo.<br />Es una conversación entre tú, el diseño y el algoritmo.
        </p>
        <h3 className="text-base font-bold mb-2">¿Qué puedes hacer?</h3>
        <ul className="list-disc list-inside mb-4 space-y-1 text-base">
          <li>Jugar con proporciones, simetrías y detalles.</li>
          <li>Ver cómo evoluciona tu pieza al mover los parámetros.</li>
          <li>Probarla en tu mano (o imaginarla en tu cuello).</li>
          <li>Crear una joya que no existe hasta que tú la piensas.</li>
        </ul>
        <p className="mt-6 text-base">
          Cuando estés listo, da el siguiente paso:<br />
          <span className="font-bold">crea tu pieza.</span>
        </p>
        <button
          onClick={onClose}
          className="mt-8 px-8 py-3 bg-[#002496] text-white rounded-lg font-semibold hover:bg-[#001a70] transition"
        >
          Entendido
        </button>
      </div>
    </div>
  );
};

export default ParametricIntro;