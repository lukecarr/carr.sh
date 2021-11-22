import { FunctionComponent } from 'react'
import Shields from './shields'

type Props = {
  shields: {
    left: string
    right: string
    href: string
    color?: string
  }[]
  age: number
}

const Hero: FunctionComponent<Props> = ({ shields, age }) => {
  return (
    <section>
      <div className="container pt-12 pb-24">
        <h2 className="text-6xl font-black">Luke Carr</h2>
        <Shields shields={shields} />
        <p id="bio" className="text-xl font-semibold my-8 py-1 pl-6 border-l-4">
          I'm a {age} y/o developer working on various open source projects relating to education &#127979; and privacy &#128064;.
          <br /><br />
          I spend most of my time inside Node.js and I love writing code &#128187; that's not just functional but beautiful &#10024; as well.
        </p>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <img className="w-full max-w-md mx-auto md:mb-0 md:mr-6" src="https://github-readme-stats.vercel.app/api?username=lukecarr&show_icons=true" alt="GitHub Stats" />
          <img className="w-full max-w-md mx-auto md:w-auto md:h-full" src="https://github-readme-stats.vercel.app/api/top-langs?username=lukecarr&layout=compact" alt="Most Used Languages" />
        </div>
      </div>
    </section>
  )
}

export default Hero
