import React from 'react';
import { motion } from 'framer-motion';

const Pressure = ({ pressure }) => {
  return (
    <motion.div
      className="bg-gradient-to-r from-purple-400 to-red-500 text-white shadow-lg rounded-lg p-6 m-4 hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Pressure</h2>
          <p className="text-gray-200">{pressure} hPa</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Pressure;
