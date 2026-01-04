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

import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// ⭐ STEP 1 — SANITIZE FUNCTION
function sanitizeGeometry(geometry) {
  if (!geometry || !geometry.attributes || !geometry.attributes.position)
    return geometry;

  const pos = geometry.attributes.position.array;
  let fixed = false;

  for (let i = 0; i < pos.length; i++) {
    if (!Number.isFinite(pos[i])) {
      pos[i] = 0;
      fixed = true;
    }
  }

  if (fixed) {
    console.warn("⚠ Geometry repaired!");
    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();
    geometry.computeBoundingSphere();
    geometry.computeBoundingBox();
  }

  return geometry;
}

const Earth = () => {
  // ⭐ Load model
const gltf = useLoader(GLTFLoader, "/planet/earth.gltf");


  // ⭐ STEP 2 — SANITIZE EACH MESH
  gltf.scene.traverse((child) => {
    if (child.isMesh && child.geometry) {
      child.geometry = sanitizeGeometry(child.geometry);
    }
  });

  return <primitive object={gltf.scene} scale={2.5} />;
};

const EarthCanvas = () => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <Earth />
    </Canvas>
  );
};

export default EarthCanvas;
