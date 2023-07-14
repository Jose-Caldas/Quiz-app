import { useContext } from 'react'
import { QuizContext } from '@/context/quizContext'
import Wrong from '../img/wrong.svg'
import Check from '../img/check.svg'

type OptionProps = {
  option: string
  answer: string
  selectOption: () => void
}

import React from 'react'
import Image from 'next/image'

function Option({ option, answer, selectOption }: OptionProps) {
  const { state } = useContext(QuizContext)
  return (
    <div className="relative  flex flex-col" onClick={selectOption}>
      <p
        className={`text-zinc-600 mb-2 p-3 border bg-white text-base ${
          !state.answerSelected && 'hover:bg-zinc-100'
        }  rounded-md cursor-pointer transition-colors ${
          state.answerSelected && option === answer ? 'correct' : ''
        } ${state.answerSelected && option !== answer ? 'wrong' : ''}`}
      >
        {option}
        <span
          className={`opacity-0 absolute right-4 ${
            state.answerSelected && option === answer && 'opacity-100'
          }`}
        >
          <Image src={Check} alt="Check Icon" />
        </span>
        <span
          className={`opacity-0 absolute right-4 text-red-600 ${
            state.answerSelected && option !== answer && 'opacity-100'
          }`}
        >
          <Image src={Wrong} alt="Wrong Icon" />
        </span>
      </p>
    </div>
  )
}

export default Option
