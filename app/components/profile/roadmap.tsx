'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import { IRoadMap } from '@/interface/profile';

interface RoadmapItem {
  roadmap: IRoadMap[];
}

export default function Roadmap({ roadmap }: RoadmapItem) {
  return (
    <div className="w-full max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-8 text-center text-white">
        🛣️ เส้นทางของฉัน (2022–2025)
      </h2>
      <ol className="relative border-l border-gray-700">
        {roadmap.map((item, index) => (
          <li key={index} className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-orange-600 rounded-full -left-5 ring-4 ring-gray-900">
              <Icon icon={item.icon} className="text-white" width={20} height={20} />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
              {item.year} - {item.title}
            </h3>
            <p className="mb-2 text-sm text-gray-300">{item.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
