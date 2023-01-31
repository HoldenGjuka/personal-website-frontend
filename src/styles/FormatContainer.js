import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'


//This grid container is the overall format for the entire page
export const FormatContainer = styled(Box)(() => ({
  display: 'grid',
  gridTemplateAreas: "'h h' 'a a' 'd d' 'b s' 'f f'",
  gridTemplateRows: 'auto 1fr 40px',
  gridTemplateColumns: '1fr auto',
  height: '100vh',
}))