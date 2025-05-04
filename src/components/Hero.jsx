import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

const Logo3D = () => {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#61dafb" />
    </mesh>
  );
};

const Hero = () => {
  return (
    <section className="h-screen relative bg-primary">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="w-1/2">
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
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Explore the world of 3D graphics and animation with us
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
        <div className="w-1/2 h-[500px]">
          <Canvas camera={{ position: [3, 3, 3] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Logo3D />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;