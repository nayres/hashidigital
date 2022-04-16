import React from 'react'
import rivetQuery from '@hashicorp/platform-cms'
import { GetStaticPropsResult } from 'next'
import { PersonRecord, DepartmentRecord } from 'types'
import BaseLayout from 'layouts/base'
import Box from 'components/box'
import HStack from 'components/hStack'
import Sidebar from 'compositions/sidebar'
import Results from 'compositions/results'
import ResultTile from 'compositions/resultsTile'
import query from './query.graphql'

interface Props {
  allPeople: PersonRecord[]
  allDepartments: DepartmentRecord[]
}

export default function PeoplePage({
  allPeople,
}: // allDepartments,
Props): React.ReactElement {
  return (
    <Box className="g-grid-container">
      <HStack>
        <Sidebar width="25%" height="100vh">
          Hello
        </Sidebar>
        <Results>
          <HStack spacing="32px">
            {allPeople.map((person) => (
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
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const data = await rivetQuery({ query })
  return { props: data }
}

PeoplePage.layout = BaseLayout
