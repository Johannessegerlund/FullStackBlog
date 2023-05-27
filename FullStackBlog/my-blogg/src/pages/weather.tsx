import { useEffect, useState } from 'react';
import { fetchWeatherForecasts } from '../../api';

type WeatherForecast = {
  date: string;
  temperatureC: number;
  summary: string;
};

const Weather: React.FC = () => {
  const [forecasts, setForecasts] = useState<WeatherForecast[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherForecasts();
        setForecasts(data);
      } catch (error) {
        setError('Failed to fetch weather forecasts');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Weather Forecasts</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {forecasts.map((forecast, index) => (
            <li key={index}>
              Date: {forecast.date}, Temperature: {forecast.temperatureC}°C, Summary: {forecast.summary}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Weather;