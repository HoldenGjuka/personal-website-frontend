import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'

import { Colors } from './Theme.js'

export const ColumnContainer = styled(Box, Colors)(() => ({
  gridArea: 'c',
  backgroundColor: Colors.pink
}))