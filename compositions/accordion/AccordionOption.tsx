import { useState, useEffect, MouseEvent, ReactNode, Children } from 'react'
import HStack from 'components/hStack'

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
  const [selected, setSelected] = useState<boolean | undefined>(() => isOpen)

  useEffect(() => {
    setSelected(isOpen)
  }, [isOpen])

  const departmentChildren = Children.toArray(children)

  return (
    <div>
      {departmentChildren.length > 0 && (
        <div
          onClick={() => toggleItemOpen(!isOpen)}
          style={{ fontSize: '0.5rem' }}
        >
          {isOpen ? 'close' : 'open'}
        </div>
      )}
      <div
        onClick={(e: MouseEvent<HTMLInputElement>) => {
          setSelected(!selected)
          onSelect(e)
        }}
        style={{ fontSize: '1rem' }}
      >
        {label}
      </div>
      <div>{isOpen && children}</div>
    </div>
  )
}
