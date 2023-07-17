'use client'
import React, { useContext, useEffect } from 'react'
import { QuizContext } from '@/context/quizContext'
import { reorderQuestions } from '../context/Actions'
import Welcome from './Welcome'
import Quiz from './Quiz'
import Result from './Result'

function App() {
  const { state, dispatch } = useContext(QuizContext)

  useEffect(() => {
    reorderQuestions(dispatch)
  }, [dispatch])

  return (
    <div>
      {state.gameStage === 'Start' && <Welcome />}
      {state.gameStage === 'Playing' && <Quiz />}
      {state.gameStage === 'End' && <Result />}
    </div>
  )
}

export default App
