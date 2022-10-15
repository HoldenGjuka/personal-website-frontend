import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { List, Typography } from '@mui/material'

//container
export const AppbarContainer = styled(Box)(() => ({

  display: 'flex',
  marginTop: 4,
  justifyContent: 'center',
  alignitems: 'center',
  padding: '2px 8px'
}))

//header
export const AppbarHeader = styled(Typography)(() => ({
  padding: '4px',
  flexGrow: 1,
  fontSize: '4em',
}))

//list for header
export const MyList = styled(List)(({ type }) => ({

  display: type === 'row' ? 'flex' : 'block',
  flexGrow: 3,
  justifyContent: 'center',
  alignitems: 'center'
}))