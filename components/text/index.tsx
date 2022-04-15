import { FC } from 'react'
import { makeClassName } from 'components/utils'
import styles from './style.module.css'

type SemanticText =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'blockquote'
  | 'dd'
  | 'dl'
  | 'dt'
  | 'figcaption'
  | 'figure'
  | 'hr'
  | 'li'
  | 'menu'
  | 'ol'
  | 'p'
  | 'pre'
  | 'ul'

interface TextProps {
  /* @variant: typography variant - 'headingBold' | 'headingLight' | 'body' | 'label' */
  variant?: 'headingBold' | 'headingLight' | 'body' | 'label'
  /* @color: typography color - 'black' | 'gray3' | 'gray4' | 'accordionGray' | 'inputGray' */
  color?: 'black' | 'gray3' | 'gray4' | 'accordionGray' | 'inputGray'
  /* @as: semantic element alias - 'h1' - 'h6' | 'p' | 'li' | 'figcaption' | etc */
  _as?: SemanticText
  /* @className: consumer can compose a className */
  className?: string
}

const Text: FC<TextProps> = ({
  variant = 'body',
  color = 'black',
  _as = 'h1',
  children,
  className,
}) => {
  const getClassNames = makeClassName(styles)
  return (
    <_as
      className={`${styles.textBase} ${getClassNames(variant)} ${getClassNames(
        color,
        className
      )}`}
    >
      {children}
    </_as>
  )
}

export default Text
