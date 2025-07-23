'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import { Input } from '@heroui/react'
import { Button } from '@heroui/react'
import Link from 'next/link'

export default function SignUpPage() {
    const router = useRouter()
    const [errorMsg, setErrorMsg] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email') as string
        const password = form.get('password') as string

        const { error } = await supabase.auth.signUp({ email, password })

        if (error) {
            setErrorMsg(error.message)
        } else {
            router.push('/login')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-black px-4">
            <div className="max-w-md w-full bg-white/5 p-8 rounded-xl shadow-md backdrop-blur-md">
                <h2 className="text-2xl font-semibold text-white mb-6 text-center">🎉 Create your account</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <Input
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        variant="bordered"
                        classNames={{
                            base: "bg-white/10 border border-white/20 rounded-md",
                            inputWrapper: "bg-transparent",
                            label: "text-white text-sm",
                            input: "text-white placeholder:text-white/60 px-4 py-2",
                        }}
                    />

                    <Input
                        name="password"
                        type="password"
                        required
                        placeholder="Create a strong password"
                        variant="bordered"
                        classNames={{
                            base: "bg-white/10 border border-white/20 rounded-md",
                            inputWrapper: "bg-transparent",
                            label: "text-white text-sm",
                            input: "text-white placeholder:text-white/60 px-4 py-2",
                        }}
                    />


                    {errorMsg && <p className="text-red-400 text-sm text-center">{errorMsg}</p>}

                    <Button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-medium py-2" type="submit">
                        Sign Up
                    </Button>

                    <p className="text-sm text-white/80 text-center">
                        Already have an account?{' '}
                        <Link href="/login" className="text-orange-400 hover:underline">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
