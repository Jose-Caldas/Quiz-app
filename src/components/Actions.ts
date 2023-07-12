import { Dispatch } from 'react'
import { ActionType, ReducerAction } from '../context/QuizContext'

const nextQuestion = (dispatch: Dispatch<ReducerAction>) => {
  dispatch({ type: ActionType.QUESTION_INCREMENT })
}

const prevQuestion = (dispatch: Dispatch<ReducerAction>) => {
  dispatch({ type: ActionType.QUESTION_DECREMENT })
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

// const checkAnswer = (dispatch: Dispatch<ReducerAction>) => {
//   dispatch({
//     type: ActionType.CHECK_ANSWER,
//     payload: {},
//   })
// }

export {
  nextQuestion,
  prevQuestion,
  changeStage,
  reorderQuestions,
  newGame,
  //   checkAnswer,
}
