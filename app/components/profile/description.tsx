'use client';

import React from 'react';
import type { IProfile } from '@/interface/profile';

interface DescriptionProps {
  profile: IProfile;
}

export default function Description({ profile }: DescriptionProps) {
  const fullName = `${profile.first_name ?? ''} ${profile.last_name ?? ''}`.trim();
  const displayName = fullName || 'ไม่ระบุชื่อ';

  return (
    <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-6 md:p-10 shadow-xl border border-white/10 w-full">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Avatar */}
        <div className="shrink-0">
          {profile.avatar?.trim() ? (
            <img
              src={`/images/${profile.avatar}`}
              alt="Avatar"
              className="w-full max-w-[150px] aspect-square rounded-full object-cover border-4 border-white/10"
            />
          ) : (
            <div className="w-full max-w-[150px] aspect-square rounded-full bg-white/10 flex items-center justify-center text-4xl text-white">
              {displayName.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white">{displayName}</h2>

          {profile.role && (
            <p className="text-orange-400 text-sm">{profile.role}</p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm text-white/80">
            {profile.location && (
              <div>
                <p className="font-semibold">📍 Location</p>
                <p>{profile.location}</p>
              </div>
            )}
            {profile.created_at && (
              <div>
                <p className="font-semibold">📅 Joined</p>
                <p>{new Date(profile.created_at).toLocaleDateString('en-GB')}</p>
              </div>
            )}
            {profile.email && (
              <div>
                <p className="font-semibold">📧 Email</p>
                <p>{profile.email}</p>
              </div>
            )}
            {profile.status && (
              <div>
                <p className="font-semibold">✅ Status</p>
                <p>{profile.status}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
