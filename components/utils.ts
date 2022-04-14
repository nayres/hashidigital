// Composes classNames from css-modules object, and allows for composing one-off classNames at consumer level
export const makeClassName =
  (styles: Record<string, string>) =>
  (
    styleKey: string,
    color: string,
    composedClassName: string | undefined
  ): string => {
    const baseClass = `${styles[styleKey]} ${styles[color]}`
    return composedClassName ? `${baseClass} ${composedClassName}` : baseClass
  }
