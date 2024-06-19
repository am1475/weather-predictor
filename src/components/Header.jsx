import React, { useState } from 'react';

const Header = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2 md:mb-0">Weather Dashboard</h1>
        <form onSubmit={handleSearch} className="flex w-full md:w-auto">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search for a city..."
            className="w-full md:w-auto p-2 rounded-l-md text-gray-800"
          />
          <button type="submit" className="p-2 bg-yellow-500 text-gray-800 rounded-r-md">Search</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
