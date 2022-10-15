import { createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      }
    }
  }
})

export default darkTheme