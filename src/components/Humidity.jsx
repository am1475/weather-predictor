import React from 'react';
import { motion } from 'framer-motion';

const Humidity = ({ humidity }) => {
  return (
    <motion.div
      className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white shadow-lg rounded-lg p-6 m-4 hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Humidity</h2>
          <p className="text-gray-200">{humidity}%</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Humidity;
