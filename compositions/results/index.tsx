import { FC } from 'react'
import style from './style.module.css'
import Box from 'components/box'
import HStack from 'components/hStack'

const Results: FC = ({ children }) => {
  return (
    <Box _as="main" className={style.resultsBase}>
      <Box padding="2rem" className={style.resultsScrollable}>
        <HStack>{children}</HStack>
      </Box>
    </Box>
  )
}

export default Results
