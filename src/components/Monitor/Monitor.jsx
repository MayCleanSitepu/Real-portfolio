import React from 'react';
import { useGLTF, Html, Edges } from '@react-three/drei';


export default function Monitor(props) {
  const { nodes, materials } = useGLTF('medias/gwe.glb');
  return (
    <group {...props} dispose={null}>
      <group className="sm:scale-75 md:scale-50 lg:scale-75 xl:scale-100" position={[0, 1.5, 0]} scale={[1.5, 1, 0.2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials['Material.005']}
        >
          <Edges threshold={70} lineWidth={1} scale={1.1} renderOrder={1000}>
                  <meshBasicMaterial transparent color="#ffffff" depthTest={false} />
          </Edges>
        </mesh>
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

        {/* <Html scale={0.2} position={[0.5, -0.2, 1.5]} transform occlude >
          <button 
            className="bg-slate-100 text-blue-600 rounded-[40%] w-20 h-10 flex items-center justify-center p-2 hover:bg-gray-800 active:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-500"
            onClick={() => alert('Button clicked!')}
          >
            <h1 className="text-center text-sm">contact me!</h1>
          </button>
        </Html> */}
      </group>
    </group>
  );
}

useGLTF.preload('medias/gwe.glb');
