import { Octokit } from '@octokit/rest'
import type { NextApiRequest, NextApiResponse } from 'next'

const getRepos = async () => {
  const github = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  })
  const { data } = await github.repos.listForUser({
    username: 'lukecarr',
    sort: 'pushed',
  })

  return {
    repos: data.filter(
      (repo) => !repo.archived && !['lukecarr'].includes(repo.name)
    )
  }
}

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const repos = await getRepos()

  if (process.env.NODE_ENV === 'production') res.setHeader('Cache-Control', `public,max-age=${60 * 60},immutable`)

  res.status(200)
    .setHeader('Content-Type', 'text/csv')
    .send(JSON.stringify(repos))
}
