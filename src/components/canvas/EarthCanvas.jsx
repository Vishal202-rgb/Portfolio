// import React from "react";
// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import * as THREE from "three";

// // ⭐ STEP 1 — Sanitize Function
// function sanitizeGeometry(geometry) {
//   if (!geometry || !geometry.attributes || !geometry.attributes.position)
//     return geometry;

//   const arr = geometry.attributes.position.array;
//   let fixed = false;

//   for (let i = 0; i < arr.length; i++) {
//     if (!Number.isFinite(arr[i])) {
//       arr[i] = 0;
//       fixed = true;
//     }
//   }

//   if (fixed) {
//     geometry.attributes.position.needsUpdate = true;
//     geometry.computeVertexNormals();
//     geometry.computeBoundingSphere();
//     geometry.computeBoundingBox();
//   }

//   return geometry;
// }

// const Earth = () => {
//   const gltf = useLoader(GLTFLoader, "/planet/scene.gltf");

//   gltf.scene.traverse((child) => {
//     if (child.isMesh && child.geometry) {
//       child.geometry = sanitizeGeometry(child.geometry);
//     }
//   });

//   return <primitive object={gltf.scene} scale={2.5} />;
// };

// const EarthCanvas = () => {
//   return (
//     <Canvas>
//       <ambientLight intensity={1} />
//       <directionalLight position={[10, 10, 10]} />
//       <Earth />
//     </Canvas>
//   );
// };

// export default EarthCanvas;

import React, { useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// ✅ SANITIZE FUNCTION (CORRECT)
function sanitizeGeometry(geometry) {
  if (!geometry?.attributes?.position) return;

  const pos = geometry.attributes.position.array;
  let fixed = false;

  for (let i = 0; i < pos.length; i++) {
    if (!Number.isFinite(pos[i])) {
      pos[i] = 0;
      fixed = true;
    }
  }

  if (fixed) {
    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();
    geometry.computeBoundingBox();
    geometry.computeBoundingSphere();
    console.warn("⚠ Geometry sanitized");
  }
}

const Earth = () => {
  const gltf = useLoader(GLTFLoader, "/planet/earth.gltf");

  // ✅ RUN ONCE ONLY
  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isMesh && child.geometry) {
        sanitizeGeometry(child.geometry);
        child.frustumCulled = false;
      }
    });
  }, [gltf]);

  return <primitive object={gltf.scene} scale={2.5} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Earth />
    </Canvas>
  );
};

export default EarthCanvas;
