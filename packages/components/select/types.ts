import type { PropType, ExtractPropTypes } from 'vue'

type LinkType =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

export type LinkProps = {
  type: LinkType
  disabled: boolean
  underline: boolean
}
