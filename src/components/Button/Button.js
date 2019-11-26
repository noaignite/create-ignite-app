export { default } from '@material-ui/core/Button'

const borderWidth = 1
const xPadding = 30
const yPadding = 13

export const styles = () => ({
  root: {
    padding: `${yPadding}px ${xPadding}px`,
  },
  text: {
    padding: `${yPadding}px ${xPadding}px`,
  },
  outlined: {
    padding: `${yPadding - borderWidth}px ${xPadding - borderWidth}px`,
  },
  sizeSmall: {
    padding: `${yPadding - 2}px ${xPadding - 2}px`,
  },
  sizeLarge: {
    padding: `${yPadding + 4}px ${xPadding + 4}px`,
  },
})
