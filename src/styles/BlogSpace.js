import React from 'react'

import { styled } from '@mui/material/styles'
import { Box, borders } from '@mui/system'
import { Typography } from '@mui/material'

import { Colors } from './Theme.js'
import theme from './Theme.js'



//container
export const BlogSpaceContainer = styled(Box, Colors)(() => ({
  backgroundColor: Colors.pink,
  gridArea: 'b',
  overflowY: 'scroll',
  // [theme.breakpoints.down("md")]: {
  //   marginLeft: '3%',
  // },
  // [theme.breakpoints.up("md")]: {
  //   marginLeft: '6%',
  // },
  // [theme.breakpoints.up("lg")]: {
  //   marginLeft: '8%',
  // },
  flex: '1 1 auto',
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

//container for the Blogs of BlogSpace, does not include the BlogHeader
export const BlogsContainer = styled(Box)(() => ({
  overflowY: 'scroll',
  width: '65vw',
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
  paddingLeft: '10px',
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
    paddingLeft: '10px',
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: '1.0em',
    paddingLeft: '15px',
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: '1.2em',
    paddingLeft: '20px',
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: '1.6em',
    paddingLeft: '25px',
  },
}))