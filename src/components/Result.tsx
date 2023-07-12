import Image from 'next/image'
import React from 'react'
import Welldone from '../img/welldone.svg'

const Result = () => {
  return (
    <div className="container">
      <h1 className="title mb-6">Game Over!</h1>
      <p>Pontuação: X</p>
      <p>Você acertou y de z perguntas.</p>
      <Image src={Welldone} width={400} height={300} alt="Game Over image" />
      <button className=" mt-7 w-48 text-white bg-purple-600 hover:bg-purple-500 py-2 px-3 rounded-md">
        Reiniciar
      </button>
    </div>
  )
}

export default Result
