import Image from 'next/image'
import React from 'react'
import Welldone from '../img/welldone.svg'
import { useContext } from 'react'
import { QuizContext } from '@/context/QuizContext'
import { newGame } from './Actions'

const Result = () => {
  const { state, dispatch } = useContext(QuizContext)
  return (
    <div className="container">
      <h1 className="title mb-6">Game Over!</h1>
      <p>
        Pontuação:{' '}
        <span className="text-purple-800 font-bold">{state.score}</span>
      </p>
      <p>
        Você acertou{' '}
        <span className="text-purple-800 font-bold">{state.score}</span> de{''}
        <span className="text-purple-800 font-bold mx-1">
          {state.questions.length}
        </span>
        perguntas.
      </p>
      <Image src={Welldone} width={400} height={300} alt="Game Over image" />
      <button
        onClick={() => newGame(dispatch)}
        className=" mt-7 w-48 text-white bg-purple-600 hover:bg-purple-500 py-2 px-3 rounded-md"
      >
        Reiniciar
      </button>
    </div>
  )
}

export default Result
