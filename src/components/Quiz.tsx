'use client'

import { useContext, useState } from 'react'
import { ActionType, QuizContext } from '@/context/QuizContext'
import Link from 'next/link'
import Image from 'next/image'
import Category from '../img/category.svg'
import Welldone from '../img/welldone.svg'
import { changeGameStage, nextQuestion, prevQuestion } from './Actions'

export default function Quiz() {
  const { state, dispatch } = useContext(QuizContext)

  const question = state.questions[state.currentQuestion]

  return (
    <div className="container">
      <h1 className="title">Quiz Page</h1>
      <h2>
        Pergunta {state.currentQuestion + 1} de {state.questions.length}
      </h2>
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
          <button onClick={() => prevQuestion(dispatch)}>PREV</button>
          <button onClick={() => nextQuestion(dispatch)}>NEXT</button>
        </div>
        <Image src={Category} alt="Image to Playing" width={300} height={300} />
      </div>
      <Link href={`/`}>Home</Link>
      <Link href={`/result`}>Result</Link>
    </div>
  )
}
