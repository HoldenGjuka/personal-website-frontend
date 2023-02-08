import React from 'react'

import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'

export const ColumnContainer = styled(Box, Typography, theme)(() => ({
  gridArea: 'c',
  flex: '0 1 auto'
}))