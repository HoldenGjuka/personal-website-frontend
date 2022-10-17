import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { Paper, Typography } from '@mui/material'


//container
export const BodyContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '2%',
  flexDirection:'row',
  marginTop: 14,
  justifyContent: 'center',
  alignitems: 'center',
}))

//container
export const BlogSpaceContainer = styled(Box)(() => ({
  display: 'flex',
  
}))

//Blog Space Header
export const BlogHeader = styled(Typography)(() => ({
  fontSize: '5em',
}))

export const BlogPaper = styled(Paper)(() => ({
  elevation: 10,
  borderRadius: 4,
  paddingBottom: 15,
  variant: 'outlined',
  backgroundColor: '#C9701632',
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
  flex: '1 0 auto',
  backgroundColor: '#C9701632'
}))

//formatting for skills text
export const SkillsHeader = styled(Typography)(() => ({
  fontSize: '2em',
}))

//formatting for skills text
export const SkillsBody = styled(Typography)(() => ({
  fontSize: '1.3em'
}))