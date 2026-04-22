"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "@/lib/gsap";

function Icosahedron() {
  const meshRef = useRef();
  const targetRotation = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const geometry = useMemo(() => {
    return new THREE.IcosahedronGeometry(2.5, 4);
  }, []);

  // Persistent rotation that accumulates over time
  const rotRef = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!meshRef.current) return;

    // Continuous slow spin
    rotRef.current.x += 0.0008;
    rotRef.current.y += 0.001;

    // Mouse tilt offset (gentle, additive)
    const mx = state.pointer.x * 0.2;
    const my = state.pointer.y * 0.15;

    meshRef.current.rotation.x = rotRef.current.x + my;
    meshRef.current.rotation.y = rotRef.current.y + mx;
  });

  return (
    <mesh
      ref={meshRef}
      position={[viewport.width * 0.2, 0, 0]}
      geometry={geometry}
    >
      <meshBasicMaterial
        color="#EDB507"
        wireframe
        transparent
        opacity={0.12}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#080808"]} />
      <fog attach="fog" args={["#080808", 3, 12]} />
      <Icosahedron />
    </>
  );
}

export default function WebGL() {
  return (
    <div className="absolute inset-0 z-0 hidden md:block">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
