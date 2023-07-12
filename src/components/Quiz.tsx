'use client'

import { useContext, useState } from 'react'
import { QuizContext } from '@/context/QuizContext'
import Link from 'next/link'
import Image from 'next/image'
import Category from '../img/category.svg'
import { nextQuestion, prevQuestion } from './Actions'

export default function Quiz() {
  const { state, dispatch } = useContext(QuizContext)

  const question = state.questions[state.currentQuestion]

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
      <div>
        <h1 className="title mb-4">{question?.question}</h1>
        {question?.options.map((q, i) => (
          <div key={i}>
            <input
              className="mr-3"
              type="radio"
              id={`q${i}-option`}
              name="options"
              key={i}
            />

            <label htmlFor={`q${i}-option`}>{q}</label>
          </div>
        ))}
      </div>
      <div>
        <div className="flex gap-7">
          {/* <button onClick={handlePrevQuestion}>PREV</button> */}
          <button
            className="text-white bg-purple-600 hover:bg-purple-500 py-2 px-3 rounded-md"
            onClick={handleNextQuestion}
          >
            Continuar
          </button>
        </div>
        <Image src={Category} alt="Image to Playing" width={300} height={300} />
      </div>
      <Link href={`/`}>Home</Link>
      <Link href={`/result`}>Result</Link>
    </div>
  )
}
