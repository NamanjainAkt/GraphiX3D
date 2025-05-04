import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, PresentationControls, ContactShadows, Environment, Float } from '@react-three/drei'

// A component that creates a floating 3D model with presentation controls
const ModelViewer = ({ position = [0, 0, 0], scale = 1 }) => {
  // Create a simple 3D model since we don't have an actual GLTF file
  const groupRef = useRef()
  const [hovered, setHovered] = useState(false)
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15
    }
  })
  
  return (
    <PresentationControls
      global
      rotation={[0.13, 0.1, 0]}
      polar={[-0.4, 0.2]}
      azimuth={[-1, 0.75]}
      config={{ mass: 2, tension: 400 }}
      snap={{ mass: 4, tension: 400 }}
    >
      <Float rotationIntensity={0.4}>
        <group 
          ref={groupRef} 
          position={position} 
          scale={scale}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          {/* Create a complex geometric shape */}
          <mesh position={[0, 0, 0]} castShadow receiveShadow>
            <torusKnotGeometry args={[1, 0.3, 128, 32]} />
            <meshStandardMaterial 
              color={hovered ? "#8b5cf6" : "#6366f1"} 
              roughness={0.3} 
              metalness={0.8} 
              envMapIntensity={0.8}
            />
          </mesh>
          
          {/* Add some decorative elements */}
          <mesh position={[0, 0, 0]} scale={1.4} castShadow>
            <sphereGeometry args={[0.2, 32, 32]} />
            <meshStandardMaterial color="#f43f5e" emissive="#f43f5e" emissiveIntensity={0.5} toneMapped={false} />
          </mesh>
        </group>
      </Float>
      
      {/* Add shadows and environment */}
      <ContactShadows 
        position={[0, -1.5, 0]} 
        opacity={0.75} 
        scale={10} 
        blur={2.5} 
        far={4} 
      />
    </PresentationControls>
  )
}

export default ModelViewer