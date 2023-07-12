import Image from 'next/image'
import Welldone from '../../img/welldone.svg'

export default async function ResultPage() {
  return (
    <div className="container">
      <h1 className="title">Result</h1>
      <Image src={Welldone} width={400} height={300} alt="Game Over image" />
    </div>
  )
}
