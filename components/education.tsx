import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import useSWR from 'swr'

import type { Document } from '@contentful/rich-text-types/dist/types/types'
import type { FunctionComponent } from 'react'

import Quote from './quote'
import Career from './career'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

type Education = {
  institution: string
  period: string
  description: Document
}

const List: FunctionComponent = () => {
  const { data, error } = useSWR<Education[]>('/api/education', fetcher)

  if (error) return <p>Failed to load education data!</p>
  if (!data) return <p>Loading...</p>

  return <div className="careers">
    {data.map(function ({ institution, period, description }) {
      return <Career key={`${institution}-${period}`} name={institution} period={period}>
        {documentToReactComponents(description)}
      </Career>
    })}
  </div>
}

const Education: FunctionComponent = () => {
  return (
    <section>
      <div className="container pt-12 pb-24">
        <Quote text="Simplicity is not the absence of clutter, that's a consequence of simplicity. Simplicity is somehow essentially describing the purpose and place of an object and product. The absence of clutter is just a clutter-free product. That's not simple." author="Sir Jonathan Paul Ive" />
        <h2 id="education" className="text-5xl font-black">Education</h2>
        <List />
      </div>
    </section>
  )
}

export default Education
