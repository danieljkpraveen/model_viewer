/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

// import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
    const { nodes, materials } = useGLTF('/car.glb')
    return (
        <group {...props} dispose={null}>
            <group position={[0, 0.48, 1.26]} rotation={[1.59, 0, 0]} scale={[0.06, 0.02, 0.06]}>
                <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.004']} />
                <mesh geometry={nodes.Cylinder_2.geometry} material={materials.light} />
            </group>
            <mesh geometry={nodes.Plane001.geometry} material={materials.glossy} position={[0.01, 0.49, 1.23]} rotation={[Math.PI / 2, 0, 0]} scale={[0.06, 0.06, 0]} />
            <mesh geometry={nodes.Circle.geometry} material={materials.glossy} position={[0.01, 0.47, 1.28]} rotation={[Math.PI / 2, 0, 0]} scale={0.03} />
            <mesh geometry={nodes.Circle001.geometry} material={materials.glossy} position={[0.01, 0.53, -1.32]} rotation={[1.81, 0, 0]} scale={0.03} />
            <mesh geometry={nodes.Cylinder001.geometry} material={materials.glossy} position={[0, 0.27, 1.26]} rotation={[1.59, 0, 0]} scale={[0.06, 0.02, 0.06]} />
            <mesh geometry={nodes.Cylinder002.geometry} material={materials.glossy} position={[0, 0.27, -1.22]} rotation={[1.55, 0, Math.PI]} scale={[0.06, 0.02, 0.06]} />
            <group position={[-0.56, 0.25, 0.85]} rotation={[0, 0, -Math.PI / 2]} scale={[0.36, 0.09, 0.36]}>
                <mesh geometry={nodes.Cylinder003_1.geometry} material={materials.base} />
                <mesh geometry={nodes.Cylinder003_2.geometry} material={materials['tyre-marks']} />
                <mesh geometry={nodes.Cylinder003_3.geometry} material={materials.front} />
                <mesh geometry={nodes.Cylinder003_4.geometry} material={materials['Material.001']} />
            </group>
            <mesh geometry={nodes.Cylinder005.geometry} material={materials.glossy} position={[-0.3, 0.24, -1.16]} rotation={[Math.PI / 2, 0, 0]} scale={0.02} />
            <mesh geometry={nodes.Cylinder006.geometry} material={materials.glossy} position={[0.6, 0.58, -0.29]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
            <mesh geometry={nodes.Cylinder007.geometry} material={materials.glossy} position={[0.5, 0.77, -0.59]} rotation={[-Math.PI, 0, -1.98]} scale={[0.04, 0.01, 0.04]} />
            <group position={[-0.56, 0.25, -0.78]} rotation={[0, 0, -Math.PI / 2]} scale={[0.36, 0.09, 0.36]}>
                <mesh geometry={nodes.Cylinder009_1.geometry} material={materials.base} />
                <mesh geometry={nodes.Cylinder009_2.geometry} material={materials['tyre-marks']} />
                <mesh geometry={nodes.Cylinder009_3.geometry} material={materials.front} />
                <mesh geometry={nodes.Cylinder009_4.geometry} material={materials['Material.001']} />
            </group>
            <mesh geometry={nodes.Cube001.geometry} material={materials['Material.007']} position={[0, 0.66, -0.26]} rotation={[-0.24, 0, 0]} scale={[0.53, 0.27, 0.08]} />
            <group position={[0.56, 0.25, 0.85]} rotation={[0, 0, -Math.PI / 2]} scale={[0.36, 0.09, 0.36]}>
                <mesh geometry={nodes.Cylinder004_1.geometry} material={materials.base} />
                <mesh geometry={nodes.Cylinder004_2.geometry} material={materials['tyre-marks']} />
                <mesh geometry={nodes.Cylinder004_3.geometry} material={materials.front} />
                <mesh geometry={nodes.Cylinder004_4.geometry} material={materials['Material.001']} />
            </group>
            <group position={[0.56, 0.25, -0.78]} rotation={[0, 0, -Math.PI / 2]} scale={[0.36, 0.09, 0.36]}>
                <mesh geometry={nodes.Cylinder008_1.geometry} material={materials.base} />
                <mesh geometry={nodes.Cylinder008_2.geometry} material={materials['tyre-marks']} />
                <mesh geometry={nodes.Cylinder008_3.geometry} material={materials.front} />
                <mesh geometry={nodes.Cylinder008_4.geometry} material={materials['Material.001']} />
            </group>
            <group position={[0, 1.11, 0]} scale={0.36}>
                <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.003']} />
                <mesh geometry={nodes.Plane_2.geometry} material={materials['tail-light']} />
                <mesh geometry={nodes.Plane_3.geometry} material={materials.window} />
                <mesh geometry={nodes.Plane_4.geometry} material={materials.glossy} />
                <mesh geometry={nodes.Plane_5.geometry} material={materials['Material.005']} />
                <mesh geometry={nodes.Plane_6.geometry} material={materials['Material.006']} />
                <mesh geometry={nodes.Plane_7.geometry} material={materials.Material} />
                <mesh geometry={nodes.Plane_8.geometry} material={materials['Material.008']} />
            </group>
            <mesh geometry={nodes.Plane002.geometry} material={materials.glossy} position={[0, 0.38, 1.31]} scale={0.14} />
            <mesh geometry={nodes.Plane003.geometry} material={materials.glossy} position={[0, 0.39, -1.35]} rotation={[-Math.PI, 0, 0]} scale={0.14} />
        </group>
    )
}

useGLTF.preload('/car.glb')
