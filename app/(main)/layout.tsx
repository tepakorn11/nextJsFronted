'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import ToggleDark from '@/components/ToggleDark'; 

const Navbar = dynamic(() => import('@/components/navbar/pages'), { ssr: false });

export default function layoutMain({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <ToggleDark />
      <Navbar />
      <main className="flex-1 px-6 py-10">
        {children}
      </main>
    </div>
  );
}
