'use client';

import { useState } from 'react';

type Props = {
  onSearch: (city: string) => void;
};

export default function WeatherCitySearch({ onSearch }: Props) {
  const [inputCity, setInputCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputCity.trim();
    if (trimmed) {
      onSearch(trimmed);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 mb-6">
      <input
        type="text"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        placeholder="Enter city name..."
        className="p-2 rounded bg-gray-800 text-white border border-gray-600"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
      >
        Search
      </button>
    </form>
  );
}
