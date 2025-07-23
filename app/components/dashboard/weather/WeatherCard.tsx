'use client';

import WeatherCitySearch from './WeatherCitySearch';

type Props = {
  weather: any;
  weatherLoading: boolean;
  weatherError: string | null;
  onSearch: (city: string) => void;
};

export default function WeatherCard({ weather, weatherLoading, weatherError, onSearch }: Props) {
  return (
    <div className="rounded-xl p-6 shadow bg-gray-100 text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <h2 className="text-xl font-semibold mb-2">
        🌤 Weather in {weather?.city || '...'}
      </h2>

      {weatherLoading ? (
        <p>Loading...</p>
      ) : weatherError ? (
        <p className="text-red-400">Error: {weatherError}</p>
      ) : weather ? (
        <div>
          <p>Temperature: {weather.temperature}</p>
          <p>Feels Like: {weather.feels_like}</p>
          <p>Humidity: {weather.humidity}</p>
          <p>Description: {weather.weather_description}</p>
          <p>Wind Speed: {weather.wind_speed}</p>
          <p>Cloudiness: {weather.cloudiness}</p>
        </div>
      ) : (
        <p>No weather data</p>
      )}

      <div className="pt-4 border-t border-gray-700 mt-4">
        <WeatherCitySearch onSearch={onSearch} />
      </div>
    </div>
  );
}
