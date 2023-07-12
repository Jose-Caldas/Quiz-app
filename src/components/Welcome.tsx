'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Quiz from '../img/quiz.svg'
import { QuizContext } from '@/context/QuizContext'
import { changeGameStage } from './Actions'

function Welcome() {
  const { state, dispatch } = useContext(QuizContext)

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h1 className="md:text-3xl text-2xl mb-5">Quiz de Programação</h1>
      <h2 className="md:text-2xl text-xl mb-3 text-zinc-800">Seja bem-vindo</h2>
      <p className="mb-4 md:text-base text-sm text-purple-900">
        Click no botão abaixo para começar:
      </p>
      <Link
        href={`/quiz`}
        className="bg-purple-700 text-white px-5 py-2 rounded-md hover:bg-purple-600 transition-colors"
      >
        Iniciar
      </Link>
      <Image
        src={Quiz}
        width={500}
        height={500}
        alt="Imagem de Início do Quiz"
      />
    </div>
  )
}

export default Welcome
