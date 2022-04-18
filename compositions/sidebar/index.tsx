import { FC, useState, ChangeEvent, FormEvent } from 'react'
import { DepartmentRecord } from 'types'
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

  // removing this and search form below
  const handleDepartmentSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(val)
  }

  return (
    <Box _as="nav" width={width} height={height} className={className}>
      <HStack align="center">
        <form onSubmit={handleDepartmentSearch}>
          <input
            type="text"
            value={val}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
          />
          <input type="submit" value="search" />
          <ul>
            {departments.map((department, index) => (
              <div key={index.toString()}>{department.name}</div>
            ))}
          </ul>
        </form>
      </HStack>
    </Box>
  )
}

export default Sidebar
