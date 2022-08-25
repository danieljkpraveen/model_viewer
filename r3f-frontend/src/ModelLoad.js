import { Model } from './Glb'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { KeyLight, FillLight, RimLight } from "./Lighting"
import { BackDrop, GroundPlane } from "./Stage"
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

let zx = false;

export function LoadModel(){
  const meshRef = useRef();
  useFrame(() => {
    window.glb_mesh = meshRef;
    if(window.zx){
      console.log("zx true");
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
    else{
      // console.log("zx false");
      meshRef.current.rotation.x += 0;
      meshRef.current.rotation.y += 0;
    }
  })

  return(
    <>
    <GroundPlane />
    <BackDrop />
    <mesh ref={meshRef}>
      <PerspectiveCamera position={[0,0,1]} fov={75} makeDefault/>
      <KeyLight brightness={10} color="#d2b4de" /> {/*purple shade*/}
      <FillLight brightness={2.6} color="#aed6f1" /> {/*#blue shade*/}
      <RimLight brightness={54} color="#a2d9ce" /> {/*#green shade*/}
      <Model />
      <OrbitControls />
    </mesh>
    </>
  );
}