import { FunctionComponent } from 'react'
import Quote from './quote'
import Career from './career'

type Props = {
  education: {
    name: string
    period: string
    description: string
  }[]
}

const Education: FunctionComponent<Props> = ({ education }) => {
  return (
    <section>
      <div className="container pt-12 pb-24">
        <Quote text="Simplicity is not the absence of clutter, that's a consequence of simplicity. Simplicity is somehow essentially describing the purpose and place of an object and product. The absence of clutter is just a clutter-free product. That's not simple." author="Sir Jonathan Paul Ive" />
        <h2 id="education" className="text-5xl font-black">Education</h2>
        <div className="careers">
          {education.map(function (career) {
            return <Career key={`${career.name}-${career.period}`} name={career.name} period={career.period}><span dangerouslySetInnerHTML={{__html: career.description}} /></Career>
          })}
        </div>
      </div>
    </section>
  )
}

export default Education
