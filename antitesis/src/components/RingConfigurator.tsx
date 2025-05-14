"use client";

export default function RingConfigurator() {
  return (
    <div className="flex flex-col mt-5 items-center justify-center w-full h-screen">
      <h1 className="text-2xl font-semibold mb-4">Configura tu anillo</h1>
      <iframe
        id="sdv-iframe"
        width="100%"
        height="700"
        src="https://www.shapediver.com/app/iframe/anillo-at-corregido-3?primaryColor=%23317DD4&secondaryColor=%23393A45&surfaceColor=%23FFFFFF&backgroundColor=%23F8F8F8&showControls=1&showZoomButton=1&showFullscreenButton=1&showToggleControlsButton=1&hideDataOutputsIframe=1&hideAttributeVisualizationIframe=1&hideJsonMenu=1&parametersDisable=1&parametersValidation=0"
        referrerPolicy="origin"
        allowFullScreen
        style={{
          overflowX: "hidden",
          overflowY: "hidden",
          borderWidth: 0,
        }}
      >
        
      </iframe>
      
    </div>
  );
}


