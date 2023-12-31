'use client'
import React, { useState, createContext, useEffect } from 'react'

type Theme = 'light' | 'dark'
type ThemeContext = { theme: Theme; toggleTheme?: () => void }

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext)

interface Props {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>('light')
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

    document.documentElement.className = ''
    document.documentElement.classList.add(`theme-${theme}`)
  }

  useEffect(() => {
    const usePreference =
      !!window.matchMedia &&
      window.matchMedia('prefer-color-scheme: dark').matches

    const mode: Theme =
      (window.localStorage.getItem('theme') as Theme) ||
      (usePreference ? 'dark' : 'light')

    setTheme(mode)

    document.documentElement.className = ''
    document.documentElement.classList.add(`theme-${theme}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    window.localStorage.setItem('theme', theme)
    document.documentElement.className = ''
    document.documentElement.classList.add(`theme-${theme}`)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
