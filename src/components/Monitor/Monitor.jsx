import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Monitor(props) {
  const { nodes, materials } = useGLTF('medias/gwe.glb');
  return (
    <group {...props} dispose={null}>
      <group position={[2.822, 1.551, 0.657]} scale={[1.69, 1, 0.191]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_2.geometry}
          material={materials['Material.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_3.geometry}
          material={materials['Material.002']}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/gwe.glb');
