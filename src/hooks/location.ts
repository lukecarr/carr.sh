import { useState } from 'preact/hooks'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

export default function useLocation(locations: [number, string][]) {
  const [location, setLocation] = useState(locations[0][1])

  useScrollPosition(({ currPos }) => {
    for (const [position, location] of locations.reverse()) {
      if(position >= currPos.y) {
        setLocation(location)
        break
      }
    }
  })

  return location
}