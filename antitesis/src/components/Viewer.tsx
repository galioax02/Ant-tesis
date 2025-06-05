"use client";

import { useEffect, useRef, useState } from "react";
import {
  createSession,
  createViewport,
  IParameterApi,
} from "@shapediver/viewer";
import Link from "next/link";

interface UsableParameter {
  id: string;
  name: string;
  type: string;
  value: any;  // eslint-disable-line 
  min?: number;
  max?: number;
  step?: number;
  api: IParameterApi<any>;  // eslint-disable-line 
  choices?: string[];
}

const ShapeDiverViewer = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [params, setParams] = useState<UsableParameter[]>([]);
  const sessionRef = useRef<any>(null);  // eslint-disable-line 

  useEffect(() => {
    const initViewer = async () => {
      if (!canvasRef.current) return;

      try {
        const viewport = await createViewport({ // eslint-disable-line 
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
            typeof (p as any).step !== "undefined"  // eslint-disable-line 
              ? (p as any).step  // eslint-disable-line 
              : typeof (p as any).decimalplaces !== "undefined"  // eslint-disable-line 
              ? Math.pow(10, -(p as any).decimalplaces)  // eslint-disable-line 
              : 0.5;
          return {
            id: p.id,
            name: p.displayname || p.name,
            type: p.type,
            value: p.value,
            min: (p as any).min,  // eslint-disable-line 
            max: (p as any).max,  // eslint-disable-line 
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

        {params.map((param) => (
          <div key={param.id} className="flex flex-col">
            <label className="font-semibold mb-1">{param.name}</label>

            {param.type === "StringList" && param.api.choices ? (
              <select
                value={param.value}
                onChange={(e) => {
                  handleValueChange(param, e.target.value);
                  updateModel();
                }}
                className="w-full p-2 border border-gray-300 rounded-md text-[#002496]"
              >
                {param.api.choices
                .filter((choice: any) => !/^\d+\.\d+$/.test(choice))  // eslint-disable-line
                .map((choice: any) => (  // eslint-disable-line 
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
        ))}

        <Link
          href="/viewer/filter"
          className="bg-[#002496] text-white px-6 py-3 rounded-lg mt-6 hover:bg-[#001f7a] transition-colors"
        >
          Ver en Realidad Aumentada
        </Link>
      </div>
    </div>
  );
};

export default ShapeDiverViewer;
