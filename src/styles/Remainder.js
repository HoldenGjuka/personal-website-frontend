import { styled } from '@mui/material/styles'
import { Container } from '@mui/material'
import { Colors } from './Theme'


export const RemainderContainer = styled(Container)(() => ({
  backgroundColor: Colors.pink,
  flex: '1 1 auto',
  bottom: '0',
}))