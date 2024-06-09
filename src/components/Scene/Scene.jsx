'use client'
import React from 'react';
import { Canvas } from 'react-three-fiber';
import Model from '../Modeld/Model';
import { Environment, PresentationControls } from '@react-three/drei';

export default function Scene() {
    return (

        <Canvas style={{height: "80vh" }} className='overflow-x-hidden'>  
            <ambientLight intensity={1} />
            <directionalLight intensity={3} position={[0, 3, 2]} />
            <Environment preset='sunset' />

            <Model />
            
        </Canvas>

    );
}
