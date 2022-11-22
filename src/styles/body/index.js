import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { Paper, Typography } from '@mui/material'
import { Colors } from '../theme/index.js'
import theme from '../theme/index.js'


//container
export const BodyContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '2%',
  flexDirection:'row',
  marginTop: 14,
  justifyContent: 'center',
  alignitems: 'center',
  // overflow: 'hidden'
}))

//container
export const BlogSpaceContainer = styled(Box)(() => ({
  display: 'flex',
  flex: '1 0 auto',

}))

//Blog Space Header
export const BlogHeader = styled(Typography)(() => ({
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

export const BlogPaper = styled(Paper, Colors)(() => ({
  elevation: 10,
  borderRadius: 4,
  paddingBottom: 15,
  variant: 'outlined',
  backgroundColor: Colors.paperBrown,
}))

//blog title typography
export const BlogTitle = styled(Typography)(() => ({
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

//blog title typography
export const BlogBody = styled(Typography)(() => ({
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
  backgroundColor: Colors.paperBrown,
}))

//formatting for skills text
export const SkillsHeader = styled(Typography)(() => ({
  [theme.breakpoints.down("md")]: {
    fontSize: '1.5em',
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: '1.8em',
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: '2.1em',
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: '2.4em',
  },
}))

//formatting for skills text
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