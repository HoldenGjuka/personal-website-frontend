import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'


export const BigBadContainer = styled(Box)(() => ({
  flexDirection: 'column',
  display: 'flex',
  disableGutters: true,
  justifyContent: 'stretch',
  height: '100vh',
}))