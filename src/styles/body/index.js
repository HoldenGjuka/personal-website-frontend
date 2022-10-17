import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { Typography, Paper } from '@mui/material'


//container
export const BodyContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection:'row',
  marginTop: 4,
  justifyContent: 'center',
  alignitems: 'center',
}))

//container
export const BlogSpaceContainer = styled(Paper)(() => ({

  display: 'flex',
  flexDirection: 'row',
  flexGrow: 1.5,
  marginTop: 10,
}))

//Blog Space Header
export const BlogHeader = styled(Typography)(() => ({
  flexGrow: 1,
  fontSize: '5em',
}))

//blog title typography
export const BlogTitle = styled(Typography)(() => ({
  fontSize: '2em',
}))

//blog title typography
export const BlogBody = styled(Typography)(() => ({
  fontSize: '1em',
}))


//container
export const SkillsContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexGrow: .5,
  marginTop: 4,
  justifyContent: 'flex-start',
  alignitems: 'flex-start',
  padding: '2px 8px'
}))

//formatting for skills text
export const SkillsHeader = styled(Typography)(() => ({

}))

//formatting for skills text
export const SkillsBody = styled(Typography)(() => ({

}))