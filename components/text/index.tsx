import { ReactNode } from 'react'
import { makeClassName } from 'components/utils'
import style from './style.module.css'

type SemanticText =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'figcaption'
  | 'li'
  | 'p'
  | 'label'

type TextProps<TextElement> = {
  align?: 'left' | 'center' | 'right'
  /* @variant: typography variant - 'headingBold' | 'headingLight' | 'body' | 'label' */
  variant?: 'headingBold' | 'headingLight' | 'body' | 'label'
  /* @color: typography color - 'black' | 'gray3' | 'gray4' | 'accordionGray' | 'inputGray' */
  color?: 'black' | 'gray3' | 'gray4' | 'accordionGray' | 'inputGray'
  /* @as: semantic element alias - 'h1' - 'h6' | 'p' | 'li' | 'figcaption' | etc */
  _as?: SemanticText
  children: ReactNode
  /* @className: consumer can compose a className */
  className?: string
} & TextElement

export default function Text<TextElement>({
  align = 'left',
  variant = 'body',
  color = 'black',
  _as = 'h1',
  children,
  className,
  ...props
}: TextProps<TextElement>) {
  const getClassNames = makeClassName(style)
  return (
    <_as
      className={`${style.textBase} ${getClassNames(variant)} ${getClassNames(
        color
      )} ${getClassNames(align, className)}`}
      {...props}
    >
      {children}
    </_as>
  )
}
