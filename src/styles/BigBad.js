import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'


export const BigBadContainer = styled(Box)(() => ({
  display: 'grid',
  gridTemplateAreas: "'h h' 'a a' 'd d' 'b s' 'f f'",
  gridTemplateRows: 'auto 1fr 40px',
  gridTemplateColumns: '1fr auto',
  maxHeight: '100vh',
}))