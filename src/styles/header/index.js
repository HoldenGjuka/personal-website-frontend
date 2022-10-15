import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

//container
export const HeaderContainer = styled(Box)(() => ({
  display: 'flex',
  marginTop: 4,
  justifyContent: 'center',
  alignitems: 'center',
  padding: '2px 8px'
}))

export const HeaderText = styled(Typography)(() => ({
  padding: '10px',
  flexGrow: 1,
}))