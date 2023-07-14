import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Welldone from '../img/welldone.svg'
import { useContext } from 'react'
import { QuizContext } from '@/context/quizContext'
import { newGame } from './Actions'

const Result = () => {
  const { state, dispatch } = useContext(QuizContext)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (state.score * 10 === 100)
      return setMessage('Parabéns você acertou todas as perguntas!')
    if (state.score * 10 < 100 && state.score * 10 > 50)
      return setMessage('Muito bem você acertou a maioria das perguntas!')
    if (state.score * 10 <= 50)
      return setMessage(
        'Obrigado pela tentativa, mais acho que você pode melhorar essa nota!'
      )
  }, [state.score])

  return (
    <div className="container">
      <h1 className="title mb-6">Game Over!</h1>
      <p>
        Pontuação:{' '}
        <span className="text-purple-800 font-bold">{state.score * 10}</span>
      </p>
      <p>
        Você acertou{' '}
        <span className="text-purple-800 font-bold">{state.score}</span> de
        {''}
        <span className="text-purple-800 font-bold mx-1">
          {state.questions.length}
        </span>
        perguntas.
      </p>
      <div className="max-w-[400px] max-h-[400px]">
        <Image src={Welldone} alt="Game Over image" priority />
      </div>
      <p className="mt-5 text-xl text-purple-800">{message}</p>
      <button
        onClick={() => newGame(dispatch)}
        title="Reiniciar"
        className=" mt-7 w-48 text-white bg-purple-600 hover:bg-purple-500 py-2 px-3 rounded-md"
      >
        Reiniciar
      </button>
    </div>
  )
}

export default Result
