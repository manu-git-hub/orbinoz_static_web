// src/components/Hero.js

import React from 'react';
import { motion } from 'framer-motion';
import yourImage from '../assets/ORBINOZ MEDIA LOGO-01.png'; 
import Navbar from './Navbar';

const Hero = () => {
  return (
    <section className="text-center py-20 lg:py-32 min-h-screen flex flex-col justify-center items-center relative">
      <motion.div
        className="relative flex justify-center items-center w-full"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={yourImage}
          alt="Animated"
          className="w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto object-cover"
          initial={{ scale: 0 }}
          animate={{
            scale: [0, 1, 0.8, 0.3], // Scale up, stay large, then scale down
            y: [0, 0, 300], // Move down on the Y-axis
            opacity: [0, 1, 1, 1] // Fade in and remain visible
          }}
          transition={{
            duration: 2, // Total duration of 2 seconds
            times: [0, 0.25, 0.5, 1] // Define keyframes at 25%, 75%, and 100% of the duration
          }}
        />
      </motion.div>
      <motion.div
        className="absolute top-0 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }} // Delay showing the navbar until after the image animation
      >
        <Navbar />
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-800 text-center whitespace-nowrap px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }} // Delay showing the text until after the image animation
      >
        <p>Discover, Engage, Connect</p>
        <p>Our Media Experience</p>
      </motion.div>
      {/* <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mt-8">
        Get Started
      </button> */}
    </section>
  );
};

export default Hero;
