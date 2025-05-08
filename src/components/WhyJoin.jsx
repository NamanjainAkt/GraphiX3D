import React from 'react';
import { motion } from 'framer-motion';
import CardLayers3d from './card';
import { guestTalks, mentorship, portfolioBuilding, workshops } from '../assets/assets';

const WhyJoin = () => {
  const features = [
    {
      title: "MentorShips",
      description: "Get personalized guidance from experienced professionals to help you grow, learn, and navigate your journey with clarity and confidence.",
      image: mentorship,
    },
    {
      title: "Guest Talk",
      description: "Gain insights and inspiration from industry leaders and domain experts through powerful talks and real-world experiences.",
      image: guestTalks,
    },
    {
      title: "Portfolio Building",
      description: "Learn how to craft a standout portfolio that showcases your skills, projects, and creativity to impress recruiters and clients.",
      image: portfolioBuilding,
    },
    {
      title: "Workshops",
      description: "Participate in hands-on sessions to master new tools, technologies, and skills through practical, project-based learning.",
      image: workshops,
    }
  ];

  return (
    <motion.section 
      id='why-join' 
      className="py-16 h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          Why Join GraphiX3D?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <CardLayers3d image={feature.image}>
                <div className="h-full p-4">
                  <h3 className="text-xl font-semibold text-center mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200 text-sm text-center leading-snug">
                    {feature.description}
                  </p>
                </div>
              </CardLayers3d>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
};

export default WhyJoin;