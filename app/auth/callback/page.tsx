"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"

export default function AuthCallbackPage() {
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.replace("/home") 
      } else {
        router.replace("/login")
      }
    })
  }, [])

  return <p className="text-white text-center p-8">กำลังเข้าสู่ระบบ...</p>
}
