import { createTheme, styled } from '@mui/material/styles'
import { Box } from '@mui/system'

import Image from '../../images/backgrounds/blue-texture.jpeg'

const customTheme = createTheme({
  components: {
     MuiButton: {
        variants: [
          {
            props: { variant: 'bold' },
            style: {
              fontWeight: 'bold',
              fontSize: 'large',
              color: 'black'
            }
          }
        ]  
      }   
  }
})

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}

export const browserHeight = getHeight()

export const browserWidth = getWidth()



//background image
export const BackgroundImage = styled(Box)(() => ({
  backgroundImage: `url(${Image})`, 
  objectFit: 'fill',
  height: browserHeight,
  width: browserWidth,
}))

export default customTheme