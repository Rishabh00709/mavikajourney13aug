import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative h-screen min-h-[600px]">
      {/* Hero Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg)',
          backgroundPosition: 'center 30%'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Discover the World's Most Amazing Places
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Find and book exclusive travel packages tailored to your dreams
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;