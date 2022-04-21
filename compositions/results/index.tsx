import { ReactNode } from 'react'
import style from './style.module.css'
import { useBreakpoints } from 'utils/useBreakpoints'
import Box from 'components/box'
import HStack from 'components/hStack'

export default function Results({ children }: { children: ReactNode }) {
  const breakpoint = useBreakpoints()
  return (
    <Box
      _as="main"
      padding="0 0 2rem 0"
      className={style.resultsBase}
      width={breakpoint === 'mobile' ? '100%' : '75%'}
    >
      <Box padding="0 0 2rem 0" className={style.resultsScrollable}>
        <HStack>{children}</HStack>
      </Box>
    </Box>
  )
}
