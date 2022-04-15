import { StackStyleMap } from 'components/types'

export const hStackAlignmentOptions: StackStyleMap = new Map([
  ['left', { alignItems: 'flex-start', justifyContent: 'flex-start' }],
  ['center', { alignItems: 'center', justifyContent: 'center' }],
  ['right', { alignItems: 'flex-start', justifyContent: 'flex-end' }],
])
