import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faWind, faTint, faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const API_KEY = '014cdd640e6c94072836be2d578d152f';
    const city = 'Jakarta';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData({
          time: new Date(data.dt * 1000).toLocaleTimeString(),
          temperature: data.main.temp,
          conditions: data.weather[0].description,
          precipitation: '2%',
          humidity: `${data.main.humidity}%`,
          wind: `${data.wind.speed} km/h`,
        });
      })
      .catch((error) => console.error('Error fetching weather data:', error));
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center justify-center space-y-4 w-64">
      <div className="text-lg font-semibold">{weatherData.time}</div>
      
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faSun} className="text-yellow-400 text-2xl" />
        <span className="text-2xl font-semibold">{weatherData.temperature}°C</span>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <div className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faTint} className="text-blue-500" />
          <span className="text-sm">{weatherData.precipitation}</span>
        </div>
        <div className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faTemperatureHigh} className="text-red-500" />
          <span className="text-sm">{weatherData.humidity}</span>
        </div>
        <div className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faWind} className="text-gray-500" />
          <span className="text-sm">{weatherData.wind}</span>
        </div>
      </div>
      
      <div className="text-sm text-gray-500">{weatherData.conditions}</div>
    </div>
  );
};

export default WeatherWidget;
