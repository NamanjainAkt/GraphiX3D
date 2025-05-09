import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, PresentationControls, ContactShadows, Float, Environment } from '@react-three/drei'

const GLTFModelViewer = ({ modelPath, position = [0, 0, 0], scale = 1 }) => {
  const ref = useRef()
  const { scene } = useGLTF(modelPath)

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.15
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
        <group ref={ref} position={position} scale={scale}>
          <primitive object={scene} />
        </group>
      </Float>
      <ContactShadows position={[0, -1.5, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
      <Environment preset="city" />
    </PresentationControls>
  )
}

export default GLTFModelViewer
