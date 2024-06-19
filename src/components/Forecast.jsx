import React from 'react';
import { motion } from 'framer-motion';

const Forecast = ({ forecast, backgroundColor }) => {
  return (
    <div className={`${backgroundColor} text-white shadow-lg rounded-lg p-6 m-4`}>
      <h2 className="text-2xl font-bold text-center mb-4">Forecast</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {forecast.map((day, index) => (
          <motion.div
            key={index}
            className="bg-white text-gray-800 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <p className="font-bold">{day.date}</p>
            <img src={day.icon} alt="weather icon" className="w-12 h-12 mx-auto my-2" />
            <p className="text-xl font-semibold">{day.temperature}°C</p>
            <p className="text-gray-600 capitalize">{day.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
