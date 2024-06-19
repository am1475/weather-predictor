import React from 'react';

const Welcome = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg rounded-lg p-6 m-4 max-w-md mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to WeatherApp</h1>
      <p className="text-lg mb-4">Get the latest weather updates for any city in the world.</p>
      <p className="text-md">Enter a city name in the search bar above to get started.</p>
    </div>
  );
};

export default Welcome;
