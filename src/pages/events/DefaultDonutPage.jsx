import React from 'react';
import { motion } from 'framer-motion';
import { defaultDonut } from '../../assets/assets';
import ModelGallery from '../../components/ModelGallery';

const DefaultDonutPage = () => {
  return (
    <section className="min-h-screen py-20 bg-primary/95">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-white mb-8 text-center"
        >
          Default Donut Challenge
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto bg-primary/50 backdrop-blur-sm p-8 rounded-lg border-2 border-accent/20 mb-12"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">Challenge Description</h2>
          <p className="text-gray-300 mb-6">
            Create your own version of the classic "default donut" 3D model. Show off your modeling, texturing, and rendering skills by putting your unique spin on this iconic 3D object.
          </p>
          <div className="flex justify-center mb-6">
            {defaultDonut && (
              <img src={defaultDonut} alt="Default Donut" className="max-w-full h-auto rounded-lg" />
            )}
          </div>
          <div className="flex justify-center">
            <a 
              href="/models" 
              className="bg-accent hover:bg-accent/80 text-white font-medium py-3 px-6 rounded transition-colors"
            >
              Submit Your Model
            </a>
          </div>
        </motion.div>
        
        {/* Display submitted models for this event */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Submitted Models</h2>
          <ModelGallery eventFilter="default_donut" />
        </div>
      </div>
    </section>
  );
};

export default DefaultDonutPage;