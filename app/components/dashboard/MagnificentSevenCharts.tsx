'use client';

import { useEffect } from 'react';

const STOCKS = [
  { name: 'Apple', symbol: 'NASDAQ:AAPL' },
  { name: 'Microsoft', symbol: 'NASDAQ:MSFT' },
  { name: 'Google', symbol: 'NASDAQ:GOOGL' },
  { name: 'Amazon', symbol: 'NASDAQ:AMZN' },
  { name: 'NVIDIA', symbol: 'NASDAQ:NVDA' },
  { name: 'Meta', symbol: 'NASDAQ:META' },
  { name: 'Tesla', symbol: 'NASDAQ:TSLA' },
];

const getCurrentTheme = () => {
  if (typeof window === 'undefined') return 'dark';
  const stored = localStorage.getItem('theme');
  if (stored) return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const MagnificentSevenCharts = () => {
  useEffect(() => {
    const colorTheme = getCurrentTheme();

    STOCKS.forEach((stock) => {
      const containerId = `tv-chart-${stock.symbol}`;
      const container = document.getElementById(containerId);

      // ตรวจสอบไม่ให้แทรกซ้ำ
      if (!container || container.childElementCount > 0) return;

      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbol: stock.symbol,
        width: "100%",
        height: 220,
        locale: "en",
        dateRange: "1D",
        colorTheme,
        isTransparent: false,
        autosize: true,
        largeChartUrl: "",
      });

      container.appendChild(script);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {STOCKS.map((stock) => (
        <div
          key={stock.symbol}
          className="bg-gray-100 text-black dark:bg-gray-900 dark:text-white p-4 rounded-xl shadow transition-colors duration-300"
        >
          <h2 className="text-lg font-semibold mb-2">{stock.name}</h2>
          <div id={`tv-chart-${stock.symbol}`} className="h-[220px]" />
        </div>
      ))}
    </div>
  );
};

export default MagnificentSevenCharts;
