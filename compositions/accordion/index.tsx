import { useState, MouseEvent, Fragment } from 'react'
import VStack from 'components/vStack'
import AccordionOption from './AccordionOption'
import { DepartmentRecord } from 'types'

interface AccordionProps {
  list: DepartmentRecord[]
  onSelect: (value: DepartmentRecord) => void
}
export default function Accordion({ list, onSelect }: AccordionProps) {
  const [selected, setSelected] = useState<DepartmentRecord | null>(null)

  const createAccordion = (item: DepartmentRecord) =>
    item.children && (
      <AccordionOption
        id={item.id}
        key={item.id}
        onSelect={(e: MouseEvent<HTMLElement>) => {
          onSelect(item)
          setSelected(item)
        }}
        isSelected={selected === item}
        label={item?.name ?? ''}
      >
        {item.children.map((item: DepartmentRecord) => {
          return <Fragment key={item.id}>{createAccordion(item)}</Fragment>
        })}
      </AccordionOption>
    )

  return (
    <VStack role="tree">
      {list.map((item: DepartmentRecord) => (
        <Fragment key={item.id}>{createAccordion(item)}</Fragment>
      ))}
    </VStack>
  )
}
