import { FC } from 'react'
import HStack from 'components/hStack'
import Box from 'components/box'

interface SidebarProps {
  width: string
  height: string
  className?: string
}

const Sidebar: FC<SidebarProps> = ({ width, height, className, children }) => {
  return (
    <Box _as="nav" width={width} height={height} className={className}>
      <HStack align="center">{children}</HStack>
    </Box>
  )
}

export default Sidebar
