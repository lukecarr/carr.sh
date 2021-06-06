import { FunctionComponent } from 'react'

type Props = {
  left?: string
  right?: string
  color?: string
}

const Shield: FunctionComponent<Props> = ({ left, right, color }) => {
  return <img className="h-6 shield inline-block transition-all ease-in-out transform-gpu hover:scale-105" alt={`${left} ${right}`} src={`https://img.shields.io/badge/${encodeURIComponent(left || '')}-${encodeURIComponent(right || '')}-${color || 'brightgreen'}`} />
}

export default Shield
