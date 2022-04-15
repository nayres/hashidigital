import { FC } from 'react'
import { makeClassName } from '../utils'
import styles from './style.module.css'

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
  | 'figure'
  | 'time'

export interface BoxProps {
  /* @as: semantic element alias - 'h1' - 'h6' | 'p' | 'li' | 'figcaption' | etc */
  _as?: SemanticElements | 'div'
  /* @className: consumer can compose a className */
  className?: string
  /* @width: width of box element */
  width?: string
  /* @height: height of box element */
  height?: string
  /* @border: box border style */
  border?: string
  /* @background: box background color */
  background?: string
  /* @padding: padding of box element */
  padding?: string
  /* @radius: border radius of box element */
  radius?: string
}

const Box: FC<BoxProps> = ({
  _as = 'div',
  children,
  className,
  width,
  height,
  border,
  background,
  padding,
  radius,
}) => {
  const getClassNames = makeClassName(styles)
  return (
    <_as
      className={getClassNames('baseBox', className)}
      style={{
        width,
        height,
        border,
        backgroundColor: background,
        padding,
        borderRadius: radius,
      }}
    >
      {children}
    </_as>
  )
}

export default Box
