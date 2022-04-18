import { useState, useEffect, MouseEvent, ReactNode, Children } from 'react'
import HStack from 'components/hStack'
import CaratDownIcon from './CaratDownIcon'
import ChevronIcon from './ChevronIcon'
import style from './style.module.css'

interface AccordionOptionProps {
  id: string
  label: string
  isSelected: boolean | undefined
  onSelect: (e: MouseEvent<HTMLInputElement>) => void
  children: ReactNode
}

export default function AccordionOption({
  id,
  label,
  isSelected,
  onSelect,
  children,
}: AccordionOptionProps) {
  const [isOpen, toggleItemOpen] = useState<boolean | undefined>()
  const [selected, setSelected] = useState<boolean | undefined>(
    () => isSelected
  )

  useEffect(() => {
    setSelected(isSelected)
  }, [isSelected])

  const departmentChildren = Children.toArray(children)

  return (
    <div>
      {departmentChildren.length > 0 ? (
        <div
          className={
            selected
              ? `${style.accordionLabel} ${style.selected}`
              : `${style.accordionLabel}`
          }
          onClick={(e: MouseEvent<HTMLInputElement>) => {
            setSelected(!selected)
            onSelect(e)
            toggleItemOpen(!isOpen)
          }}
        >
          {isOpen ? <CaratDownIcon /> : <ChevronIcon />}
          {label}
        </div>
      ) : (
        <div
          className={
            selected
              ? `${style.accordionLink} ${style.selected}`
              : `${style.accordionLink}`
          }
          onClick={(e: MouseEvent<HTMLInputElement>) => {
            setSelected(!selected)
            onSelect(e)
          }}
        >
          {label}
        </div>
      )}
      <div className={style.accordionLink}>{isOpen && children}</div>
    </div>
  )
}
