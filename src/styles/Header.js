import React from 'react'

import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

import theme, { Colors } from './Theme.js'

//container
export const HeaderContainer = styled(Box, Typography, theme)(() => ({
  gridArea: 'h',
  marginTop: 4,
  marginBottom:4,
  textAlign: 'center',
  [theme.breakpoints.down("md")]: {
    fontSize: '3em',
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: '4em',
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: '6em',
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: '8em',
  },
  flex: '0 1 auto'
}))

const SpanBox = React.forwardRef(function SpanBox(props, ref) {
  return <Box ref={ref} component="span" {...props} />;
});

export const HighlightSpanBox = styled(SpanBox, Colors, theme)(() => ({
  background: 'linear-gradient(180deg,rgba(255,255,255,0) 30%, ' + Colors.green + ' 30%)'
}))