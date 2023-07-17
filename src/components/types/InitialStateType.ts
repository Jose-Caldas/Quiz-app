import { QuestionType } from './QuestionType'

export type InitialStateType = {
  questions: QuestionType[]
  currentQuestion: number
  gameStage: string
  score: number
  answerSelected: boolean
  message: string
}
