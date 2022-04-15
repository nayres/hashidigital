import {
  StackAlignmentTypes,
  StackStyleMapAttributes,
  StackStyleMap,
} from './types'

// Composes classNames from css-modules object, and allows for composing one-off classNames at consumer level
export const makeClassName =
  (styles: Record<string, string>) =>
  (styleKey: string, composedClassName?: string | undefined): string =>
    composedClassName
      ? `${styles[styleKey]} ${composedClassName}`
      : `${styles[styleKey]}`

export const getMappedStackStyles = (
  alignProp: StackAlignmentTypes,
  styleMap: StackStyleMap
): StackStyleMapAttributes =>
  styleMap.get(alignProp as string) as StackStyleMapAttributes
