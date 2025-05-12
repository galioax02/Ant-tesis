"use client";

export default function RingConfigurator() {
  return (
    <div className="flex flex-col mt-5 items-center justify-center w-full h-screen">
      <h1 className="text-2xl font-semibold mb-4">Configura tu anillo</h1>
      <iframe
        id="sdv-iframe"
        width="100%"
        height="700"
        src="https://www.shapediver.com/app/iframe/anillo-at-corregido?primaryColor=%23002496&secondaryColor=%23FFFFFF&surfaceColor=%23FFSFFF&backgroundColor=%23F8F8F8&showControls=1&showZoomButton=&showFullscreenButton=1&showToggleControlsButton=0&hideDataOutputsIframe=0&hideExportsIframe=0&hideAttributeVisualizationIframe=1&hideSavedStatesIframe=1&hideJsonMenu=0&parametersDisable=1&parametersValidation=0"
        referrerPolicy="origin"
        allowFullScreen
        style={{
          overflowX: "hidden",
          overflowY: "hidden",
          borderWidth: 0,
        }}
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
}


