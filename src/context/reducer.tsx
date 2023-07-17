import questions from '../data/questions'

const stages = ['Start', 'Playing', 'End']

enum ActionType {
  FETCH_QUESTIONS = 'FETCH_QUESTIONS',
  NEXT_QUESTION = 'NEXT_QUESTION',
  CHANGE_STAGE = 'CHANGE_STAGE',
  REORDER_QUESTIONS = 'REORDER_QUESTIONS',
  NEW_GAME = 'NEW_GAME',
  CHECK_ANSWER = 'CHECK_ANSWER',
  CHANGE_MESSAGE = 'CHANGE_MESSAGE',
}

export type ReducerAction = {
  type: ActionType
  payload?: {
    answer?: string
    option?: string
    message?: string
  }
}

const initialState = {
  questions,
  currentQuestion: 0,
  gameStage: stages[0],
  score: 0,
  answerSelected: false,
  message: '',
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

    case ActionType.NEXT_QUESTION:
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

    case ActionType.CHANGE_MESSAGE:
      let newMessage = ''
      if (state.score * 10 === 100) {
        newMessage = 'Parabéns você acertou todas as perguntas!'
      }
      if (state.score * 10 < 100 && state.score * 10 > 50) {
        newMessage = 'Muito bem você acertou a maioria das perguntas!'
      }

      if (state.score * 10 <= 50) {
        newMessage =
          'Obrigado pela tentativa, mais acho que você pode melhorar essa nota!'
      }

      return {
        ...state,
        message: newMessage,
      }

    default:
      throw new Error()
  }
}

export { quizReducer, ActionType, initialState }
