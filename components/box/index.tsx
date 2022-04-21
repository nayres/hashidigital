import { HTMLProps } from 'react'
import { makeClassName } from 'components/utils'
import style from './style.module.css'

type SemanticElements =
  | 'article'
  | 'aside'
  | 'figure'
  | 'header'
  | 'main'
  | 'nav'
  | 'section'
  | 'summary'

type BoxProps<BoxElement> = {
  /* @as: semantic element alias - 'article' | 'aside' | 'details' | 'main' | 'header' | etc */
  _as?: SemanticElements | 'div'
  /* @className: consumer can compose a className */
  className?: string
  /* @width: width of box element */
  width?: string | number
  /* @height: height of box element */
  height?: string | number
  /* @border: box border style */
  border?: string
  /* @background: box background color */
  background?: string
  /* @padding: padding of box element */
  padding?: string
  /* @radius: border radius of box element */
  radius?: string
} & HTMLProps<HTMLDivElement> &
  BoxElement

export default function Box<BoxElement>({
  _as = 'div',
  children,
  className,
  width,
  height,
  border,
  background,
  padding,
  radius,
  ...props
}: BoxProps<BoxElement>) {
  const getClassNames = makeClassName(style)
  return (
    <_as
      className={getClassNames('baseBox', className)}
      style={{
        width: width,
        height: height,
        border,
        backgroundColor: background,
        padding,
        borderRadius: radius,
      }}
      {...props}
    >
      {children}
    </_as>
  )
}
