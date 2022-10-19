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
  }
})

//background image
export const BackgroundImage = styled(Box)(() => ({
  backgroundImage: `url(${Image})`, 
  objectFit: 'fill',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
}))

export default customTheme