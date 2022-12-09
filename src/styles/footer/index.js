import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

//container
export const FooterContainer = styled(Box, Typography)(() => ({
  margin: '10px',
  position: 'fixed',
  bottom: '0',
  right: '0'
}))