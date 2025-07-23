'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchWeather } from '@/redux/thunks/weatherThunk';
import CryptoTopCharts from '@/components/dashboard/CryptoTopCharts';
import MagnificentSevenCharts from '@/components/dashboard/MagnificentSevenCharts';
import UserList from '@/components/dashboard/UserList';
import WeatherCard from '@/components/dashboard/weather/WeatherCard';


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
            <WeatherCard
                weather={weather}
                weatherLoading={weatherLoading}
                weatherError={weatherError}
                onSearch={handleCitySearch}
            />

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
