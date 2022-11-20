import { createTheme, styled } from '@mui/material/styles'
import { Box } from '@mui/system'

import Image from '../../images/backgrounds/blue-texture.jpeg'

export const Colors = {
  paperBrown: '#C9701632',
  buttonText: 'black',
}

//Dummy theme that passes custom breakpoints into customTheme
let breakpointTheme = createTheme({
  breakpoints: {xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920},
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
              [breakpointTheme.breakpoints.up("sm")]: {
                fontSize: 'medium',
              },
              [breakpointTheme.breakpoints.up("md")]: {
                fontSize: 'large',
              },
              color: Colors.buttonText,
            }
          }
        ]  
      }   
  },
})

//background image
export const BackgroundImage = styled(Box)(() => ({
  backgroundImage: `url(${Image})`, 
  objectFit: 'fill',
  backgroundSize: 'cover',
  height: '100vmax',
  width: '100%',
}))

export default customTheme