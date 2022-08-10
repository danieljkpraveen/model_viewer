/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Space shuttle.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.node_id30.geometry} material={materials['100']} position={[0.02, -0.34, -0.19]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/Space shuttle.glb')