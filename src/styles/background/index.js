import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { Colors } from '../theme'


export const Background = styled(Box)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  backgroundColor: Colors.pink,
  disableGutters: true,
}))

export default Background