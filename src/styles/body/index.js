import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { Paper, Typography } from '@mui/material'
import { Colors } from '../theme/index.js'


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
  fontSize: '5em',
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
  fontSize: '2em',
  paddingLeft: 15,
}))

//blog title typography
export const BlogBody = styled(Typography)(() => ({
  fontSize: '1em',
  paddingLeft: 5,
}))


//container
export const SkillsContainer = styled(Box, Colors)(() => ({
  display: 'flex',
  flex: '1 .5 auto',
  backgroundColor: Colors.paperBrown,
}))

//formatting for skills text
export const SkillsHeader = styled(Typography)(() => ({
  fontSize: '2em',
}))

//formatting for skills text
export const SkillsBody = styled(Typography)(() => ({
  fontSize: '1.3em'
}))