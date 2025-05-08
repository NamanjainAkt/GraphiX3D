import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Suspense,useCallback } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Logo3D = () => {
  const { scene } = useGLTF('./logo.glb');
  
  // Clone the scene to avoid issues with multiple renderings
  const model = scene.clone();
  
  return (
    <primitive 
      object={model} 
      scale={2.5} 
      position={[0, 0, 0]} 
      rotation={[0, 0, 0]}
    />
  );
};

// Preload the model
useGLTF.preload('./logo.glb');

const Hero = () => {
  const headlines = [
    "From Pixels to Masterpieces – Crafting Digital Worlds.",
    "Code. Design. Captivate. – Where Creativity Meets Technology.",
    "Build, Design, Showcase – Your Vision, Our Expertise.",
    "Game Dev to Cinematic Magic – We Bring Ideas to Life.",
    "UI/UX Perfected, Portfolios Polished – Elevate Your Digital Presence.",
    "Where Imagination Meets Execution – Design Without Limits.",
    "From Concept to Screen – Powering Next-Gen Digital Experiences.",
    "Design. Develop. Dominate. – Your Creative Playground.",
    "Visual Storytelling, Seamless Code – The Art of Digital Creation.",
    "Crafting the Future, One Pixel at a Time."
  ];

  const getTypeAnimationSequence = useCallback(() => {
    const sequence = [];
    headlines.forEach((headline, index) => {
      sequence.push(headline);
      sequence.push(2000);
    });
    return sequence;
  }, [headlines]);

  return (
    <section id='hero' className="h-screen relative bg-primary flex flex-col items-center justify-center">
      <div className="w-full md:w-2/3 h-[400px] mb-8">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 5]} intensity={1.5} />
          <Suspense fallback={null}>
            <Logo3D />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.75} />
        </Canvas>
      </div>
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-white mb-6"
        >
          Welcome to GraphiX3D
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-xl mb-8 font-mono text-white relative group"
          style={{
            textShadow: '0 0 10px rgba(255,255,255,0.7), 0 0 20px rgba(255,255,255,0.5), 0 0 30px rgba(255,255,255,0.3)',
            fontFamily:'monospace'
          }}
        >
          <TypeAnimation
            sequence={getTypeAnimationSequence()}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-accent hover:bg-accent/80 text-primary font-bold py-3 px-8 rounded-full"
        >
          Join Us
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
