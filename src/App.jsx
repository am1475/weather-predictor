import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import Footer from './components/Footer';
import Wind from './components/Wind';
import TemperatureVariation from './components/TemperatureVariation';
import Humidity from './components/Humidity';
import Pressure from './components/Pressure';
import { motion } from 'framer-motion';

const weatherColors = {
  Clear: 'bg-yellow-400', // Sunny
  Clouds: 'bg-gray-400', // Cloudy
  Rain: 'bg-blue-400', // Rainy
  Snow: 'bg-blue-200', // Snowy
  Thunderstorm: 'bg-indigo-600', // Stormy
  Drizzle: 'bg-blue-300', // Drizzly
  default: 'bg-gray-200', // Default color
};

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [animationKey, setAnimationKey] = useState(0);

  const fetchWeatherData = async (city) => {
    try {
      const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
      
      setWeather({
        city: weatherResponse.data.name,
        temperature: weatherResponse.data.main.temp,
        description: weatherResponse.data.weather[0].main,
        icon: `https://openweathermap.org/img/wn/${weatherResponse.data.weather[0].icon}.png`,
        wind: {
          speed: weatherResponse.data.wind.speed,
          deg: weatherResponse.data.wind.deg,
        },
        tempMin: weatherResponse.data.main.temp_min,
        tempMax: weatherResponse.data.main.temp_max,
        humidity: weatherResponse.data.main.humidity,
        pressure: weatherResponse.data.main.pressure,
      });

      const dailyForecast = forecastResponse.data.list.filter((item, index) => index % 8 === 0).map(item => ({
        date: item.dt_txt.split(' ')[0],
        temperature: item.main.temp,
        description: item.weather[0].main,
        icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
      }));

      setForecast(dailyForecast);
      setAnimationKey(prevKey => prevKey + 1); // Update the animation key to trigger re-render with animation
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    fetchWeatherData('New York'); // Fetch New York weather data on initial load
  }, []);

  const currentWeatherColor = weather ? weatherColors[weather.description] || weatherColors.default : weatherColors.default;

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header onSearch={fetchWeatherData} />
      <main className="flex-grow container mx-auto py-8">
        {weather && (
          <>
            <div className="text-center mb-4 text-gray-600">
              <p>This is an example for New York.</p>
              <p>Enter your location to get the current weather.</p>
            </div>
            <motion.div key={animationKey} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <CurrentWeather weather={weather} backgroundColor={currentWeatherColor} />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                <Wind wind={weather.wind} />
                <TemperatureVariation tempMin={weather.tempMin} tempMax={weather.tempMax} />
                <Humidity humidity={weather.humidity} />
                <Pressure pressure={weather.pressure} />
              </div>
            </motion.div>
          </>
        )}
        {forecast.length > 0 && (
          <motion.div key={animationKey + 1} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Forecast forecast={forecast} backgroundColor={currentWeatherColor} />
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
