import { getWeatherData } from '../services/WeatherService';
import React, { useState } from 'react';
import axios from 'axios';
import image from '../assesst/umbrella_image.webp'

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await getWeatherData(city);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData ? (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} °F </p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      ):(
        <div>
          <img src={image} alt="umbrella_image"/>
          </div>
      )}
    </div>
  );
};

export default Weather;

