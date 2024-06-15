'use client'
import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from '../Modeld/Model';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
    const cameraRef = useRef();

    useEffect(() => {
        if (cameraRef.current) {
            ScrollTrigger.create({
                trigger: "#canvas-container", // Element that triggers the scroll animation
                start: "top top", // When the top of the trigger element hits the top of the viewport
                end: "bottom bottom", // When the bottom of the trigger element hits the bottom of the viewport
                onUpdate: self => {
                    // Adjust the fov based on the scroll progress
                    const progress = self.progress;
                    const newFov = 75 - progress * 50; // Example calculation, adjust as needed
                    cameraRef.current.fov = newFov;
                    cameraRef.current.updateProjectionMatrix();
                },
                scrub: true // Smoothly animate the changes
            });
        }
    }, []);

    return (
        <div id="canvas-container" style={{ height: '100vh' }}> {/* Extended height to enable scrolling */}
            <Canvas style={{ height: "100vh" }} className='overflow-x-hidden'>
                <ambientLight intensity={1} />
                <directionalLight intensity={3} position={[0, 3, 2]} />
                <Environment preset='sunset' />
                <PerspectiveCamera
                    ref={cameraRef}
                    makeDefault
                    position={[0, 0, 5]}
                    fov={75}
                    near={0.1}
                    far={1000}
                />
                <Model />
            </Canvas>
        </div>
    );
}
