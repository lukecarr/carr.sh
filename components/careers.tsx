import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import useSWR from 'swr'

import type { Document } from '@contentful/rich-text-types/dist/types/types'
import type { FunctionComponent } from 'react'

import Career from './career'
import Quote from './quote'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

type Career = {
  company: string
  role: string
  period: string
  description: Document
}

const List: FunctionComponent = () => {
  const { data, error } = useSWR<Career[]>('/api/careers', fetcher)

  if (error) return <p>Failed to load careers data!</p>
  if (!data) return <p>Loading...</p>

  return <div className="careers">
    {data.map(function ({ company, role, period, description }) {
      return <Career key={`${company}-${period}-${role}`} name={company} period={period} role={role}>
        {documentToReactComponents(description)}
      </Career>
    })}
  </div>
}

const Careers: FunctionComponent = () => {
  return (
    <section>
      <div className="container pt-12 pb-24">
        <Quote text="Once you have tasted flight, you will forever walk the earth with your eyes turned skyward, for there you have been, and there you will always long to return." author="Lionardo di ser Piero da Vinci" />
        <h2 id="careers" className="text-5xl font-black">Careers</h2>
        <List />
      </div>
    </section>
  )
}

export default Careers
