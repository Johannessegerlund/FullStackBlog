import React, { useEffect, useState } from 'react';

interface WeatherForecast {
  date: string;
  temperatureC: string;
  summary: string;
}

const WeatherForecastPage: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherForecast[]>([]);

  useEffect(() => {
    fetch('/api/weather')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data);
        setWeatherData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log('Weather data:', weatherData);

  return (
    <div>
      <h1>Weather Forecast</h1>
      {Array.isArray(weatherData) ? (
        weatherData.map((forecast, index) => (
          <div key={index}>
            <p>Date: {forecast.date}</p>
            <p>Temperature: {forecast.temperatureC}</p>
            <p>Summary: {forecast.summary}</p>
          </div>
        ))
      ) : (
        <p>No weather data available.</p>
      )}
    </div>
  );
};

export default WeatherForecastPage;
