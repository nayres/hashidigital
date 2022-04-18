import { useState, useMemo, useEffect } from 'react'
import { DepartmentRecord } from 'types'

export const useMapDepartments = (departments: DepartmentRecord[]) => {
  const [mappedDepartments, setMappedDepartments] = useState<
    DepartmentRecord[] | []
  >([])

  const allMappedDepartments = useMemo(() => {
    const isTopLevelParent = (department: DepartmentRecord) =>
      department.parent === null

    const departmentMap = departments.reduce((departmentMap, department) => {
      if (!isTopLevelParent(department)) {
        departmentMap.set(department.name, department)
      }

      return departmentMap
    }, new Map())

    const mapDepartmentToChildArr = (departmentsArr: DepartmentRecord[]) =>
      departmentsArr.map((department: DepartmentRecord) =>
        departmentMap.get(department.name)
      )

    // Would use this to create some path for routing
    const departmentNameToPath = (departmentName: string) =>
      departmentName.toLowerCase().replace(' ', '-')

    const makePath = (department: DepartmentRecord) =>
      !department.children
        ? `/${departmentNameToPath(department.name ?? '')}`
        : null

    const topLevelDepartments = departments.filter(
      (department) => department.parent === null
    )

    const mapDepartments: any = (departments: DepartmentRecord[]) => {
      if (!departments) return
      return departments.map((department) => {
        return {
          id: department.id,
          name: department.name,
          path: makePath(department),
          children: mapDepartments(
            mapDepartmentToChildArr(department?.children ?? [])
          ),
        }
      })
    }

    return mapDepartments(topLevelDepartments)
  }, [departments])

  useEffect(() => {
    setMappedDepartments(allMappedDepartments)
  }, [allMappedDepartments, departments])

  return mappedDepartments
}
