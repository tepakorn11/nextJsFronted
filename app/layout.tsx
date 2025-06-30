'use client'

import "@/globals.css"
import { Geist, Geist_Mono } from "next/font/google"
import { HeroUIProvider } from "@heroui/react"
import ReduxProvider from "./redux/provider"
import ToggleDark from "@/components/ToggleDark" // ✅ เพิ่มตรงนี้

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`relative min-h-screen ${geistSans.variable} ${geistMono.variable} font-sans`}>
        <ToggleDark /> 
        <HeroUIProvider>
          <ReduxProvider>
            {children}
          </ReduxProvider>
        </HeroUIProvider>
      </body>
    </html>
  )
}
