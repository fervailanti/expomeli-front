import { CONDITIONS } from './constants'

export const formatCondition = (condition) => {
  return CONDITIONS[condition] || CONDITIONS.default
}
