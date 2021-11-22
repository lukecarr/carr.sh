import { FunctionComponent } from 'react'
import Shield from './shield'

type Props = {
  shields: {
    left: string
    right: string
    href: string
    color?: string
  }[]
}

const Shields: FunctionComponent<Props> = ({ shields }) => {
  return (
    <div className="shields mt-4">
      {shields.map(function (shield, index) {
        return <a key={shield.href} className={index > 0 ? 'ml-4' : ''} href={shield.href} target="_blank" rel="noopener noreferrer">
          <Shield left={shield.left} right={shield.right} color={shield.color} />
        </a>
      })}
    </div>
  )
}

export default Shields
