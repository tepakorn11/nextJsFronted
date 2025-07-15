'use client';

import { useEffect } from 'react';

const COINS = [
  { name: 'Bitcoin', symbol: 'BINANCE:BTCUSDT' },
  { name: 'Ethereum', symbol: 'BINANCE:ETHUSDT' },
  { name: 'BNB', symbol: 'BINANCE:BNBUSDT' },
  { name: 'Solana', symbol: 'BINANCE:SOLUSDT' },
  { name: 'XRP', symbol: 'BINANCE:XRPUSDT' },
];

const getCurrentTheme = () => {
  if (typeof window === 'undefined') return 'dark';
  const stored = localStorage.getItem('theme');
  if (stored) return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const CryptoTopCharts = () => {
  useEffect(() => {
    const colorTheme = getCurrentTheme();

    COINS.forEach((coin) => {
      const containerId = `tv-chart-${coin.symbol}`;
      const container = document.getElementById(containerId);

      // หลีกเลี่ยงการซ้ำซ้อน
      if (!container || container.childElementCount > 0) return;

      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbol: coin.symbol,
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
      {COINS.map((coin) => (
        <div
          key={coin.symbol}
          className="bg-gray-100 text-black dark:bg-gray-900 dark:text-white p-4 rounded-xl shadow transition-colors duration-300"
        >
          <h2 className="text-lg font-semibold mb-2">{coin.name}</h2>
          <div id={`tv-chart-${coin.symbol}`} className="h-[220px]" />
        </div>
      ))}
    </div>
  );
};

export default CryptoTopCharts;
