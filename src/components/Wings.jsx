import React from 'react';
import { motion } from 'framer-motion';
import Card from './card2';

const Wings = () => {
  const wings = [
    {
      title: "Game Development",
      description: "Learn game development fundamentals, create interactive experiences, and build engaging games using modern engines and tools."
    },
    {
      title: "Cinematography",
      description: "Learn the art of visual storytelling through cinematography, animation, and motion graphics."
    },
    {
      title: "3D Modeling",
      description: "Master 3D modeling tools and techniques to create stunning digital assets and environments."
    },
    {
      title: "UI/UX",
      description: "Master the art of user interface and experience design, creating intuitive and beautiful digital experiences."
    }
  ];

  return (
    <section id="wings" className="h-screen py-20 bg-primary">
      <div className="container mx-auto px-4 h-full py-20">
        <div className="flex justify-between items-start gap-8 h-full">
          {/* Left Cards */}
          <div className="flex flex-col gap-8 w-1/3">
            {wings.slice(0, 2).map((wing, index) => (
              <motion.div
                key={wing.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary/50 backdrop-blur-sm p-8 rounded-lg border-2 border-accent/20 hover:border-accent/40 transition-all hover:transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                  {wing.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {wing.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center Card and Title */}
          <div className="flex flex-col items-center w-1/3 mt-20">
            <div className="mb-12 mt-7">
              <Card />
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl font-bold text-center text-white mt-40"
            >
              Wings
            </motion.h2>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-8 w-1/3">
            {wings.slice(2).map((wing, index) => (
              <motion.div
                key={wing.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 2) * 0.1 }}
                className="bg-primary/50 backdrop-blur-sm p-8 rounded-lg border-2 border-accent/20 hover:border-accent/40 transition-all hover:transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                  {wing.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {wing.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wings;


