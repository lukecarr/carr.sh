import ContentLoader from 'react-content-loader'
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

const Loading: FunctionComponent = () => (
  <ContentLoader
    className="mt-8"
    speed={2}
    width={400}
    height={24}
    viewBox="0 0 400 24"
    backgroundColor="#5c677d"
    foregroundColor="#fefefe"
  >
    <rect x="0" y="0" rx="4" ry="4" width="120" height="24" /> 
    <rect x="140" y="0" rx="4" ry="4" width="120" height="24" /> 
    <rect x="280" y="0" rx="4" ry="4" width="120" height="24" />
  </ContentLoader>
)

const Shields: FunctionComponent = () => {
  const { data, error } = useSWR<Shield[]>('/api/shields', fetcher)

  if (error) return <p>Failed to load shields!</p>
  if (!data) return <Loading />

  return (
    <div className="shields mt-4 text-center md:text-left space-y-4 space-x-4">
      {data.map(function ({ left, right, link, color }) {
        return <a className="inline-block" key={link} href={link} target="_blank" rel="noopener noreferrer">
          <Shield left={left.replaceAll('-', '--')} right={right.replaceAll('-', '--')} color={color} />
        </a>
      })}
    </div>
  )
}

export default Shields
