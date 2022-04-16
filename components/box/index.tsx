import { FC, HTMLProps } from 'react'
import { makeClassName } from 'components/utils'
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
  | 'time'

type BoxProps = {
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
} & HTMLProps<HTMLDivElement>

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
  ...props
}) => {
  const getClassNames = makeClassName(styles)
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

export default Box
