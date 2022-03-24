import useSWR from 'swr'

import type { FunctionComponent } from 'react'

import Shield from './shield'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

type Shield = {
  left: string
  right: string
  link: string
  color: string
}

const Shields: FunctionComponent = () => {
  const { data, error } = useSWR<Shield[]>('/api/shields', fetcher)

  if (error) return <p>Failed to load shields!</p>
  if (!data) return <p>Loading...</p>

  return (
    <div className="shields mt-4 space-x-4">
      {data.map(function ({ left, right, link, color }) {
        return <a key={link} href={link} target="_blank" rel="noopener noreferrer">
          <Shield left={left.replaceAll('-', '--')} right={right.replaceAll('-', '--')} color={color} />
        </a>
      })}
    </div>
  )
}

export default Shields
