import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Octokit } from '@octokit/rest'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Repos from '../components/repos'
import Careers from '../components/careers'
import Certifications from '../components/certifications'

import { shields } from '../data/shields.json'
import { education } from '../data/education.json'
import { careers } from '../data/careers.json'
import { certifications } from '../data/certifications.json'
import Education from '../components/education'

export const getStaticProps: GetStaticProps = async () => {
  const github = new Octokit()
  const { data } = await github.repos.listForUser({
    username: 'lukecarr',
  })

  return {
    props: {
      repos: data.filter(
        (repo) => !repo.archived && !['lukecarr'].includes(repo.name)
      ),
    }
  }
}

const Homepage = ({ repos }) => {
  return (
    <Layout>
      <Head>
        <title>Luke Carr</title>
      </Head>
      <Hero shields={shields} age={Math.abs(new Date(Date.now() - new Date('2001-07-30').getTime()).getUTCFullYear() - 1970)} />
      <Careers careers={careers} />
      <Certifications certifications={certifications} />
      <Education education={education} />
      <Repos repos={repos} />
    </Layout>
  )
}

export default Homepage
