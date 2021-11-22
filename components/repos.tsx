import { FunctionComponent } from 'react'
import Quote from './quote'
import Repo from './repo'
import { Octokit } from '@octokit/rest'

const reposFunc = new Octokit().repos.listForUser

type AsyncReturnType<T extends (...args: any) => any> =
	T extends (...args: any) => Promise<infer U> ? U :
	T extends (...args: any) => infer U ? U :
	any

type Props = {
  repos: AsyncReturnType<typeof reposFunc>['data']
}

const Repos: FunctionComponent<Props> = ({ repos }) => {
  return (
    <section>
      <div className="pt-12 pb-24">
        <div className="container">
          <Quote text="Any sufficiently advanced technology is indistinguishable from magic." author="Arthur C. Clarke" />
          <h2 id="repos" className="text-5xl font-black">Repos</h2>
          <p className="text-lg my-4">Click on a clone command to copy it to your clipboard!</p>
        </div>
        <div className="repos grid gap-4 grid-cols-1 px-4 mx-auto mt-8 md:grid-cols-2 xl:grid-cols-3" style={{maxWidth: "1920px"}}>
          {repos.map(function (repo) {
            return <Repo key={repo.name} name={repo.name} language={repo.language} license={repo.license && repo.license.spdx_id} about={repo.description} ssh={repo.ssh_url} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Repos
