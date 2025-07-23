
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';

export default function AuthButton() {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data?.session));
    const { data: authListener } = supabase.auth.onAuthStateChange((_, session) =>
      setSession(session)
    );
    return () => authListener?.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    location.href = '/login';
  };

  return session ? (
    <button
      onClick={handleLogout}
      className="px-4 py-1 rounded-full bg-red-600 hover:bg-red-500 text-white text-sm"
    >
      Logout
    </button>
  ) : (
    <Link href="/login">
      <button className="px-4 py-1 rounded-full bg-white/10 hover:bg-white/20 text-sm">
        Login
      </button>
    </Link>
  );
}
