"use client";

import { Button, Divider, Form, Input, Link, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setErrorMsg(error.message);
    } else {
      router.push("/home");
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e0e0e] px-4 py-10">
      <div className="flex w-full max-w-6xl rounded-3xl overflow-hidden shadow-xl border border-orange-400/30 bg-neutral-900">
        {/* Left: Form */}
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center gap-6">
          <h1 className="text-3xl font-semibold text-white flex items-center gap-2">
            <span role="img" aria-label="lock">🔐</span> Welcome Back
          </h1>

          <p className="text-sm text-white/60 mb-4">
            Sign in to access your dashboard and manage your account.
          </p>

          <Form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label htmlFor="email" className="text-sm text-white block mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 rounded-md bg-neutral-800 text-white placeholder-white/50 text-base 
                  border border-neutral-600 focus:border-orange-500 
                  focus:ring-2 focus:ring-orange-500 focus:outline-none 
                  transition-all duration-200 shadow-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="text-sm text-white block mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 rounded-md bg-neutral-800 text-white placeholder-white/50 text-base 
                  border border-neutral-600 focus:border-orange-500 
                  focus:ring-2 focus:ring-orange-500 focus:outline-none 
                  transition-all duration-200 shadow-sm"
              />
            </div>

            {errorMsg && (
              <p className="text-red-400 text-sm text-center">{errorMsg}</p>
            )}

            <Button
              className="w-full bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3 rounded-md transition-all"
              type="submit"
            >
              Sign In
            </Button>
          </Form>

          {/* Divider */}
          <Divider className="bg-white/20 my-4" />

          {/* OAuth */}
          {/* <div className="flex flex-col gap-3">
            <Button
              onClick={() => handleOAuthLogin("google")}
              className="w-full flex items-center justify-center gap-3 bg-white text-black font-medium shadow hover:bg-neutral-100 py-3 rounded-md transition-all"
            >
              <Icon icon="logos:google-icon" width={20} />
              Continue with Google
            </Button>
            <Button
              onClick={() => handleOAuthLogin("github")}
              className="w-full flex items-center justify-center gap-3 bg-white text-black font-medium shadow hover:bg-neutral-100 py-3 rounded-md transition-all"
            >
              <Icon icon="logos:github-icon" width={20} />
              Continue with GitHub
            </Button>
          </div> */}

          {/* Sign Up */}
          <p className="text-sm text-white/80 text-center mt-4">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-orange-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>

        {/* Right: Image */}
        {/* Right: Image */}
        <div className="hidden md:block w-1/2 relative">
          {/* Loading Skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 rounded-r-3xl z-10" />
          )}

          <Image
            src="/images/melon.png"
            alt="Fresh Fruits"
            className="object-cover w-full h-full transition-opacity duration-700"
            removeWrapper
            onLoad={() => setImageLoaded(true)}
          />
        </div>

      </div>
    </div>
  );
}
