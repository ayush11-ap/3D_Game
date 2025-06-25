import Light from "./Light";
import Level from "./Level";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
const Experience = () => {
  return (
    <>
      <OrbitControls makeDefault />

      <Physics debug>
        <Light />
        <Level />
      </Physics>
    </>
  );
};

export default Experience;
