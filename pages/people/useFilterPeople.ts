import { useState, useCallback } from 'react'
import { debounce } from 'ts-debounce'
import { PersonRecord } from 'types'

type FilterByPeopleByNameReturnType = [
  (people: PersonRecord[], searchValue: string) => void,
  PersonRecord[] | [],
  string | null
]

export const useFilterPeopleByName = (): FilterByPeopleByNameReturnType => {
  const [currPeopleList, setCurrPeopleList] = useState<PersonRecord[] | []>([])
  const [error, setError] = useState<string | null>(null)

  const filterPeople = useCallback(
    debounce((people: PersonRecord[], searchValue: string) => {
      if (error) setError(null)
      const filteredPeople = people.filter((person: PersonRecord) => {
        if (person?.name) {
          const cleanedName = person.name.toLowerCase()
          return cleanedName.includes(searchValue)
        }
      })

      if (filteredPeople.length > 0) setCurrPeopleList(filteredPeople)
      else setError('No results found')
    }, 0),
    []
  )

  return [filterPeople, currPeopleList, error]
}

type FilterByDepartmentReturnType = [
  (searchValue: string) => void,
  PersonRecord[] | []
]

export const useFilterPeopleByDepartment = (
  people: PersonRecord[]
): FilterByDepartmentReturnType => {
  const [currPeopleList, setCurrPeopleList] = useState<PersonRecord[]>(people)

  const filterByDeparment = useCallback((department: string) => {
    if (department === '') return

    const filteredPeople = people.filter(
      (person: PersonRecord) => person?.department?.name === department
    )

    if (filteredPeople.length > 0) setCurrPeopleList(filteredPeople)
  }, [])

  return [filterByDeparment, currPeopleList]
}
