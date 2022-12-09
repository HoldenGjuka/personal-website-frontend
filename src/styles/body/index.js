import React from 'react'

import { styled } from '@mui/material/styles'
import { Box, borders } from '@mui/system'
import { Typography } from '@mui/material'

import { Colors } from '../theme/index.js'
import theme from '../theme/index.js'


//container
export const BodyContainer = styled(Box, Colors)(() => ({
  display: 'flex',
  gap: '4%',
  flexDirection:'row',
  marginTop: 14,
  justifyContent: 'center',
  alignitems: 'center',
  maxWidth: 'false',
}))

//container
export const BlogSpaceContainer = styled(Box)(() => ({
  display: 'flex',
  flex: '1 0 auto',
}))

const SpanBox = React.forwardRef(function SpanBox(props, ref) {
  return <Box ref={ref} component="span" {...props} />;
});

export const BlueHighlightSpanBox = styled(SpanBox, Colors, theme)(() => ({
  background: 'linear-gradient(180deg,rgba(255,255,255,0) 25%, ' + Colors.blue + ' 25%)'
}))

//Blog Space Header
export const BlogsHeader = styled(Typography)(() => ({
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

//container for the BlogPost title and body
export const BlogPostBox = styled(Box, borders, Colors)(() => ({
  backgroundColor: Colors.blue,
  borderColor: Colors.black,
  border: '5px solid black',
  marginBottom: '10px',
  '&:last-of-type': {
    marginBottom: '0px'
  }
}))

//individual blogpost title typography
export const BlogPostTitle = styled(Typography)(() => ({
  [theme.breakpoints.down("md")]: {
    fontSize: '1.2em',
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: '1.4em',
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: '1.6em',
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: '2em',
  },
}))

//individual blog body typography
export const BlogPostBody = styled(Typography)(() => ({
  [theme.breakpoints.down("md")]: {
    fontSize: '.8em',
    paddingLeft: "5",
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: '1.0em',
    paddingLeft: "10",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: '1.2em',
    paddingLeft: "15",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: '1.6em',
    paddingLeft: "20",
  },
}))


//container
export const SkillsContainer = styled(Box, Colors)(() => ({
  display: 'flex',
  flex: '1 .5 auto',
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

export const GreenHighlightSpanBox = styled(SpanBox, Colors, theme)(() => ({
  background: 'linear-gradient(180deg,rgba(255,255,255,0) 25%, ' + Colors.green + ' 25%)'
}))

//formatting for skills body text
export const SkillsBody = styled(Typography)(() => ({
  [theme.breakpoints.down("md")]: {
    fontSize: '1.2em',
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: '1.4em',
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: '1.6em',
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: '1.8em',
  },
}))