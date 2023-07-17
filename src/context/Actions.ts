import { Dispatch } from 'react'
import { ActionType, ReducerAction } from './reducer'

const nextQuestion = (dispatch: Dispatch<ReducerAction>) => {
  dispatch({ type: ActionType.NEXT_QUESTION })
}

const changeStage = (dispatch: Dispatch<ReducerAction>) => {
  dispatch({ type: ActionType.CHANGE_STAGE })
}

const reorderQuestions = (dispatch: Dispatch<ReducerAction>) => {
  dispatch({ type: ActionType.REORDER_QUESTIONS })
}

const newGame = (dispatch: Dispatch<ReducerAction>) => {
  dispatch({ type: ActionType.NEW_GAME })
}
const newMessage = (dispatch: Dispatch<ReducerAction>) => {
  dispatch({ type: ActionType.CHANGE_MESSAGE })
}

export { nextQuestion, changeStage, reorderQuestions, newGame, newMessage }
