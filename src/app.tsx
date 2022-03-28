import useAge from './hooks/age'
import useLocation from './hooks/location'

const locations: [number, string][] = [
  [0, '/home/luke'],
]

export function App() {
  const age = useAge()
  const location = useLocation(locations)

  return (
    <>
      <header class="fixed top-0 left-0 right-0">
        <div class="container" max-w="screen-md" p="4">
          <p class="inline-block" font="mono medium" p="x-3 py-1" bg="gray-300" filter="opacity-75">{location}</p>
        </div>
      </header>
      <div class="container" max-w="screen-md" p="x-4">
        <section p="y-16" space="y-6">
          <h1 font="extrabold" text="4xl" tracking="tight">Luke Carr</h1>
          <blockquote font="mono semibold" space="y-2" p="l-4 y-2" border="l-4 black dark:white">
            <p>Hi there! 👋</p>
            <p>I'm a {age} y/o developer working on various open source projects relating to education 🏫 and privacy 👀.</p>
            <p>I spend most of my time inside Node.js or Go and I love writing code 💻 that's not just functional 💪 but beautiful ✨ as well.</p>
          </blockquote>
          <p font="mono semibold" p="2" bg="yellow-100" text="yellow-900">🚧 In case you couldn&apos;t already tell, this site is currently a WIP!</p>
        </section>
      </div>
    </>
  )
}
