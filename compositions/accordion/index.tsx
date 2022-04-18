import { MouseEvent, Fragment } from 'react'
import VStack from 'components/vStack'
import AccordionOption from './AccordionOption'
import { DepartmentRecord } from 'types'

interface AccordionProps {
  list: DepartmentRecord[]
  onSelect: (value: DepartmentRecord) => void
}
export default function Accordion({ list, onSelect }: AccordionProps) {
  const createAccordion = (item: DepartmentRecord & { selected?: boolean }) =>
    item.children && (
      <AccordionOption
        id={item.id}
        key={item.id}
        onSelect={(e: MouseEvent<HTMLElement>) => {
          onSelect(item)
        }}
        isSelected={item.selected}
        label={item?.name ?? ''}
      >
        {item.children.map((item: DepartmentRecord) => {
          return <Fragment key={item.id}>{createAccordion(item)}</Fragment>
        })}
      </AccordionOption>
    )

  return (
    <VStack>
      {list.map((item: DepartmentRecord, index) => (
        <div key={index.toString()}>{createAccordion(item)}</div>
      ))}
    </VStack>
  )
}
