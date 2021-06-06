import { FunctionComponent } from 'react'

type Props = {
  name: string
  period: string
  role?: string
}

const Career: FunctionComponent<Props> = ({ children, name, period, role }) => {
  return (
    <div className="career flex flex-col py-6 border-b-2 md:flex-row">
      <aside className="w-80">
        <h3 className="text-3xl font-bold">{name}</h3>
        <p className="text-lg font-medium">{period}</p>
        {role && <p className="text-xl font-bold">{role}</p>}
      </aside>
      <div className="flex-1 pt-8 md:pt-0 md:pl-8">
        {children}
      </div>
    </div>
  )
}

export default Career
