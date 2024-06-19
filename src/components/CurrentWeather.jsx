import React from 'react';
import { motion } from 'framer-motion';

const weatherAnimations = {
  Clear: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  },
  Clouds: {
    initial: { scale: 0.8 },
    animate: { scale: 1 },
    transition: { duration: 0.5 },
  },
  Rain: {
    initial: { y: -10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8 },
  },
};

const CurrentWeather = ({ weather, backgroundColor }) => {
  const animation = weatherAnimations[weather.description] || {};

  return (
    <motion.div
      className={`${backgroundColor} text-white shadow-lg rounded-lg p-6 m-4 max-w-md mx-auto hover:shadow-xl transition-shadow duration-300`}
      initial="initial"
      animate="animate"
      transition="transition"
      {...animation}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{weather.city}</h2>
          <p className="text-gray-200 capitalize">{weather.description}</p>
        </div>
        <img src={weather.icon} alt="weather icon" className="w-20 h-20" />
      </div>
      <div className="mt-4">
        <p className="text-4xl font-bold">{weather.temperature}°C</p>
      </div>
    </motion.div>
  );
};

export default CurrentWeather;
