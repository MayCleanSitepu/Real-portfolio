import React, { useRef } from 'react';
import { useGLTF, Outlines, Edges ,Text, Html, MeshTransmissionMaterial, PresentationControls } from '@react-three/drei';
import { useFrame, useThree } from 'react-three-fiber';


export default function Model() {

    const mesh = useRef();
    const { nodes } = useGLTF('/medias/Ethereum.glb');
    const { viewport } = useThree();
    
    useFrame( () => {
        mesh.current.rotation.x = 0;
        // mesh.current.rotation.y += 0.01;
        mesh.current.rotation.y += 0.01
        mesh.current.rotation.z = 0;
        mesh.current.position.x = 0.9;
        mesh.current.position.y = -0.;

    })

    const materialProps = {
        thickness: 0.2,
        roughness: 0,
        transmission: 1,
        ior: 1.2,
        chromaticAberration: 0.45,
        backside: true,
    };

    return (
        <>
            <group scale={viewport.width /15}>      
            
            {/* Main Text */}

            <Text
                fontSize={2}
                position={[0, 0.5, -0.5]}
                >
                H    There!!
            </Text>


                <Text position={[-3.8, -0.1, -.7]}>
                    <mesh ref={mesh} {...nodes.Sphere001}>
                        <MeshTransmissionMaterial {...materialProps}/>
                        <Edges threshold={50} lineWidth={1} scale={1.1} renderOrder={1000}>
                            <meshBasicMaterial transparent color="#ffffff" depthTest={false} />
                        </Edges>
                    </mesh>
                </Text>
            </group>

   

        </>
    );
}