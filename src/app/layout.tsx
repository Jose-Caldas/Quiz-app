import { QuizContextProvider } from '@/context/quizContext'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/context/themeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quiz Application',
  description: 'A small quiz application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-bgColor">
        <QuizContextProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </QuizContextProvider>
      </body>
    </html>
  )
}
