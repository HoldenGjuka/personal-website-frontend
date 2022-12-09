import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { Colors } from '../theme'

//container
export const Background = styled(Box)(() => ({
  padding: 0,
  backgroundColor: Colors.pink,
  disableGutters: true,
}))

export default Background