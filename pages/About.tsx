import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 font-heading">
          Who We Are
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          This Is Us is not just a company; it's a movement. We are a collective of thinkers, builders, and dreamers united by a single purpose: to build technology that matters. Our team is our greatest asset—a diverse group of experts from various fields who bring unique perspectives to every challenge.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          We operate on the principles of radical transparency, relentless innovation, and user-centric design. We believe in challenging the status quo and are not afraid to venture into uncharted territory. Our process is collaborative, agile, and always focused on delivering exceptional value and experiences.
        </p>
      </motion.div>
    </div>
  );
};

export default About;