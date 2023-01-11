import React from 'react'

import { styled } from '@mui/material/styles'
import { Box, borders } from '@mui/system'
import { Typography } from '@mui/material'

import { Colors } from './Theme.js'
import theme from './Theme.js'

//container
export const SkillsContainer = styled(Box, Colors)(() => ({
  backgroundColor: Colors.pink,
  gridArea: 's',
  // [theme.breakpoints.down("md")]: {
  //   marginRight: '3%',
  // },
  // [theme.breakpoints.up("md")]: {
  //   marginRight: '6%',
  // },
  // [theme.breakpoints.up("lg")]: {
  //   marginRight: '8%',
  // },
  flex: '.7 .5 auto',
}))

//formatting for skills header text
export const SkillsHeader = styled(Typography)(() => ({
  [theme.breakpoints.down("md")]: {
    fontSize: '2.5em',
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: '3em',
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: '4em',
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: '5em',
  },
}))

export const SkillsBodyContainer = styled(Box, borders,Colors)(() => ({
  backgroundColor: Colors.green,
  borderColor: Colors.black,
  border: '5px solid black',
}))

const SpanBox = React.forwardRef(function SpanBox(props, ref) {
  return <Box ref={ref} component="span" {...props} />;
});

export const GreenHighlightSpanBox = styled(SpanBox, Colors, theme)(() => ({
  background: 'linear-gradient(180deg,rgba(255,255,255,0) 25%, ' + Colors.green + ' 25%)'
}))

//formatting for skills body text
export const SkillsBody = styled(Typography)(() => ({
  marginLeft: '1.5%',
  [theme.breakpoints.down("md")]: {
    fontSize: '1.6em',
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: '1.8em',
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: '2.0em',
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: '2.2em',
  },
}))