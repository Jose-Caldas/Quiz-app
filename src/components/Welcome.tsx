'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import Quiz from '../img/quiz.svg'
import { QuizContext } from '@/context/quizContext'
import { changeStage } from '../context/Actions'

function Welcome() {
  const { dispatch } = useContext(QuizContext)

  return (
    <div className="flex flex-col items-center justify-center p-5 anime">
      <h1 className="md:text-3xl text-2xl mb-5 text-purple-800">
        Quiz de Programação
      </h1>
      <h2 className="md:text-2xl text-xl mb-3 text-zinc-500">Seja bem-vindo</h2>
      <p className="mb-4 md:text-base text-sm text-purple-800">
        Click no botão abaixo para começar:
      </p>
      <button
        onClick={() => changeStage(dispatch)}
        className="bg-purple-700 text-white px-5 py-2 rounded-md hover:bg-purple-600 transition-colors"
        title="Iniciar"
      >
        Iniciar
      </button>
      <div className="max-w-[600px] max-h-[600px]">
        <Image src={Quiz} alt="Imagem de Início do Quiz" priority />
      </div>
    </div>
  )
}

export default Welcome
