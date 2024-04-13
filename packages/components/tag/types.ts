import { ExtractPropTypes } from 'vue'

export const tagType = [
  'default',
  'primary',
  'success',
  'info',
  'warning',
  'danger',
]

export const tagProps = {
  type: {
    type: String,
    validator(value: string) {
      return tagType.includes(value)
    },
  },
}

export type TagProps = ExtractPropTypes<typeof tagProps>
