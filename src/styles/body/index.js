import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

//SEE ABOUT MERGING TEXT AND THE TYPOGRAPHY

//container
export const BodyContainer = styled(Box)(() => ({

  display: 'flex',
  marginTop: 4,
  justifyContent: 'center',
  alignitems: 'center',
  padding: '2px 8px'
}))

//container
export const BlogSpaceContainer = styled(Box)(() => ({

  display: 'flex',
  flexGrow: .65,
  marginTop: 4,
  justifyContent: 'center',
  alignitems: 'center',
  padding: '2px 8px'
}))

//container
export const SkillsContainer = styled(Box)(() => ({

  display: 'flex',
  flexGrow: .35,
  marginTop: 4,
  justifyContent: 'center',
  alignitems: 'center',
  padding: '2px 8px'
}))

export const HeaderText = styled(Typography)(() => ({
  flexGrow: 1,
  fontSize: '5em',
}))

//blog title typography
export const BlogTitle = styled(Typography)(() => ({
  justifyContent: 'flex-start',
  flexGrow: .25,
  fontSize: '2em',
}))

//header
export const BlogTitleText = styled(Typography)(() => ({
  fontSize: '2em',
}))

//blog title typography
export const BlogBody = styled(Typography)(() => ({
  justifyContent: 'flex-start',
  flexGrow: .9,
  fontSize: '2em',
}))

//header
export const BlogBodyText = styled(Typography)(() => ({
  flexGrow: 1,
  fontSize: '1em',
}))