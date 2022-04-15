import rivetQuery from '@hashicorp/platform-cms'
import { GetStaticPropsResult } from 'next'
import { PersonRecord, DepartmentRecord } from 'types'
import BaseLayout from 'layouts/base'
import Text from 'components/text'
import Box from 'components/box'
import HStack from 'components/hStack'
import VStack from 'components/vStack'
import Sidebar from 'compositions/sidebar'
import style from './style.module.css'
import query from './query.graphql'

interface Props {
  allPeople: PersonRecord[]
  allDepartments: DepartmentRecord[]
}

export default function PeoplePage({
  allPeople,
  allDepartments,
}: Props): React.ReactElement {
  return (
    <Box _as="main" className="g-grid-container">
      <HStack>
        <Sidebar width="50%" height="100vh">
          Hello
        </Sidebar>
        <Box background="yellow" padding="2rem">
          <VStack align="center" spacing="2rem">
            <pre className={style.myData}>
              {JSON.stringify(allPeople, null, 2)}
            </pre>
            <Text _as="h2" variant="headingBold">
              Departments Data
            </Text>
            <pre className={style.myData}>
              {JSON.stringify(allDepartments, null, 2)}
            </pre>
          </VStack>
        </Box>
      </HStack>
    </Box>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const data = await rivetQuery({ query })
  return { props: data }
}

PeoplePage.layout = BaseLayout
