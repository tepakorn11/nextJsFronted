'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '@/redux/store';
import { fetchMenu } from '@/redux/thunks/menuThunk'; // ✅ thunk ที่คุณเขียนไว้แล้ว

export default function ResponsiveNavbar() {
  const dispatch = useDispatch<AppDispatch>();
  const { data: menu, loading } = useSelector((state: RootState) => state.menu);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    
    dispatch(fetchMenu());
  }, [dispatch]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white px-4 py-2 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between rounded-full bg-white/10 backdrop-blur-md px-4 py-2">
        {/* Toggle + Logo */}
        <div className="flex items-center gap-2">
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
            <Icon icon={menuOpen ? 'mdi:close' : 'mdi:menu'} width={24} />
          </button>
          <div className="flex items-center gap-1">
            <Icon icon="mdi:alpha-a-circle" width={32} />
            <span className="md:hidden font-medium">ACME</span>
          </div>
        </div>

        {/* Desktop Menu */}
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

        {/* Login */}
        <div className="hidden md:flex">
          <Link href="/login">
            <button className="px-4 py-1 rounded-full bg-white/10 hover:bg-white/20 transition text-sm">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
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
          <Link href="/login">
            <div className="mt-4">
              <button className="w-full py-2 rounded-full bg-white/10 hover:bg-white/20 transition text-white">
                Login
              </button>
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
}
