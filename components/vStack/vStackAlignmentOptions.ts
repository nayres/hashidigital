import { StackStyleMap } from 'components/types'

export const vStackAlignmentOptions: StackStyleMap = new Map([
  ['top', { alignItems: 'flex-start', justifyContent: 'flex-start' }],
  ['center', { alignItems: 'center', justifyContent: 'center' }],
  ['bottom', { alignItems: 'flex-start', justifyContent: 'flex-end' }],
])
