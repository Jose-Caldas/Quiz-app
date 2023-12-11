import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Welldone from '../img/welldone.svg'
import { useContext } from 'react'
import { QuizContext } from '@/context/quizContext'
import { newGame, newMessage } from '../context/Actions'

const Result = () => {
  const { state, dispatch } = useContext(QuizContext)

  useEffect(() => {
    newMessage(dispatch)
  }, [dispatch])

  return (
    <div className="container anime">
      <h1 className="title mb-6">Resultado!</h1>
      <p className="text-zinc-500">
        Pontuação:{' '}
        <span className="text-purple-800 font-bold">{state.score * 10}</span>
      </p>
      <p className="text-zinc-500">
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
      <p className="mt-5 text-xl text-purple-800">{state.message}</p>
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
