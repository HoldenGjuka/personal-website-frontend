import { createTheme } from '@mui/material/styles'

export const Colors = {
  paperBrown: '#C9701632',
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
        defaultProps: {
          disableRipple: true
        },
        variants: [
          {
            props: { variant: 'bold' },
            style: {
              backgroundColor: Colors.green,
              borderRadius: '0',
              boxShadow: '6px 6px 0px 0px',
              disableRipple: 'true',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: Colors.pink
              },
              [breakpointTheme.breakpoints.down("md")]: {
                fontSize: 'medium',
              },
              [breakpointTheme.breakpoints.up("md")]: {
                fontSize: 'large',
              },
              [breakpointTheme.breakpoints.up("lg")]: {
                fontSize: 'x-large',
              },
              color: Colors.black,
            }
          }
        ]  
      }   
  },
})

export default customTheme