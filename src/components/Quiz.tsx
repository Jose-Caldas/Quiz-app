'use client'

import { useContext, useState } from 'react'
import { QuizContext } from '@/context/quizContext'
import Link from 'next/link'
import Image from 'next/image'
import Category from '../img/category.svg'
import Welldone from '../img/welldone.svg'

export default function Quiz() {
  const { gameStage, questions } = useContext(QuizContext)
  const [stage, setStage] = useState(0)
  console.log(stage)
  console.log(questions.length)

  const handleNext = () => {
    if (stage < questions?.length) {
      setStage(stage + 1)
    }
    if (stage >= questions.length) {
      return <Link href="/result"></Link>
    }
  }
  const handlePrev = () => {
    if (stage > 0) {
      setStage(stage - 1)
    }
  }

  const question = questions[stage]
  console.log(question)
  return (
    <div className="container">
      <h1 className="title">Quiz Page</h1>
      {stage >= questions.length ? (
        <div>
          <h1 className="title">Result</h1>
          <Image src={Welldone} alt="Result Image" width={300} height={300} />
        </div>
      ) : (
        <>
          <div>
            <h1 className="title">{question?.question}</h1>
            <ul className="my-5" key={question?.id}>
              {question?.options.map((q, i) => (
                <li key={i}>
                  <input type="radio" name="options" id={`q${i}-option`} />
                  <label htmlFor={`q${i}-option`}>{q}</label>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex">
            <button onClick={handlePrev}>PREV</button>
            <button onClick={handleNext}>NEXT</button>
          </div>
          <Image
            src={Category}
            alt="Image to Playing"
            width={300}
            height={300}
          />
        </>
      )}
      <Link href={`/`}>Home</Link>
      <Link href={`/result`}>Result</Link>
    </div>
  )
}
