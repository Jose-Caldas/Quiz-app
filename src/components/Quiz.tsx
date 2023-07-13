'use client'

import { useContext, useState } from 'react'
import { ActionType, QuizContext } from '@/context/QuizContext'
import Link from 'next/link'
import Image from 'next/image'
import Category from '../img/category.svg'
import { nextQuestion, prevQuestion } from './Actions'
import Option from './Option'
import { type } from 'os'

export default function Quiz() {
  const { state, dispatch } = useContext(QuizContext)

  const question = state.questions[state.currentQuestion]

  const onSelectOption = (option: string) => {
    dispatch({
      type: ActionType.CHECK_ANSWER,
      payload: { answer: question.answer, option },
    })
  }

  function handleNextQuestion() {
    if (state.currentQuestion < state.questions.length) {
      nextQuestion(dispatch)
    }
  }
  function handlePrevQuestion() {
    if (state.currentQuestion > 0) {
      prevQuestion(dispatch)
    }
  }

  return (
    <div className="container">
      <h1 className="title">Quiz Page</h1>
      {state.currentQuestion < state.questions.length && (
        <h2>
          Pergunta {state.currentQuestion + 1} de {state.questions.length}
        </h2>
      )}
      <div className="mb-6 mt-6 p-6">
        <h1 className="title mb-4">{question?.question}</h1>
        {question?.options.map((option) => (
          <Option
            key={option}
            option={option}
            answer={question.answer}
            selectOption={() => onSelectOption(option)}
          />
        ))}
      </div>
      <div>
        <button
          className={`text-white bg-purple-600 hover:bg-purple-500 py-2 px-3 rounded-md ${
            !state.answerSelected && 'opacity-60 cursor-not-allowed'
          }`}
          onClick={handleNextQuestion}
          disabled={!state.answerSelected}
          title={`${
            !state.answerSelected
              ? 'Escolha uma opção para continuar'
              : 'Continuar'
          }`}
        >
          Continuar
        </button>

        <Image src={Category} alt="Image to Playing" width={300} height={300} />
      </div>
      <Link href={`/`}>Home</Link>
      <Link href={`/result`}>Result</Link>
    </div>
  )
}
