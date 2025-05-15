"use client";

import { useEffect, useRef, useState } from "react";
import {
  createSession,
  createViewport,
  IParameterApi,
} from "@shapediver/viewer";

interface UsableParameter {
  id: string;
  name: string;
  type: string;
  value: any; // eslint-disable-line
  min?: number;
  max?: number;
  step?: number;
  api: IParameterApi<any>; // eslint-disable-line
}

const ShapeDiverViewer = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [params, setParams] = useState<UsableParameter[]>([]);
  const sessionRef = useRef<any>(null); // eslint-disable-line

  useEffect(() => {
    const initViewer = async () => {
      if (!canvasRef.current) return;

      try {
        const viewport = await createViewport({ // eslint-disable-line
          canvas: canvasRef.current,
          id: "myViewport",
        }); 

        const session = await createSession({
          ticket:
            "2b7b0295f37183c98cd61b51d6ab8959aebf0f8a3f64a1a552b03bd817aac853d336a637784a5398525fe23475f295c3775b64204a4632f2186098f9cf79067a4e566400f036d932693dab18aa73907a7fa04c923786ed50e2cf1a2a584977a9694e0f1c5d2720-b72edf723a474c50c7771805cf8003fe-5b9465f92a0cf9c235b8ea315aab0cd5",
          modelViewUrl: "https://sdr8euc1.eu-central-1.shapediver.com",
          id: "mySession",
        });

        sessionRef.current = session; // Guardar la sesión para después

        const visibleParams = Object.values(session.parameters).filter(
          (p) => !p.hidden
        );

        const usableParameters: UsableParameter[] = visibleParams.map((p) => {
          const step =
            (typeof (p as any).step !== "undefined" // eslint-disable-line
              ? (p as any).step // eslint-disable-line
              : (typeof (p as any).decimalplaces !== "undefined" // eslint-disable-line
                  ? Math.pow(10, -(p as any).decimalplaces) // eslint-disable-line
                  : 0.01));
          return {
            id: p.id,
            name: p.displayname || p.name,
            type: p.type,
            value: p.value,
            min: (p as any).min, // eslint-disable-line
            max: (p as any).max, // eslint-disable-line
            step,
            api: p,
          };
        });

        setParams(usableParameters);
      } catch (error) {
        console.error("Error al inicializar ShapeDiver:", error);
      }
    };

    initViewer();
  }, []);

  const handleSliderChange = async (
    param: UsableParameter,
    newValue: number | boolean
  ) => {
    param.api.value = newValue;

    setParams((prev) =>
      prev.map((p) => (p.id === param.id ? { ...p, value: newValue } : p))
    );

    // ✅ Aplicar los cambios en el modelo
    if (sessionRef.current) {
      try {
        await sessionRef.current.customize();
      } catch (error) {
        console.error('Error al actualizar el modelo:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#002496] px-6 py-20 flex flex-col md:flex-row gap-10 max-w-7xl mx-auto overflow-hidden">
      {/* <Navbar /> */}
      <div className="w-full md:w-1/2 flex items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          style={{  display: "block" }}
          className="rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.5)] object-cover max-h-[500px]"
        />
      </div>

      {/* Sliders dinámicos */}
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
        <h1 className="text-4xl font-bold">Joyería Paramétrica</h1>


        {params.map((param) => (
          <div key={param.id} className="flex flex-col">
            <label className="font-semibold mb-1">{param.name}</label>

            {param.type === "Bool" ? (
              <label className="flex items-center gap-10 cursor-pointer">
                <input
                  type="checkbox"
                  checked={param.value}
                  onChange={(e) => handleSliderChange(param, e.target.checked)}
                  className="w-10 h-10 my-1 accent-[#002496] rounded"
                />
                
              </label>
            ) : (
              <>
                <input
                  type="range"
                  min={param.min}
                  max={param.max}
                  step={param.step}
                  value={param.value}
                  onChange={(e) =>
                    handleSliderChange(param, parseFloat(e.target.value))
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#002496]"
                />
              </>
            )}
          </div>
        ))}

        <button
          disabled
          className="bg-[#002496] text-white px-6 py-3 rounded-lg opacity-60 cursor-not-allowed mt-6"
        >
          Sin stock
        </button>
      </div>
    </div>
  );
};

export default ShapeDiverViewer;
