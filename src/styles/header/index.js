import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import theme from '../theme/index.js'

//container
export const HeaderContainer = styled(Box, Typography, theme)(() => ({
  display: 'flex',
  height: '1/8',
  marginTop: 4,
  marginBottom:4,
  justifyContent: 'center',
  alignitems: 'center',
  [theme.breakpoints.down("lg")]: {
    fontSize: '3em',
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: '6em',
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: '8em',
  },
  flexGrow: 1,
}))