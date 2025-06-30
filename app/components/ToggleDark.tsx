'use client'

import { useEffect, useState } from 'react'

export default function ToggleDark() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    const isDarkMode =
      storedTheme === 'dark' ||
      (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)

    document.body.classList.toggle('dark', isDarkMode)
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark ? 'dark' : 'light'
    document.body.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
    setIsDark(newTheme === 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 px-4 py-2 rounded-lg shadow-lg bg-gray-800 text-white dark:bg-white dark:text-black transition"
    >
      {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  )
}
