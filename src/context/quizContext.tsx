'use client'

import { createContext, useReducer } from 'react'
import questions from '../data/questions'

const STAGES = ['Start', 'Playing', 'End']

type Props = {
  children: React.ReactNode
}

interface Questions {
  question: string
  options: string[]
  answer: string
}

const initialValues = {
  gameStage: STAGES[0],
  questions,
}

const quizReducer = (state: any, action: any) => {
  console.log(state, action)
  switch (action.type) {
    case 'CHANGE_STATE':
      return {
        gameStage: STAGES[1],
      }
    default:
      return state
  }
}

export const QuizContext = createContext(initialValues)

export const QuizContextProvider = ({ children }: Props) => {
  const value = useReducer(quizReducer, initialValues)
  return (
    <QuizContext.Provider value={{ gameStage: STAGES[0], questions }}>
      {children}
    </QuizContext.Provider>
  )
}
