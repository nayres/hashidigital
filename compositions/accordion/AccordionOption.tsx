import { useState, useEffect, MouseEvent, ReactNode, Children } from 'react'
import HStack from 'components/hStack'
import CaratDownIcon from './CaratDownIcon'
import ChevronIcon from './ChevronIcon'
import style from './style.module.css'

interface AccordionOptionProps {
  id: string
  label: string
  isSelected: boolean
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
  const [isOpen, toggleItemOpen] = useState(false)
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    setSelected(isSelected)
  }, [isSelected])

  const departmentChildren = Children.toArray(children)

  const handleAccordionLabelClick = (e: MouseEvent<HTMLInputElement>) => {
    if (isOpen) {
      toggleItemOpen(!isOpen)
      return
    }

    onSelect(e)
    toggleItemOpen(!isOpen)
    setSelected(!selected)
  }

  const handleAccordionLinkClick = (e: MouseEvent<HTMLInputElement>) => {
    setSelected(!selected)
    onSelect(e)
  }

  return (
    <>
      {departmentChildren.length > 0 ? (
        <>
          <div
            className={
              selected
                ? `${style.accordionLabel} ${style.selected}`
                : `${style.accordionLabel}`
            }
            onClick={handleAccordionLabelClick}
            aria-expanded={isOpen}
            aria-selected={selected}
            role="treeitem"
          >
            {isOpen ? <CaratDownIcon /> : <ChevronIcon />}
            <button tabIndex={0}>{label}</button>
          </div>
          {isOpen && <div className={style.accordionLink}>{children}</div>}
        </>
      ) : (
        <div
          className={
            selected
              ? `${style.accordionLink} ${style.selected}`
              : `${style.accordionLink}`
          }
          onClick={handleAccordionLinkClick}
          aria-selected={selected}
          role="treeitem"
        >
          <button tabIndex={0}>{label}</button>
        </div>
      )}
    </>
  )
}
