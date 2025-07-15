'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchWeather } from '@/redux/thunks/weatherThunk';
import WeatherCitySearch from '@/components/dashboard/WeatherCitySearch';
import CryptoTopCharts from '@/components/dashboard/CryptoTopCharts';
import MagnificentSevenCharts from '@/components/dashboard/MagnificentSevenCharts';
import UserList from '@/components/dashboard/UserList';

export default function DashboardPage() {
    const dispatch = useAppDispatch();
    const weather = useAppSelector((state) => state.weather.data);
    const weatherLoading = useAppSelector((state) => state.weather.loading);
    const weatherError = useAppSelector((state) => state.weather.error);

    useEffect(() => {
        dispatch(fetchWeather('Bangkok'));
    }, [dispatch]);

    const handleCitySearch = (city: string) => {
        dispatch(fetchWeather(city));
    };

    return (
        <div className="min-h-screen px-6 py-10 space-y-8 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
            <h1 className="text-3xl font-bold">🌐 Dashboard</h1>

            {/* 🔹 Weather */}
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
                    <WeatherCitySearch onSearch={handleCitySearch} />
                </div>
            </div>

            {/* 🔹 Crypto Charts */}
            <div className="rounded-xl p-6 shadow bg-gray-100 text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold mt-2">📊 Top 5 Crypto Charts</h2>
                </div>
                <CryptoTopCharts />
            </div>

            {/* 🔹 Magnificent Seven Stocks */}
            <div className="rounded-xl p-6 shadow bg-gray-100 text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold mt-2">📊 7 Magnificent Stocks</h2>
                </div>
                <MagnificentSevenCharts />
            </div>

            {/* 🔹 Animal Avatar Users */}
            <div className="rounded-xl p-6 shadow bg-gray-100 text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
                <h2 className="text-xl font-semibold mb-4">🐾 Animal Avatars – Users</h2>
                <UserList />
            </div>

        </div>
    );
}
