import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import { Colors } from './Theme'


export const FooterContainer = styled(Box)(() => ({
  backgroundColor: Colors.pink,
  flex: ' 1 20px',
  padding: 0,
  disableGutters: true,
  winWidth: '100%'
}))