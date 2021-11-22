import { FunctionComponent } from 'react'

type Props = {
  certifications: {
    name: string
    certs: {
      name: string
      href: string
      badge: string
    }[]
  }[]
}

const Certifications: FunctionComponent<Props> = ({ certifications }) => {
  return (
    <section>
      <div className="container pt-12 pb-24">
        <h2 id="certifications" className="text-5xl font-black">Certifications</h2>
        <div className="certifications mt-4">
          {certifications.map(function (certKey) {
            return (
              <div key={certKey.name} className="certification-group py-6 border-b-2">
                <h3 className="text-3xl font-bold mb-4">{certKey.name}</h3>
                <div className="badges grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
                  {certKey.certs.map(function (cert) {
                    return <a key={cert.href} href={cert.href} target="_blank" rel="noopener noreferrer" className="w-full"><img className="w-full" src={cert.badge} alt={cert.name} /></a>
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Certifications
