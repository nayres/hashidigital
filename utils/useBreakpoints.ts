import { useState, useEffect } from 'react'
import throttle from 'lodash.throttle'

const defineWindowSize = (width: number) => {
  if (width < 1200) return 'mobile'
  if (width >= 1200 && width < 1675) return 'laptop'
  return 'desktop'
}

export const useBreakpoints = () => {
  const [breakpoint, setBreakpoint] = useState<string | undefined>()

  useEffect(() => {
    const calcInnerWidth = throttle(() => {
      const innerWidth = defineWindowSize(window.innerWidth)
      setBreakpoint(innerWidth)
    }, 200)

    window.addEventListener('resize', calcInnerWidth)

    return () => window.removeEventListener('resize', calcInnerWidth)
  }, [])

  return breakpoint
}
