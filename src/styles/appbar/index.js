import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { List } from '@mui/material'

//container
export const AppbarContainer = styled(Box)(() => ({
  display: 'flex',
  marginTop: 4,
  justifyContent: 'space-evenly',
  alignitems: 'center',
  padding: '2px 8px'
}))

//list for header buttons
export const MyList = styled(List)(({ type }) => ({
  display: type === 'row' ? 'flex' : 'block',
  justifyContent: 'space-evenly',
  alignitems: 'center'
}))