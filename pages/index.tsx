import Head from 'next/head'
import useSWR from 'swr'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Repos from '../components/repos'
import Careers from '../components/careers'
import Certifications from '../components/certifications'
import Education from '../components/education'

import certifications from '../data/certifications.json'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Homepage = () => {
  const { data, error } = useSWR('/api/repos', fetcher)

  return (
    <Layout>
      <Head>
        <title>Luke Carr</title>
      </Head>
      <Hero age={Math.abs(new Date(Date.now() - new Date('2001-07-30').getTime()).getUTCFullYear() - 1970)} />
      <Careers />
      <Certifications certifications={certifications} />
      <Education />
      <Repos repos={data?.repos ?? []} />
    </Layout>
  )
}

export default Homepage
