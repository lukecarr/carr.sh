import { FunctionComponent } from 'react'
import Career from './career'
import Quote from './quote'

type Props = {
  careers: {
    name: string
    period: string
    role?: string
    description?: string
  }[]
}

const Careers: FunctionComponent<Props> = ({ careers }) => {
  return (
    <section>
      <div className="container pt-12 pb-24">
        <Quote text="Once you have tasted flight, you will forever walk the earth with your eyes turned skyward, for there you have been, and there you will always long to return." author="Lionardo di ser Piero da Vinci" />
        <h2 id="careers" className="text-5xl font-black">Careers</h2>
        <div className="careers">
          {careers.map(function (career) {
            return <Career key={`${career.name}-${career.period}-${career.role}`} name={career.name} period={career.period} role={career.role}><span dangerouslySetInnerHTML={{__html: career.description}} /></Career>
          })}
        </div>
      </div>
    </section>
  )
}

export default Careers
