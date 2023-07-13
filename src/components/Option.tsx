import { useContext } from 'react'
import { QuizContext } from '@/context/QuizContext'

type OptionProps = {
  option: string
  answer: string
  selectOption: () => void
}

import React from 'react'

function Option({ option, answer, selectOption }: OptionProps) {
  const { state } = useContext(QuizContext)
  return (
    <div className="flex flex-col" onClick={selectOption}>
      <p
        className={`text-zinc-600 mb-2 p-3 border bg-white text-base ${
          !state.answerSelected && 'hover:bg-zinc-100'
        }  rounded-md cursor-pointer transition-colors ${
          state.answerSelected && option === answer ? 'correct' : ''
        } ${state.answerSelected && option !== answer ? 'wrong' : ''}`}
      >
        {option}
      </p>
    </div>
  )
}

export default Option
