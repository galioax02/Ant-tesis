/* eslint-disable */

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
  value: any; 
  api: IParameterApi<any>; 
  choices?: string[];
}

const ShapeDiverViewer = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [params, setParams] = useState<UsableParameter[]>([]);
  const sessionRef = useRef<any>(null);

  useEffect(() => {
    const initViewer = async () => {
      if (!canvasRef.current) return;

      try {
        const viewport = await createViewport({
          canvas: canvasRef.current,
          id: "myViewport",
          branding: {
            logo: "/marca/MarcaBA.png"

          }
        });

        const session = await createSession({
          ticket:
            "2b7b0295f37183c98cd61b51d6ab8959aebf0f8a3f64a1a552b03bd817aac853d336a637784a5398525fe23475f295c3775b64204a4632f2186098f9cf79067a4e566400f036d932693dab18aa73907a7fa04c923786ed50e2cf1a2a584977a9694e0f1c5d2720-b72edf723a474c50c7771805cf8003fe-5b9465f92a0cf9c235b8ea315aab0cd5",
          modelViewUrl: "https://sdr8euc1.eu-central-1.shapediver.com",
          id: "mySession",
        });

        sessionRef.current = session;

        const visibleParams = Object.values(session.parameters).filter(
          (p) => !p.hidden && p.type === "StringList"
        );

        const usableParameters: UsableParameter[] = visibleParams.map((p) => ({
          id: p.id,
          name: p.displayname || p.name,
          type: p.type,
          value: p.value,
          api: p,
        }));

        setParams(usableParameters);
      } catch (error) {
        console.error("Error al inicializar ShapeDiver:", error);
      }
    };

    initViewer();
  }, []);

  const handleParameterChange = async (
    param: UsableParameter,
    newValue: string
  ) => {
    const valueToSet = String(newValue);

    if (
      param.type === "StringList" &&
      param.api.choices &&
      !param.api.choices.includes(valueToSet)
    ) {
      console.warn(
        `⚠️ Valor "${valueToSet}" no está en choices permitidos para "${param.name}"`
      );
      return;
    }

    try {
      param.api.value = valueToSet;

      setParams((prev) =>
        prev.map((p) => (p.id === param.id ? { ...p, value: valueToSet } : p))
      );

      if (sessionRef.current) {
        await sessionRef.current.customize();
      }
    } catch (error) {
      console.error("❌ Error al actualizar el modelo:", error);
    }
  };

  const handleExport = async () => {
    if (!sessionRef.current) return;

    try {
      const exportId = Object.keys(sessionRef.current.exports)[0];
      const exportItem = sessionRef.current.exports[exportId];

      const content = await exportItem.download();
      const url = URL.createObjectURL(content.blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${exportItem.name}.stl`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error al exportar STL:", error);
    }
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
                value={String(param.value)}
                onChange={(e) => handleParameterChange(param, e.target.value)}
                className="border rounded px-3 py-2"
              >
                {param.api.choices.map((choice: any) => (
                  <option key={choice} value={choice}>
                    {choice}
                  </option>
                ))}
              </select>
            ) : ( null ) }
          </div>
        ))}

        <button
          onClick={handleExport}
          className="bg-[#002496] text-white px-6 py-3 rounded-lg mt-6 hover:bg-[#001f7a] transition-colors"
        >
          Exportar STL
        </button>
      </div>
    </div>
  );
};

export default ShapeDiverViewer;
