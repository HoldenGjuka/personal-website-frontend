import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { Colors } from './Theme'


export const Background = styled(Box)(() => ({
  height: '100%',
  padding: 0,
  backgroundColor: Colors.pink,
  disableGutters: true,
}))

export default Background