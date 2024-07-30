// src/components/Service.js

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Service = ({ index, number, title, description, image }) => {
  const isOdd = index % 2 === 1;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Define animation variants
  const variants = {
    hidden: {
      x: isOdd ? 100 : -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.8,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col md:flex-row items-center justify-center flex-1 mx-24 ${isOdd ? 'md:flex-row-reverse' : ''}`}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      <div className="relative flex-shrink-0">
        <span className="text-with-image" style={{ backgroundImage: `url(${image})` }}>{number}</span>
      </div>
      <div className={`md:ml-10 text-center md:text-left ${isOdd ? 'md:mr-10' : ''}`}>
        <h3 className="text-4xl font-bold">
          {title}
        </h3>
        <p className="mt-4 text-lg text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default Service;
