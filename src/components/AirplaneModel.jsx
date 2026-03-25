import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { PerspectiveCamera, Environment } from '@react-three/drei'
import { OBJLoader } from 'three-stdlib'
import { MTLLoader } from 'three-stdlib'
import * as THREE from 'three'
import gsap from 'gsap'

function AnimeSkybox() {
    const texture = useLoader(THREE.TextureLoader, '/clouds/extracted_sky/baseColor.jpg')
    const cloudRef = useRef()

    useFrame(() => {
        if (cloudRef.current) {
            // slowly rotate backwards to simulate moving forward
            cloudRef.current.rotation.y += 0.001
        }
    })

    return (
        // A huge unlit sphere representing the sky. 
        // We use rotation Z = Math.PI to fix the upside down texture (avoiding texture.flipY mutation).
        <mesh ref={cloudRef} position={[0, -50, 0]} scale={[-500, 500, 500]} rotation={[0, 0, Math.PI]}>
            <sphereGeometry args={[1, 60, 40]} />
            <meshBasicMaterial map={texture} side={THREE.BackSide} depthWrite={false} color={0xffffff} />
        </mesh>
    )
}

function Airplane({ isCheckingIn }) {
    const groupRef = useRef()
    
    // Load MTL first, then pass it to OBJLoader
    const materials = useLoader(MTLLoader, '/airplane/11803_Airplane_v1_l1.mtl')
    const obj = useLoader(OBJLoader, '/airplane/11803_Airplane_v1_l1.obj', (loader) => {
        materials.preload()
        loader.setMaterials(materials)
    })

    // Animations
    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        const targetX = isMobile ? -3 : 0; // Center nicely
        const targetY = isMobile ? -7.5 : -4.5; // Push much lower on screen to prevent tail from overlapping text

        if (groupRef.current) {
            // Initial animation: fade/zoom in slightly or float
            gsap.fromTo(groupRef.current.position, 
                { x: targetX - 5, y: targetY - 2, z: -25 },
                { x: targetX, y: targetY, z: -5, duration: 4, ease: 'power2.out' }
            )
            // Rotate so we view from behind, pointing towards the horizon (right and away)
            gsap.fromTo(groupRef.current.rotation,
                { y: Math.PI / 2.5, z: -0.1 },
                { y: Math.PI / 6, z: 0, duration: 4, ease: 'power2.out' }
            )
        }
    }, [])

    useEffect(() => {
        if (isCheckingIn && groupRef.current) {
            // "Check in" animation: plane banks and turns to face the camera, zooming door in
            gsap.to(groupRef.current.position, {
                x: -7, // move plane left so right side (door) aligns with camera
                y: -0.5, // slightly below center
                z: 14, // very close to camera
                duration: 3.0,
                ease: 'power3.in'
            })
            gsap.to(groupRef.current.rotation, {
                y: -0.1, // turns nearly flat to the camera to expose the door
                z: Math.PI / 8, // dramatic bank
                duration: 3.0,
                ease: 'power3.in'
            })
        }
    }, [isCheckingIn])

    useFrame((state) => {
        if (groupRef.current && !isCheckingIn) {
            // Simple floating effect (bobbing)
            groupRef.current.position.y = -1 + Math.sin(state.clock.elapsedTime) * 0.2
            // Subtle rotation / banking
            groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.02
        }
    })

    return (
        <group ref={groupRef}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.005, 0.005, 0.005]}>
                <primitive object={obj} />
            </group>
        </group>
    )
}

export default function AirplaneModel({ isCheckingIn }) {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                {/* Basic Lighting */}
                <ambientLight intensity={1.5} />
                <directionalLight position={[10, 10, 10]} intensity={2} />

                <React.Suspense fallback={null}>
                    {/* Skybox */}
                    <AnimeSkybox />

                    {/* Airplane */}
                    <Airplane isCheckingIn={isCheckingIn} />
                </React.Suspense>
            </Canvas>
        </div>
    )
}
