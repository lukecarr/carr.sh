import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { Octokit } from '@octokit/rest'

import Layout from '../components/layout'
import Quote from '../components/quote'
import Shield from '../components/shield'
import Career from '../components/career'
import Repo from '../components/repo'

const shields: {
  left: string
  right: string
  href: string
  color?: string
}[] = [
  {
    left: 'github',
    right: 'lukecarr',
    href: 'https://github.com/lukecarr',
  },
  {
    left: 'twitter',
    right: '@imlukecarr',
    color: '00aced',
    href: 'https://twitter.com/imlukecarr',
  },
  {
    left: 'find me on',
    right: 'linkedin',
    color: '0072b1',
    href: 'https://linkedin.com/in/luke-j-carr',
  },
]

const education: {
  name: string
  period: string
  description: string
}[] = [
  {
    name: 'Exeter College',
    period: 'September 2017 - July 2019',
    description: `I obtained A-Levels in Computer Science, Mathematics, and Further Mathematics during my 2 years at Exeter
College.<br><br>Here, a friend introduced me to the joys of modern JavaScript (specifically Node.js and ES6), and swayed me
away from the dark sides of Java and PHP! &nbsp; <em>P.S. I still ❤️ them both.</em>`,
  },
]

const careers: {
  name: string
  period: string
  role: string
  description: string
}[] = [
  {
    name: 'Ted Wragg Trust',
    period: 'July 2020 - Present',
    role: 'Digital Learning Engineer',
    description: `As a Digital Learning Engineer at the Ted Wragg Trust, I operate closely with teaching staff across
the trust to design and develop empowering solutions for the classroom that embraces technology.<br><br>With a substantial
focus on automation, my role strives to reduce the time spent by teachers manually uploading and creating content on
learning management systems.`,
  },
  {
    name: 'Ted Wragg Trust',
    period: 'May 2020 - July 2020',
    role: 'Contractor',
    description: `Starting in May 2020, I worked closely with the Ted Wragg Trust as a contractor to improve and enrich their
e-learning solutions.<br><br>This contract work primarily consisted of designing and developing custom Moodle plugins to
fulfil their digital learning needs.`,
  },
  {
    name: 'Omnio Interactive',
    period: 'November 2019 - August 2020',
    role: 'Chief Executive Officer',
    description: `In late 2019, I formed a tech startup named Omnio Interactive with a close friend, where we worked on
a cloud-based learning platform called Omnio Cloud.<br><br>In August 2020, I left Omnio Interactive to pursue a role at
the Ted Wragg Trust.`,
  },
]

const certifications: {
  [key: string]: {
    name: string
    href: string
    badge: string
  }[]
} = {
  'Amazon Web Services': [
    {
      name: 'AWS Certified Cloud Practitioner',
      href: 'https://www.credly.com/badges/eef0f0e9-f56d-4cdb-af91-1d90e7f15884',
      badge: 'https://images.credly.com/size/340x340/images/68468004-5a85-4f3b-bc58-590773979486/AWS-CloudPractitioner-2020.png',
    },
  ],
}

export const getServerSideProps: GetServerSideProps = async () => {
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
      <section>
        <div className="container pt-12 pb-24">
          <h2 className="text-6xl font-black">Luke Carr</h2>
          <div className="shields mt-4">
            {shields.map(function (shield, index) {
              return <a key={shield.href} className={index > 0 ? 'ml-4' : ''} href={shield.href} target="_blank" rel="noopener noreferrer">
                <Shield left={shield.left} right={shield.right} color={shield.color} />
              </a>
            })}
          </div>
          <p id="bio" className="text-xl font-semibold my-8 py-1 pl-6 border-l-4">
            I'm a {Math.abs(new Date(Date.now() - new Date('2001-07-30').getTime()).getUTCFullYear() - 1970)} y/o developer working on various open source projects relating to education &#127979; and privacy &#128064;.
            <br /><br />
            I spend most of my time inside Node.js and I love writing code &#128187; that's not just functional but beautiful &#10024; as well.
          </p>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <img className="w-full max-w-md mx-auto md:mb-0 md:mr-6" src="https://github-readme-stats.vercel.app/api?username=lukecarr&show_icons=true" alt="GitHub Stats" />
            <img className="w-full max-w-md mx-auto md:w-auto md:h-full" src="https://github-readme-stats.vercel.app/api/top-langs?username=lukecarr&layout=compact" alt="Most Used Languages" />
          </div>
        </div>
      </section>
      <section>
        <div className="container pt-12 pb-24">
          <Quote text="Once you have tasted flight, you will forever walk the earth with your eyes turned skyward, for there you have been, and there you will always long to return." author="Lionardo di ser Piero da Vinci" />
          <h2 id="careers" className="text-5xl font-black">Careers</h2>
          <div className="careers">
            {careers.map(function (career) {
              return <Career key={`${career.name}-${career.period}-${career.role}`} name={career.name} period={career.period} role={career.role}><span dangerouslySetInnerHTML={{__html: career.description}} /></Career>
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="container pt-12 pb-24">
          <h2 id="certifications" className="text-5xl font-black">Certifications</h2>
          <div className="certifications mt-4">
            {Object.keys(certifications).map(function (certKey) {
              return (
                <div key={certKey} className="certification-group py-6 border-b-2">
                  <h3 className="text-3xl font-bold mb-4">{certKey}</h3>
                  <div className="badges grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
                    {certifications[certKey].map(function (cert) {
                      return <a key={cert.href} href={cert.href} target="_blank" rel="noopener noreferrer" className="w-full"><img className="w-full" src={cert.badge} alt={cert.name} /></a>
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="container pt-12 pb-24">
          <Quote text="Simplicity is not the absence of clutter, that's a consequence of simplicity. Simplicity is somehow essentially describing the purpose and place of an object and product. The absence of clutter is just a clutter-free product. That's not simple." author="Sir Jonathan Paul Ive" />
          <h2 id="education" className="text-5xl font-black">Education</h2>
          <div className="careers">
            {education.map(function (career) {
              return <Career key={`${career.name}-${career.period}`} name={career.name} period={career.period}><span dangerouslySetInnerHTML={{__html: career.description}} /></Career>
            })}
          </div>
        </div>
      </section>
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
    </Layout>
  )
}

export default Homepage
