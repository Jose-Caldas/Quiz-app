'use client'

import { Dispatch, createContext, useReducer } from 'react'
import questions from '../data/questions'
import { IQuestion } from '@/components/types/IQuestion'

export enum ActionType {
  FETCH_QUESTIONS = 'FETCH_QUESTIONS',
  QUESTION_INCREMENT = 'QUESTION_INCREMENT',
  QUESTION_DECREMENT = 'QUESTION_DECREMENT',
  CHANGE_STAGE = 'CHANGE_STAGE',
}

const stages = ['Start', 'Playing', 'End']

export type InitialStateType = {
  questions: IQuestion[]
  currentQuestion: number
  gameStage: string
}

const initialState = {
  questions,
  currentQuestion: 0,
  gameStage: stages[0],
}

export type ReducerAction = {
  type: ActionType
}

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

const quizReducer = (
  state: typeof initialState,
  action: ReducerAction
): typeof initialState => {
  switch (action.type) {
    case ActionType.FETCH_QUESTIONS:
      return {
        ...state,
        questions,
      }

    case ActionType.QUESTION_INCREMENT:
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      }
    case ActionType.QUESTION_DECREMENT:
      return {
        ...state,
        currentQuestion: state.currentQuestion - 1,
      }

    case ActionType.CHANGE_STAGE:
      return {
        ...state,
        gameStage: stages[1],
      }

    default:
      throw new Error()
  }
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
