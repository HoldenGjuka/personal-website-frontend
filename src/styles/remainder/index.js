import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { Colors } from '../theme'

//flex container
export const RemainderContainer = styled(Box)(() => ({
  height: '100vh',
}))

//takes up remaining space in the viewport
export const Remainder = styled(Box)(() => ({
  width: '100%',
  flexGrow: '1',
  flexDirection: 'column',

  backgroundColor: Colors.pink,
}))