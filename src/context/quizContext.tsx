'use client'

import { Dispatch, createContext, useReducer } from 'react'
import questions from '../data/questions'
import { IQuestion } from '@/components/types/IQuestion'

export enum ActionType {
  FETCH_QUESTIONS = 'FETCH_QUESTIONS',
  QUESTION_INCREMENT = 'QUESTION_INCREMENT',
  QUESTION_DECREMENT = 'QUESTION_DECREMENT',
  CHANGE_STAGE = 'CHANGE_STAGE',
  REORDER_QUESTIONS = 'REORDER_QUESTIONS',
  NEW_GAME = 'NEW_GAME',
  CHECK_ANSWER = 'CHECK_ANSWER',
}

const stages = ['Start', 'Playing', 'End']

export type InitialStateType = {
  questions: IQuestion[]
  currentQuestion: number
  gameStage: string
  score: number
  answerSelected: boolean
}

const initialState = {
  questions,
  currentQuestion: 0,
  gameStage: stages[0],
  score: 0,
  answerSelected: false,
}

export type ReducerAction = {
  type: ActionType
  payload?: {
    answer: string
    option: string
  }
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
    case ActionType.CHANGE_STAGE:
      return {
        ...state,
        gameStage: stages[1],
      }

    case ActionType.QUESTION_INCREMENT:
      const nextQuestion = state.currentQuestion + 1
      let endGame = false
      if (!questions[nextQuestion]) {
        endGame = true
      }
      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? stages[2] : state.gameStage,
        answerSelected: false,
      }
    case ActionType.QUESTION_DECREMENT:
      const prevQuestion = state.currentQuestion - 1
      return {
        ...state,
        currentQuestion: prevQuestion,
      }

    case ActionType.REORDER_QUESTIONS:
      const reorderedQuestions = questions.sort(() => {
        return Math.random() - 0.5
      })
      return {
        ...state,
        questions: reorderedQuestions,
      }

    case ActionType.NEW_GAME:
      return initialState

    case ActionType.CHECK_ANSWER:
      if (state.answerSelected) return state

      const answer = action.payload?.answer
      const option = action.payload?.option
      let correctAnswer = 0

      if (answer === option) correctAnswer = 1
      return {
        ...state,
        score: state.score + correctAnswer,
        answerSelected: true,
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
