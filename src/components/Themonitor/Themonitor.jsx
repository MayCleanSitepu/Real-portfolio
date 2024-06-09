'use client'
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, PresentationControls, ContactShadows } from '@react-three/drei';
import Monitor from '../Monitor/Monitor';

export default function Themonitor() {
    return (
        <Canvas style={{ height: "100vh" }} className='overflow-x-hidden' shadows camera={{ position: [0, 0, 10], fov: 25 }}>  
            <ambientLight intensity={20} />
            <spotLight intensity={20} position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} castShadow />
            
            <PresentationControls
                global
                config={{ mass: 2, tension: 500 }}
                snap={{ mass: 4, tension: 1500 }}
                rotation={[0, 0, 0]}
                polar={[-Math.PI / 3, Math.PI / 3]}
                azimuth={[-Math.PI / 1.4, Math.PI / 2]}
            >
                <Monitor position={[0, 0, 0]} scale={0.7} />
            </PresentationControls>
            
            <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={3} far={4} />
            <Environment preset="city" />
        </Canvas>
    );
}
