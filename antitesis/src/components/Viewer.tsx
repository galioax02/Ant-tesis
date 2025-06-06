"use client";

/* eslint-disable */

import { useEffect, useRef, useState } from "react";
import {
  createSession,
  createViewport,
  IParameterApi,
} from "@shapediver/viewer";
import { useRouter } from "next/navigation";

interface UsableParameter {
  id: string;
  name: string;
  type: string;
  value: any; 
  min?: number;
  max?: number;
  step?: number;
  api: IParameterApi<any>;
  choices?: string[];
}

const ShapeDiverViewer = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [params, setParams] = useState<UsableParameter[]>([]);
  const sessionRef = useRef<any>(null);
  const router = useRouter();
  const [tipo, setTipo] = useState<"anillo" | "dije">("anillo");

  useEffect(() => {
    const initViewer = async () => {
      if (!canvasRef.current) return;

      try {
        const viewport = await createViewport({
          canvas: canvasRef.current,
          id: "myViewport",
          branding: {
            logo: "/marca/MarcaAzulNBG.png",
            busyModeSpinner: "/marca/LogoAzulNBG.png",
            backgroundColor: "FFFFFF",
          },
        });

        const session = await createSession({
          ticket:
            "aa2b50e0dea2d07df111944c74b8f4d0bbf662c991c3db198dd4deaf0c7d43815307dab7ca7c2293c4f2a26aff3d3fbdcd8a42a2afd48f39e76f6da54de3eda97e15238cccd29392bece05a53c09da4162c20975eb375d80c705424f3a240f0d079f973a5501f5-3b4f087de5da9eb54bf7b2871300ddcb",
          modelViewUrl: "https://sdr8euc1.eu-central-1.shapediver.com",
          id: "mySession",
        });

        sessionRef.current = session;

        const visibleParams = Object.values(session.parameters).filter(
          (p) => !p.hidden
        );

        const usableParameters: UsableParameter[] = visibleParams.map((p) => {
          const step =
            typeof (p as any).step !== "undefined"
              ? (p as any).step
              : typeof (p as any).decimalplaces !== "undefined"
              ? Math.pow(10, -(p as any).decimalplaces)
              : 0.5;
          return {
            id: p.id,
            name: p.displayname || p.name,
            type: p.type,
            value: p.value,
            min: (p as any).min,
            max: (p as any).max,
            step,
            api: p,
            choices: (p as any).choices || undefined,
          };
        });

        setParams(usableParameters);
      } catch (error) {
        console.error("Error al inicializar ShapeDiver:", error);
      }
    };

    initViewer();
  }, []);

  const updateModel = async () => {
    if (sessionRef.current) {
      try {
        await sessionRef.current.customize();
      } catch (error) {
        console.error("Error al actualizar el modelo:", error);
      }
    }
  };

  const handleValueChange = (
    param: UsableParameter,
    newValue: number | boolean | string
  ) => {
    param.api.value = newValue;

    setParams((prev) =>
      prev.map((p) => (p.id === param.id ? { ...p, value: newValue } : p))
    );
  };

  // --- Lógica para restricciones dinámicas ---
  // Ejemplo: si "secciones" === 3, "ángulo" solo puede ser [0,2,3]
  const getRestrictedValues = (param: UsableParameter) => {
    if (param.name.toLowerCase() === "angulo" || param.name.toLowerCase() === "ángulo") {
      const secciones = params.find(
        (p) => p.name.toLowerCase() === "secciones"
      );
      if (secciones && Number(secciones.value) === 3) {
        return [0,2,3,5,6,8,9];
      } else 
      if (secciones && Number(secciones.value) === 4) {
        return [0,1,3];
      } else 
      if (secciones && Number(secciones.value) === 5) {
        return [0,1,2];
      } else 
      if (secciones && Number(secciones.value) === 6) {
        return [0,1,2,3];
      } else 
      if (secciones && Number(secciones.value) === 7) {
        return [0,1,2,3];
      } else 
      if (secciones && Number(secciones.value) === 8) {
        return [0,1,2,3,4];
      } else 
      if (secciones && Number(secciones.value) === 9) {
        return [0,1,2,3,4];
      } else 
      if (secciones && Number(secciones.value) === 10) {
        return [0,1,3,4,5];
      } 
    }
    return null;
  };

  // Filtra los parámetros según el tipo seleccionado
  const paramsFiltrados = params.filter((p) => {
    if (tipo === "anillo") {
      return p.name.toLowerCase() !== "profundidad";
    } else {
      return p.name.toLowerCase() !== "talla";
    }
  });

  const seccion = params.find(p => p.name.toLowerCase() === "secciones")?.value;
  const angulo = params.find(p => p.name.toLowerCase() === "ángulo" || p.name.toLowerCase() === "angulo")?.value;
  const talla = params.find(p => p.name.toLowerCase() === "talla")?.value;

  return (
    <div className="min-h-screen bg-white text-[#002496] px-6 py-20 flex flex-col md:flex-row gap-10 max-w-7xl mx-auto overflow-hidden">
      <div className="w-full md:w-1/2 flex items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          style={{ display: "block" }}
          className="rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.5)] object-cover min-h-[300px] max-h-[500px]"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
        <h1 className="text-4xl font-bold">Joyería Paramétrica</h1>

        {/* Selector de tipo */}
        <div className="flex gap-4 mb-4">
          <button
            className={`px-4 py-2 rounded-lg border-2 font-semibold ${
              tipo === "anillo"
                ? "border-[#002496] bg-[#e6eaff]"
                : "border-gray-300 bg-white"
            }`}
            onClick={() => setTipo("anillo")}
          >
            Anillo
          </button>
          <button
            className={`px-4 py-2 rounded-lg border-2 font-semibold ${
              tipo === "dije"
                ? "border-[#002496] bg-[#e6eaff]"
                : "border-gray-300 bg-white"
            }`}
            onClick={() => setTipo("dije")}
          >
            Dije
          </button>
        </div>

        {/* Parámetros dinámicos */}
        {paramsFiltrados.map((param) => {
          const restrictedValues = getRestrictedValues(param);

          return (
            <div key={param.id} className="flex flex-col">
              <label className="font-semibold mb-1">{param.name}</label>

              {restrictedValues ? (
                <div className="flex items-center gap-4 my-2">
                  <button
                    type="button"
                    className="w-10 h-10 rounded-full bg-gray-200 text-2xl font-bold flex items-center justify-center hover:bg-[#e6eaff] transition"
                    onClick={() => {
                      const idx = restrictedValues.indexOf(param.value);
                      if (idx > 0) {
                        handleValueChange(param, restrictedValues[idx - 1]);
                        updateModel();
                      }
                    }}
                    aria-label="Menos"
                  >
                    −
                  </button>
                  
                  <button
                    type="button"
                    className="w-10 h-10 rounded-full bg-gray-200 text-2xl font-bold flex items-center justify-center hover:bg-[#e6eaff] transition"
                    onClick={() => {
                      const idx = restrictedValues.indexOf(param.value);
                      if (idx < restrictedValues.length - 1) {
                        handleValueChange(param, restrictedValues[idx + 1]);
                        updateModel();
                      }
                    }}
                    aria-label="Más"
                  >
                    +
                  </button>
                </div>
              ) : param.type === "StringList" && param.api.choices ? (
                <select
                  value={param.value}
                  onChange={(e) => {
                    handleValueChange(param, e.target.value);
                    updateModel();
                  }}
                  className="w-full p-2 border border-gray-300 rounded-md text-[#002496]"
                >
                  {param.api.choices
                    .filter((choice: any) => !/^\d+\.\d+$/.test(choice))
                    .map((choice: any) => (
                      <option key={choice} value={choice}>
                        {choice}
                      </option>
                    ))}
                </select>
              ) : (
                <input
                  type="range"
                  min={param.min}
                  max={param.max}
                  step={param.step}
                  value={param.value}
                  onChange={(e) =>
                    handleValueChange(param, parseFloat(e.target.value))
                  }
                  onMouseUp={updateModel}
                  onTouchEnd={updateModel}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#002496]"
                />
              )}
            </div>
          );
        })}

        <button
          onClick={() =>
            tipo === "anillo"
              ? router.push(`/viewer/filter?seccion=${seccion}&angulo=${angulo}&talla=${talla}`)
              : router.push(`/viewer/filter?seccion=null&angulo=null&talla=null`)
          }
          className="bg-[#002496] text-white px-6 py-3 rounded-lg mt-6 hover:bg-[#001f7a] transition-colors"
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default ShapeDiverViewer;
