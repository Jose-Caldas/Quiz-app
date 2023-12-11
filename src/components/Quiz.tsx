'use client'

import { useContext } from 'react'
import { QuizContext } from '@/context/quizContext'
import Link from 'next/link'
import Image from 'next/image'
import Category from '../img/category.svg'
import { nextQuestion } from '../context/Actions'
import Option from './Option'
import { ActionType } from '@/context/reducer'

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

  return (
    <div className="flex gap-6 md:gap-10 md:flex-row flex-col md:max-w-5xl w-full p-6 anime">
      <div className="md:w-[500px]">
        <h1 className="title">Quiz de Programação</h1>
        <div className="border p-6 rounded-md mb-5">
          {state.currentQuestion < state.questions.length && (
            <h2 className="text-zinc-500 mb-2">
              Pergunta {state.currentQuestion + 1} de {state.questions.length}
            </h2>
          )}
          <div className="">
            <h1 className="title">{question?.question}</h1>
            {question?.options.map((option) => (
              <Option
                key={option}
                option={option}
                answer={question.answer}
                selectOption={() => onSelectOption(option)}
              />
            ))}
          </div>
          <div className="flex items-center justify-center mt-3">
            <button
              className={`text-white w-full sm:w-44 bg-purple-600 hover:bg-purple-500 py-2 px-3 rounded-md ${
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
          </div>
        </div>
      </div>
      <div className="flex w-auto  items-center justify-center">
        <Image
          className="m-auto"
          src={Category}
          alt="Image to Playing"
          style={{ width: 400, height: 400 }}
        />
      </div>
    </div>
  )
}
