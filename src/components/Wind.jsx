import React from 'react';
import { motion } from 'framer-motion';

const Wind = ({ wind }) => {
  return (
    <motion.div
      className="bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg rounded-lg p-6 m-4 hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Wind</h2>
          <p className="text-gray-200">Speed: {wind.speed} m/s</p>
          <p className="text-gray-200">Direction: {wind.deg}°</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Wind;
