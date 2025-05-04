import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF, Stars } from '@react-three/drei'
import ModelViewer from './ModelViewer'

// A simple rotating cube component
function RotatingCube(props) {
  const meshRef = useRef()
  
  // Rotate the cube on each frame
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.5
    meshRef.current.rotation.y += delta * 0.2
  })

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color={props.color || 'purple'} metalness={0.5} roughness={0.2} />
    </mesh>
  )
}

// Main 3D scene component
const Scene = () => {
  const [showAdvanced, setShowAdvanced] = useState(false)
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      
      {!showAdvanced ? (
        <>
          <RotatingCube position={[-2, 0, 0]} color="#6366f1" />
          <RotatingCube position={[2, 0, 0]} color="#8b5cf6" />
          <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
          <Environment preset="city" />
        </>
      ) : (
        <>
          <ModelViewer position={[0, 0, 0]} scale={1.5} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Environment preset="sunset" />
        </>
      )}
    </>
  )
}

const Home = () => {
  const [showAdvanced, setShowAdvanced] = useState(false)
  
  return (
    <div className="w-full h-[calc(100vh-50px)] bg-black">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-white mb-4 bg-transparent">GraphiX3D Demo</h1>
        <p className="text-gray-300 mb-6 bg-transparent">Interactive 3D graphics powered by Three.js and React Three Fiber</p>
        
        <button 
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="px-4 py-2 mb-6 bg-gradient-to-r from-primary to-secondary text-white rounded-md hover:opacity-90 transition-opacity"
        >
          {showAdvanced ? "Show Basic Scene" : "Show Advanced Scene"}
        </button>
      </div>
      
      <div className="w-full h-[70vh]">
        <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
          <Scene showAdvanced={showAdvanced} />
        </Canvas>
      </div>
    </div>
  )
}

export default Home