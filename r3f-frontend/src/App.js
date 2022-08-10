import './App.css';
import {Canvas} from "@react-three/fiber"

function App() {
  return (
    <Canvas>
      <ambientLight />
      <mesh>
        <boxGeometry />
      </mesh>
    </Canvas>
  );
}

export default App;
