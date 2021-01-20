const styles = (theme) => ({
  root: {
    '&$focused $notchedOutline': {
      borderColor: theme.palette.text.primary,
    },
  },
})

export default styles
