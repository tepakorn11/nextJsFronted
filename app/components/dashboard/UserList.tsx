'use client';

import { useEffect, useState } from 'react';
import { ITeam } from '@/interface/myteam'

export default function UserList() {
    const [users, setUsers] = useState<ITeam[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!res.ok) throw new Error('Failed to fetch users');
                const data = await res.json();
                setUsers(data);
            } catch (err) {
                setError('Error fetching users');
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    if (loading) return <p>Loading users...</p>;
    if (error) return <p className="text-red-400">{error}</p>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {users.slice(0, 9).map((user) => (
                <div key={user.id} className="bg-gray-800 p-4 rounded-xl shadow space-y-2">
                    <div className="flex items-center space-x-4">
                        <img
                            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${user.username}`}
                            alt={user.name}
                            className="w-16 h-16 rounded-full bg-white p-1"
                        />
                        <div>
                            <p className="font-bold text-white">{user.name}</p>
                            <p className="text-gray-400 text-sm">{user.email}</p>
                        </div>
                    </div>

                    <div className="text-sm text-gray-300 mt-2 space-y-1">
                        <p>📍 {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
                        <p>💼 {user.company.name}</p>
                        <p>🌐 <a href={`http://${user.website}`} target="_blank" className="text-blue-400 hover:underline">{user.website}</a></p>
                        <p>☎️ {user.phone}</p>
                    </div>
                </div>
            ))}
        </div>

    );
}
