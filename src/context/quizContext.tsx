'use client'

import { Dispatch, createContext, useReducer } from 'react'
import { ReducerAction, initialState, quizReducer } from './reducer'
import { InitialStateType } from '@/components/types/InitialStateType'

export interface QuizContextProps {
  state: InitialStateType
  dispatch: Dispatch<ReducerAction>
}

const defaultValue = {
  state: initialState,
  dispatch: () => null,
}

type Props = {
  children: React.ReactNode
}

export const QuizContext = createContext<QuizContextProps>(defaultValue)

export const QuizContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(quizReducer, initialState)

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  )
}
