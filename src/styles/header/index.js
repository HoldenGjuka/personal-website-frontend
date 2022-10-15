import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

//container
export const HeaderContainer = styled(Box)(() => ({
  display: 'flex',
  marginTop: 4,
  marginBottom:4,
  justifyContent: 'center',
  alignitems: 'center',
}))

export const HeaderText = styled(Typography)(() => ({
  padding: '10px',
  flexGrow: 1,
  fontSize: '8em'
}))