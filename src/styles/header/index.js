import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

//container
export const HeaderContainer = styled(Box, Typography)(() => ({
  display: 'flex',
  marginTop: 4,
  marginBottom:4,
  justifyContent: 'center',
  alignitems: 'center',
  fontSize: '6em',
  flexGrow: 1,
}))