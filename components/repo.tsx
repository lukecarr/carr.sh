import { FunctionComponent } from 'react'

type Props = {
  name: string
  language: string
  license: string
  about: string
  ssh: string
}

const Repo: FunctionComponent<Props> = ({ name, language, license, about, ssh }) => {
  return (
    <div className="repo flex flex-col" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      <div className="flex-1 p-4">
        <h3 className="text-3xl font-bold">{name}</h3>
        <p className="text-lg font-bold">{[language, license].filter(x => x).join(', ')}</p>
        <span className="block text-xl mb-4">{about}</span>
      </div>
      <div>
        <pre className="block text-center font-semibold p-2 cursor-pointer truncate" style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}} onClick={() => window.isSecureContext && navigator.clipboard.writeText(ssh)}>
          git clone {ssh}
        </pre>
      </div>
    </div>
  )
}

export default Repo
