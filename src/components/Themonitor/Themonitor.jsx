'use client'
import React from 'react';
import { Canvas } from '@react-three/fiber';
import Monitor from '../Monitor/Monitor';
import { Environment } from '@react-three/drei';

export default function Themonitor() {
    return (
        <Canvas style={{ height: "90vh" }} className='overflow-x-hidden'>  
            <ambientLight intensity={1} />
            <directionalLight intensity={3} position={[0, 3, 2]} />
            <Environment preset='sunset' />
            <Monitor />
        </Canvas>
    );
}
