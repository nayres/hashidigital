import { useState, useCallback } from 'react'
import { debounce } from 'ts-debounce'
import { PersonRecord } from 'types'

type FilterByXReturnType = [
  (people: PersonRecord[], searchValue: string) => void,
  PersonRecord[] | []
]

export const useFilterPeopleByName = (): FilterByXReturnType => {
  const [currPeopleList, setCurrPeopleList] = useState<PersonRecord[] | []>([])

  const filterPeople = useCallback(
    debounce((people: PersonRecord[], searchValue: string) => {
      const filteredPeople = people.filter((person: PersonRecord) => {
        if (person?.name) {
          const cleanedName = person.name.toLowerCase()
          return cleanedName.includes(searchValue)
        }
      })

      if (filteredPeople.length > 0) setCurrPeopleList(filteredPeople)
    }, 0),
    []
  )

  return [filterPeople, currPeopleList]
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
