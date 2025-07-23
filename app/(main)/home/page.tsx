'use client'
import GenerateQr from '@/components/qr/GenerateQr';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black transition-colors duration-300 py-10 px-4">
      <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Home Page
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
        <GenerateQr />
      </div>
    </div>
  );
}
