import { createTheme } from '@mui/material/styles'

export const Colors = {
  paperBrown: '#C9701632',
  buttonText: 'black',
  blue: '#5bbfcf',
  black: '#050000',
  green: '#20b9a5',
  pink: '#fbc5d3',
}

//Dummy theme that passes custom breakpoints into customTheme
let breakpointTheme = createTheme({
  breakpoints: {xs: 0, sm: 600, md: 1080, lg: 1920, xl: 2560},
})


//Overrides base MUI components, global theme to be used for the entire project
//takes in breakpointTheme to allow the use of breakpoints
const customTheme = createTheme(breakpointTheme, {
  components: {
     MuiButton: {
        variants: [
          {
            props: { variant: 'bold' },
            style: {
              fontWeight: 'bold',
              [breakpointTheme.breakpoints.down("md")]: {
                fontSize: 'medium',
              },
              [breakpointTheme.breakpoints.up("md")]: {
                fontSize: 'large',
              },
              [breakpointTheme.breakpoints.up("lg")]: {
                fontSize: 'x-large',
              },
              color: Colors.buttonText,
            }
          }
        ]  
      }   
  },
})

export default customTheme