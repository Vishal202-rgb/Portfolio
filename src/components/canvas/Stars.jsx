import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";

const Stars = () => {
  const ref = useRef();

  // ✅ SAFE STAR POSITIONS (NO NaN POSSIBLE)
  const positions = useMemo(() => {
    const count = 5000;
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      const v = THREE.MathUtils.randFloatSpread(2.4);
      arr[i] = Number.isFinite(v) ? v : 0;
    }

    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={positions}
        stride={3}
        frustumCulled={false}   // ✅ important
      >
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas
        frameloop="always"
        camera={{ position: [0, 0, 1] }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Stars />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
