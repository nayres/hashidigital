import { useState, ChangeEvent, FormEvent } from 'react'
import { useMapDepartments } from './useMapDepartments'
import { DepartmentRecord } from 'types'
import Accordion from 'compositions/accordion'
import HStack from 'components/hStack'
import VStack from 'components/vStack'
import Box from 'components/box'
import Text from 'components/text'

interface SidebarProps {
  className?: string
  onSearch: (value: string) => void
  departments: DepartmentRecord[]
}

export default function Sidebar({
  className,
  onSearch,
  departments,
}: SidebarProps) {
  const [val, setValue] = useState('')
  const mapped = useMapDepartments(departments)

  const handleDepartmentSearch = (value: DepartmentRecord) => {
    onSearch(value?.name ?? '')
  }

  return (
    <Box _as="nav" width="20%" className={className} padding="0 0 15rem 0">
      <VStack spacing="0.875rem">
        <Text variant="headingBold">Filter By Department</Text>
        <HStack align="center" style={{ overflowY: 'auto' }}>
          <Accordion list={mapped} onSelect={handleDepartmentSearch} />
        </HStack>
      </VStack>
    </Box>
  )
}
