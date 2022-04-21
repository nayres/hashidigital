import { ReactNode } from 'react'
import styles from './style.module.css'
import { StackAlignmentTypes, StackStyleAttributes } from 'components/types'
import { getMappedStackStyles, makeClassName } from 'components/utils'
import { hStackAlignmentOptions } from './hStackAlignmentOptions'

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
  | 'label'

type HStackProps<HStackElement> = {
  /* @as: semantic element alias - 'article' | 'aside' | 'details' | 'main' | 'header' | etc */
  _as?: SemanticElements | 'div'
  /* @spacing: the space between stacked content */
  spacing?: string
  /* @align: Where in the parent the stack sits - 'left' | 'center' | 'right' */
  align?: Exclude<StackAlignmentTypes, 'top' | 'bottom'>
  /* @className: consumer can compose a className */
  className?: string
  children: ReactNode
} & HStackElement

const HStack = <HStackElement,>({
  _as = 'div',
  spacing,
  align = 'left',
  className,
  children,
}: HStackProps<HStackElement>) => {
  const getClassNames = makeClassName(styles)
  const alignItemsFromProps = getMappedStackStyles(
    align,
    hStackAlignmentOptions
  )[StackStyleAttributes.ALIGN_ITEMS]
  const justifyContentFromProps = getMappedStackStyles(
    align,
    hStackAlignmentOptions
  )[StackStyleAttributes.JUSTIFY_CONTENT]

  return (
    <_as
      className={getClassNames('baseHStack', className)}
      style={{
        gap: spacing,
        alignItems: `${alignItemsFromProps}`,
        justifyContent: `${justifyContentFromProps}`,
      }}
    >
      {children}
    </_as>
  )
}

export default HStack
