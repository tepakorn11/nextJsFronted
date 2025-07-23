'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '@/redux/store';
import { fetchMenu } from '@/redux/thunks/menuThunk';
import AuthButton from '@/components/AuthButton'; 

export default function ResponsiveNavbar() {
  const dispatch = useDispatch<AppDispatch>();
  const { data: menu } = useSelector((state: RootState) => state.menu);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white px-4 py-2 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center rounded-full bg-white/10 backdrop-blur-md px-4 py-2">
        <div className="flex items-center gap-2">
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
            <Icon icon={menuOpen ? 'mdi:close' : 'mdi:menu'} width={24} />
          </button>
          <div className="flex items-center gap-1">
            <Icon icon="mdi:alpha-a-circle" width={32} />
            <span className="md:hidden font-medium">ACME</span>
          </div>
        </div>

        <div className="hidden md:flex space-x-6">
          {menu.map((item) => (
            <Link
              key={item.id}
              href={`/${item.name.toLowerCase().replace(/ /g, '-')}`}
              className="hover:text-white text-white/70 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex">
          <AuthButton />
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3 rounded-xl bg-white/10 p-4 backdrop-blur-md max-h-[40vh] overflow-y-auto">
          {menu.map((item) => (
            <Link
              key={item.id}
              href={`/${item.name.toLowerCase().replace(/ /g, '-')}`}
              className="block text-white/90 py-1 border-b border-white/10"
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4">
            <AuthButton />
          </div>
        </div>
      )}
    </nav>
  );
}
