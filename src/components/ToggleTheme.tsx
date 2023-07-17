'use client'
import { ThemeContext } from '@/context/themeContext'
import React, { useContext } from 'react'
import Sun from '../img/sun.svg'
import Moon from '../img/moon.svg'
import Image from 'next/image'

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <button
      onClick={toggleTheme}
      className="absolute top-4 right-7 md:top-[10%] md:right-[10%] bg-purple-800 rounded-md hover:bg-purple-600 transition-all p-2"
      title="Mudar tema"
    >
      {theme === 'dark' ? (
        <div className="flex gap-2 sm:gap-3 items-center text-zinc-100">
          <span className="text-sm md:text-base">Light</span>
          <Image src={Sun} alt="Sun Icon" width={20} height={20} />
        </div>
      ) : (
        <div className="flex gap-2 sm:gap-3 items-center text-zinc-100">
          <span className="text-sm md:text-base">Dark</span>
          <Image src={Moon} alt="Moon Icon" width={20} height={20} />
        </div>
      )}
    </button>
  )
}

export default ToggleTheme
