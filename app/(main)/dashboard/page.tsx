'use client';

import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [weather, setWeather] = useState<any>(null);
  const [btc, setBtc] = useState<number | null>(null);
  const [quote, setQuote] = useState<string>('');
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    // ✅ Weather (ต้องใช้ API Key)
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Bangkok&units=metric&appid=3015727adf49f0b1d538332cec83a051`
    )
      .then(res => res.json())
      .then(data => setWeather(data));

    // ✅ Bitcoin Price
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
      .then(res => res.json())
      .then(data => setBtc(data.bitcoin.usd));

    // ✅ Quote of the Day
    fetch('https://zenquotes.io/api/random')
      .then(res => res.json())
      .then(data => setQuote(data[0].q));

    // ✅ Users from JSONPlaceholder
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 space-y-8">
      <h1 className="text-3xl font-bold">🌐 Dashboard</h1>

      {/* 🔹 Weather */}
      <div className="bg-gray-900 rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-2">🌤 Weather in Bangkok</h2>
        {weather ? (
          <div>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Description: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {/* 🔹 Bitcoin Price */}
      <div className="bg-gray-900 rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-2">💰 Bitcoin Price</h2>
        {btc !== null ? (
          <p>USD {btc.toLocaleString()}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {/* 🔹 Quote of the Day */}
      <div className="bg-gray-900 rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-2">🧠 Quote of the Day</h2>
        <p className="italic text-gray-300">"{quote || 'Loading...'}"</p>
      </div>

      {/* 🔹 Fake Users */}
      <div className="bg-gray-900 rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-4">🧑‍💼 Users (from JSONPlaceholder)</h2>
        {users.length > 0 ? (
          <ul className="space-y-1 text-sm text-gray-300">
            {users.slice(0, 5).map((user) => (
              <li key={user.id}>
                {user.name} – <span className="text-gray-400">{user.email}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
