import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'


//container
export const BodyContainer = styled(Box)(() => ({
  display: 'flex',
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
}))

//formatting for skills text
export const SkillsHeader = styled(Typography)(() => ({

}))

//formatting for skills text
export const SkillsBody = styled(Typography)(() => ({

}))