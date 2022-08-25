import {useLoader} from '@react-three/fiber'
import {GLTFLoader} from'three/examples/jsm/loaders/GLTFLoader'
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

let zx = false;

export function Asset({ url }) {
    const meshRef = useRef();
    useFrame(() => {
        window.glb_mesh = meshRef;
        if(window.zx){
        // console.log("zx true");
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
        }
        else{
        // console.log("zx false");
        meshRef.current.rotation.x += 0;
        meshRef.current.rotation.y += 0;
        }
    })
    const gltf = useLoader(GLTFLoader, url);
    
    return<>
        <mesh ref={meshRef}>
            <primitive object={gltf.scene} dispose={null} />;
        </mesh>
    </>
}