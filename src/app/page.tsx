'use client'
import Question from '@/components/Question'
import Welcome from '@/components/Welcome'
import { QuizContext, QuizContextProvider } from '@/context/quizContext'
import { useContext } from 'react'

export default function Home() {
  const { gameStage, questions } = useContext(QuizContext)

  return (
    <QuizContextProvider>
      <main className="flex min-h-screen items-center justify-center">
        {gameStage === 'Start' && <Welcome />}
        {gameStage === 'Playing' && <Question />}
      </main>
    </QuizContextProvider>
  )
}
