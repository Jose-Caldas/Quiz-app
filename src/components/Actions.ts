import { Dispatch } from 'react'
import { ActionType, ReducerAction } from '../context/QuizContext'

const nextQuestion = (dispatch: Dispatch<ReducerAction>) => {
  dispatch({ type: ActionType.QUESTION_INCREMENT })
}

const prevQuestion = (dispatch: Dispatch<ReducerAction>) => {
  dispatch({ type: ActionType.QUESTION_DECREMENT })
}

const changeGameStage = (dispatch: Dispatch<ReducerAction>) => {
  dispatch({ type: ActionType.CHANGE_STAGE })
}

export { nextQuestion, prevQuestion, changeGameStage }
