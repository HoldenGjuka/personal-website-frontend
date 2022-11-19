import { createTheme, styled } from '@mui/material/styles'
import { Box } from '@mui/system'

import Image from '../../images/backgrounds/blue-texture.jpeg'

export const Colors = {
  paperBrown: '#C9701632',
  buttonText: 'black',
}

const customTheme = createTheme({
  components: {
     MuiButton: {
        variants: [
          {
            props: { variant: 'bold' },
            style: {
              fontWeight: 'bold',
              fontSize: 'large',
              color: Colors.buttonText,
            }
          }
        ]  
      }   
  },
  breakpoints: {xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920},
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