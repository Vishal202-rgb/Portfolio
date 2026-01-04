import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");
  const modelRef = useRef();

  // 🔄 ROTATION ANIMATION
  useFrame((_, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.25; // speed control
    }
  });

  useEffect(() => {
    if (!scene) return;

    scene.traverse((child) => {
      if (child.isMesh && child.geometry) {
        const geometry = child.geometry;

        // ✅ Remove NaN / Infinity vertices
        const position = geometry.attributes.position;
        if (position) {
          for (let i = 0; i < position.array.length; i++) {
            if (!Number.isFinite(position.array[i])) {
              position.array[i] = 0;
            }
          }
          position.needsUpdate = true;
        }

        // ✅ Safe bounds
        geometry.computeBoundingBox();
        geometry.computeBoundingSphere();

        child.frustumCulled = false;
      }
    });
  }, [scene]);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />

      {/* 🔥 MODEL */}
      <primitive
        ref={modelRef}
        object={scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -4.2, -2.2] : [0, -4.6, -1.5]} // 👇 niche shift
        rotation={[-0.1, 0, -0.05]} // initial tilt
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
