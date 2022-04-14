import rivetQuery from '@hashicorp/platform-cms'
import { GetStaticPropsResult } from 'next'
import { PersonRecord, DepartmentRecord } from 'types'
import BaseLayout from '../../layouts/base'
import style from './style.module.css'
import query from './query.graphql'
import Text from '../../components/text'

interface Props {
  allPeople: PersonRecord[]
  allDepartments: DepartmentRecord[]
}

export default function PeoplePage({
  allPeople,
  allDepartments,
}: Props): React.ReactElement {
  return (
    <main className="g-grid-container">
      <Text _as="h1" variant="headingBold" color="gray3">
        People Data
      </Text>
      <pre className={style.myData}>{JSON.stringify(allPeople, null, 2)}</pre>
      <h2>Departments Data</h2>
      <pre className={style.myData}>
        {JSON.stringify(allDepartments, null, 2)}
      </pre>
    </main>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const data = await rivetQuery({ query })
  return { props: data }
}

PeoplePage.layout = BaseLayout
