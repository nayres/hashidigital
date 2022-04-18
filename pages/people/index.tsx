import React, { useState, useEffect } from 'react'
import rivetQuery from '@hashicorp/platform-cms'
import { GetStaticPropsResult } from 'next'
import { PersonRecord, DepartmentRecord } from 'types'
import {
  useFilterPeopleByName,
  useFilterPeopleByDepartment,
} from './useFilterPeople'
import BaseLayout from 'layouts/base'
import Header from 'compositions/header'
import Box from 'components/box'
import VStack from 'components/vStack'
import HStack from 'components/hStack'
import Sidebar from 'compositions/sidebar'
import Results from 'compositions/results'
import ResultTile from 'compositions/resultsTile'
import query from './query.graphql'

interface Props {
  allPeople: PersonRecord[]
  allDepartments: DepartmentRecord[]
}

// TODO: consolidate (same type in Header)
type ChangePayload = {
  searchTerm: string
  filterHasAvatar: boolean
}

export default function PeoplePage({
  allPeople,
  allDepartments,
}: Props): React.ReactElement {
  const [department, setCurrentDepartment] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [hasAvatarChecked, setHasAvatarChecked] = useState(false)

  const [filterByDepartment, departmentPeople] =
    useFilterPeopleByDepartment(allPeople)
  const [filterPeople, filteredPeople] = useFilterPeopleByName()

  useEffect(() => {
    filterByDepartment(department)
  }, [filterByDepartment, department])

  useEffect(() => {
    filterPeople(departmentPeople, searchValue)
  }, [filterPeople, departmentPeople, searchValue])

  const handleFilterChange = (state: ChangePayload) => {
    setSearchValue(state.searchTerm)
    setHasAvatarChecked(state.filterHasAvatar)
  }

  const handleDepSearch = (val: string) => setCurrentDepartment(val)

  return (
    <VStack>
      <Header
        searchValue={searchValue}
        hasAvatarChecked={hasAvatarChecked}
        onFilter={handleFilterChange}
      />
      <Box className="g-grid-container">
        <HStack>
          <Sidebar
            width="25%"
            height="100%"
            onSearch={handleDepSearch}
            departments={allDepartments}
          >
            Hello
          </Sidebar>
          <Results>
            <HStack spacing="32px">
              {filteredPeople
                .filter((person: PersonRecord) =>
                  hasAvatarChecked ? person?.avatar !== null : true
                )
                .map((person) => (
                  <ResultTile
                    key={person.id}
                    avatar={person?.avatar?.url ?? ''}
                    avatarAlt={person?.avatar?.alt}
                    name={person?.name ?? 'name'}
                    title={person?.title ?? 'title'}
                    department={person?.department?.name ?? 'department'}
                  />
                ))}
            </HStack>
          </Results>
        </HStack>
      </Box>
    </VStack>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const data = await rivetQuery({ query })
  return { props: data }
}

PeoplePage.layout = BaseLayout
