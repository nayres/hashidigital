import { ReactNode } from 'react'
import style from './style.module.css'
import { StackAlignmentTypes, StackStyleAttributes } from 'components/types'
import { getMappedStackStyles, makeClassName } from 'components/utils'
import { vStackAlignmentOptions } from './vStackAlignmentOptions'

type SemanticElements =
  | 'article'
  | 'aside'
  | 'details'
  | 'figcaption'
  | 'figure'
  | 'header'
  | 'main'
  | 'mark'
  | 'nav'
  | 'section'
  | 'summary'
  | 'time'

type VStackProps<VStackElement> = {
  /* @as: semantic element alias - 'article' | 'aside' | 'details' | 'main' | 'header' | etc */
  _as?: SemanticElements | 'div'
  /* @spacing: the space between stacked content */
  spacing?: string
  /* @align: Where in the parent the stack sits - 'top' | 'center' | 'bottom' */
  align?: Exclude<StackAlignmentTypes, 'left' | 'right'>
  /* @className: consumer can compose a className */
  className?: string
  children: ReactNode
} & VStackElement

export default function VStack<VStackElement>({
  _as = 'div',
  spacing,
  align = 'top',
  className,
  children,
  ...props
}: VStackProps<VStackElement>) {
  const getClassNames = makeClassName(style)
  const alignItemsFromProps = getMappedStackStyles(
    align,
    vStackAlignmentOptions
  )[StackStyleAttributes.ALIGN_ITEMS]
  const justifyContentFromProps = getMappedStackStyles(
    align,
    vStackAlignmentOptions
  )[StackStyleAttributes.JUSTIFY_CONTENT]

  return (
    <_as
      className={getClassNames('baseVStack', className)}
      style={{
        gap: spacing,
        alignItems: `${alignItemsFromProps}`,
        justifyContent: `${justifyContentFromProps}`,
      }}
      {...props}
    >
      {children}
    </_as>
  )
}
