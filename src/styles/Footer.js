import { styled } from '@mui/material/styles'
import { Container } from '@mui/material'
import { Colors } from './Theme'


export const FooterContainer = styled(Container)(() => ({
  backgroundColor: Colors.pink,
  flex: '0 1 20px',
}))