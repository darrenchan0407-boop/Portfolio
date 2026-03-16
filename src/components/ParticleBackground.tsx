import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function Particles(props: any) {
  const ref = useRef<any>();
  
  // More particles for greater impact
  const sphere = useMemo(() => random.inSphere(new Float32Array(15000), { radius: 2.5 }), []);
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 8;
      ref.current.rotation.y -= delta / 12;
      // Add wave movement
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="hsl(200, 100%, 80%)"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

function DynamicSphere() {
  const ref = useRef<any>();
  
  // Create a sphere of particles
  const sphere = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 8000; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 1.8 + Math.random() * 0.5;
      
      positions.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
    }
    return new Float32Array(positions);
  }, []);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.08;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={ref} position={[0, 0, -1]}>
      <Points positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="hsl(220, 90%, 70%)"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

function FloatingGeometry() {
  const meshRef = useRef<any>();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.3;
      meshRef.current.position.x = Math.cos(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, -2]} scale={0.8}>
      <icosahedronGeometry args={[1, 2]} />
      <meshBasicMaterial color="hsl(200, 100%, 60%)" wireframe transparent opacity={0.3} />
    </mesh>
  );
}

function FloatingGeometry2() {
  const meshRef = useRef<any>();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * -0.18;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.12;
      meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.7) * 0.4;
      meshRef.current.position.z = Math.cos(state.clock.elapsedTime * 0.9) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[-2.5, 1, -1]} scale={0.5}>
      <octahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color="hsl(220, 90%, 80%)" wireframe transparent opacity={0.25} />
    </mesh>
  );
}

function FloatingGeometry3() {
  const meshRef = useRef<any>();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25;
      meshRef.current.rotation.z = state.clock.elapsedTime * -0.15;
      meshRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.position.y = Math.cos(state.clock.elapsedTime * 1.1) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -1.5, -3]} scale={0.6}>
      <tetrahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color="hsl(200, 100%, 50%)" wireframe transparent opacity={0.2} />
    </mesh>
  );
}

function ConnectedLines() {
  const ref = useRef<any>();
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.03;
      ref.current.rotation.y = state.clock.elapsedTime * 0.04;
    }
  });

  return (
    <group ref={ref} position={[0, 0, -2]}>
      <mesh>
        <sphereGeometry args={[3, 32, 32]} />
        <meshBasicMaterial color="hsl(200, 100%, 70%)" wireframe transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 1.5], fov: 75 }}>
        <fog attach="fog" args={['hsl(220, 15%, 8%)', 3, 7]} />
        <Particles />
        <DynamicSphere />
        <ConnectedLines />
        <FloatingGeometry />
        <FloatingGeometry2 />
        <FloatingGeometry3 />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;