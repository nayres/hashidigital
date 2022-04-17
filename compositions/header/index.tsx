import { ChangeEvent } from 'react'
import Box from 'components/box'
import HStack from 'components/hStack'
import VStack from 'components/vStack'
import Text from 'components/text'
import styles from './style.module.css'

type ChangePayload = {
  searchTerm: string
  filterHasAvatar: boolean
}

interface HeaderProps {
  searchValue: string
  hasAvatarChecked: boolean
  onFilter: (arg0: ChangePayload) => void
}

const Header = ({ searchValue, hasAvatarChecked, onFilter }: HeaderProps) => {
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
    <Box _as="header" height="403px">
      <HStack align="center">
        <VStack align="center" spacing="34px">
          <VStack align="center" spacing="15px">
            <Text
              align="center"
              variant="headingLight"
              color="gray4"
              className={styles.headerTitle}
            >
              HashiCorp Humans
            </Text>
            <Text align="center">Find a HashiCorp human</Text>
          </VStack>
          <VStack align="center" spacing="15px">
            <input
              name="search-people-input"
              type="search"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Search people by name"
            />
            <HStack spacing="12px" align="center">
              <input
                id="filter-humans"
                type="checkbox"
                onChange={handleFilterHasAvatarChange}
                checked={hasAvatarChecked}
              />
              <Text
                _as="label"
                htmlFor="filter-humans"
                align="center"
                variant="label"
                color="gray4"
                style={{ width: 'max-content' }}
              >
                Hide people missing a profile image
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </HStack>
    </Box>
  )
}

export default Header
