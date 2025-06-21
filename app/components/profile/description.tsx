'use client';

import React from 'react';
import type { IProfile } from '@/interface/profile'


interface DescriptionProps {
    profile: IProfile
}

export default function Description({ profile }: DescriptionProps) {
    return (
        <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-6 md:p-10 shadow-xl border border-white/10 w-full">
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <div className="shrink-0">
                    {profile.avatar?.trim() && (
                        <img
                            src={profile.avatar}
                            alt="Avatar"
                            className="w-full max-w-[150px] aspect-square rounded-full object-cover"
                        />
                    )}

                </div>

                {/* Info */}
                <div className="flex-1 space-y-3 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white">{profile.name}</h2>
                    <p className="text-orange-400 text-sm">@{profile.username}</p>
                    <p className="text-gray-300">{profile.bio}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm text-white/80">
                        <div>
                            <p className="font-semibold">📍 Location</p>
                            <p>{profile.location}</p>
                        </div>
                        <div>
                            <p className="font-semibold">📅 Joined</p>
                            <p>{new Date(profile.joined_at).toLocaleDateString('en-GB')}</p>
                        </div>
                        <div>
                            <p className="font-semibold">📧 Email</p>
                            <p>{profile.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
