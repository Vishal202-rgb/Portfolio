import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const { scene } = useGLTF("/planet/scene.gltf");

  useEffect(() => {
    if (!scene) return;

    scene.traverse((child) => {
      if (child.isMesh && child.geometry) {
        const geometry = child.geometry;

        // ✅ FIX 1: Sanitize NaN vertices
        const position = geometry.attributes.position;
        if (position) {
          for (let i = 0; i < position.array.length; i++) {
            const v = position.array[i];
            if (!Number.isFinite(v)) {
              position.array[i] = 0;
            }
          }
          position.needsUpdate = true;
        }

        // ✅ FIX 2: Recompute bounds AFTER sanitizing
        geometry.computeBoundingBox();
        geometry.computeBoundingSphere();

        // ✅ FIX 3: Prevent frustum culling issues
        child.frustumCulled = false;
      }
    });
  }, [scene]);

  if (!scene) return null;

  return (
    <primitive
      object={scene}
      scale={2}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
