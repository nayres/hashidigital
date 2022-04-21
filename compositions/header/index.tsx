import { ChangeEvent } from 'react'
import Box from 'components/box'
import HStack from 'components/hStack'
import VStack from 'components/vStack'
import Text from 'components/text'
import SearchBar from 'components/searchBar'
import Checkbox from 'components/checkbox'
import { useBreakpoints } from 'utils/useBreakpoints'
import style from './style.module.css'

type ChangePayload = {
  searchTerm: string
  filterHasAvatar: boolean
}

interface HeaderProps {
  searchValue: string
  hasAvatarChecked: boolean
  onFilter: (arg0: ChangePayload) => void
}

export default function Header({
  searchValue,
  hasAvatarChecked,
  onFilter,
}: HeaderProps) {
  const breakpoint = useBreakpoints()

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    onFilter({
      searchTerm: e.target.value,
      filterHasAvatar: hasAvatarChecked,
    })
  }

  const handleFilterHasAvatarChange = (e: ChangeEvent<HTMLInputElement>) =>
    onFilter({
      searchTerm: searchValue,
      filterHasAvatar: e.target.checked,
    })

  return (
    <Box _as="header" className={style.headerContainer}>
      <HStack align={breakpoint !== 'mobile' ? 'center' : 'left'}>
        <VStack align="center" spacing="2.125rem">
          <VStack align="center" spacing="0.938rem">
            <Text
              align="center"
              variant="headingLight"
              color="gray4"
              className={style.headerTitle}
            >
              HashiCorp Humans
            </Text>
            <Text align="center">Find a HashiCorp human</Text>
          </VStack>
          <VStack align="center" spacing="0.938rem">
            <SearchBar
              searchValue={searchValue}
              label="Search people by name"
              onChange={handleSearchChange}
            />
            <Checkbox
              id="hide-people-checkbox"
              onChange={handleFilterHasAvatarChange}
              label="Hide people missing a profile image"
              checked={hasAvatarChecked}
              disabled={false}
            />
          </VStack>
        </VStack>
      </HStack>
    </Box>
  )
}
