export type StackAlignmentTypes = 'top' | 'center' | 'bottom' | 'left' | 'right'

export interface StackStyleMapAttributes {
  alignItems: string
  justifyContent: string
}

export type StackStyleMap = Map<string, StackStyleMapAttributes>

export enum StackStyleAttributes {
  ALIGN_ITEMS = 'alignItems',
  JUSTIFY_CONTENT = 'justifyContent',
}
