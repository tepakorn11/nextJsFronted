'use client'

import "@/globals.css"
import { Geist, Geist_Mono } from "next/font/google"
import { HeroUIProvider } from "@heroui/react"
import ReduxProvider from "./redux/provider"
import ToggleDark from "@/components/ToggleDark"

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
      <head>
        <title>web app</title>
        <meta name="description" content="เว็บวับ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Teepakorn" />
      </head>
      <body className={`relative min-h-screen ${geistSans.variable} ${geistMono.variable} font-sans`}>
        <HeroUIProvider>
          <ReduxProvider>
            {children}
          </ReduxProvider>
        </HeroUIProvider>
      </body>
    </html>
  )
}
