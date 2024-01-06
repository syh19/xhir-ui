export const messageProps = {
  type: {
    type: String,
    default: 'info'
  },
  message: {
    type: String,
  },
  iconName: {
    type: String,
  },
  showClose: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: Number,
    default: 1500,
  }
}