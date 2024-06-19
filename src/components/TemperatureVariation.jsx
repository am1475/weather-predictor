import React from 'react';
import { motion } from 'framer-motion';

const TemperatureVariation = ({ tempMin, tempMax }) => {
  return (
    <motion.div
      className="bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-lg rounded-lg p-6 m-4 hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Temperature Variation</h2>
          <p className="text-gray-200">Min: {tempMin}°C</p>
          <p className="text-gray-200">Max: {tempMax}°C</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TemperatureVariation;
