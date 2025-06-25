import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const App = () => {
  return (
    <div
      id="container"
      className="fixed top-0 left-0 w-full h-full overflow-hidden"
    >
      <Canvas
        shadows
        camera={{ fov: 45, near: 0.1, far: 200, position: [2.5, 4, 6] }}
      >
        <Experience />
      </Canvas>
    </div>
  );
};

export default App;
