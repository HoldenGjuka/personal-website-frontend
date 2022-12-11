import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'


export const BigBadContainer = styled(Box)(() => ({
  flexDirection: 'column',
  display: 'flex',
  // padding: 0,
  disableGutters: true,
  justifyContent: 'stretch'
}))