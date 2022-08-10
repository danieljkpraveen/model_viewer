import './App.css';
import {Canvas} from "@react-three/fiber"
import { Model } from './Shuttle'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { KeyLight, FillLight, RimLight } from "./Lighting"
import { BackDrop, GroundPlane } from "./Stage"

function LoadModel(){
  return(
    <mesh>
      <PerspectiveCamera position={[0,0,1]} fov={75} makeDefault/>
      <GroundPlane />
      <BackDrop />
      <KeyLight brightness={10} color="#d2b4de" /> #purple shade
      <FillLight brightness={2.6} color="#aed6f1" /> #blue shade
      <RimLight brightness={54} color="#a2d9ce" /> #green shade
      <Model />
      <OrbitControls />
    </mesh>
  );
}

function App() {
  return (
    <Canvas style={{ background: "silver" }}>
      <LoadModel />
    </Canvas>
  );
}

export default App;