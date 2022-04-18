import { FC, useState, ChangeEvent, FormEvent } from 'react'
import { useMapDepartments } from './useMapDepartments'
import { DepartmentRecord } from 'types'
import Accordion from 'compositions/accordion'
import HStack from 'components/hStack'
import Box from 'components/box'

interface SidebarProps {
  // removing
  width: string
  // removing
  height: string
  className?: string
  onSearch: (value: string) => void
  departments: DepartmentRecord[]
}

const Sidebar: FC<SidebarProps> = ({
  width,
  height,
  className,
  onSearch,
  departments,
  children,
}) => {
  const [val, setValue] = useState('')
  const mapped = useMapDepartments(departments)

  const handleDepartmentSearch = (value: DepartmentRecord) => {
    onSearch(value?.name ?? '')
  }

  return (
    <Box _as="nav" width={width} height={height} className={className}>
      <HStack align="center">
        <Accordion list={mapped} onSelect={handleDepartmentSearch} />
      </HStack>
    </Box>
  )
}

export default Sidebar
