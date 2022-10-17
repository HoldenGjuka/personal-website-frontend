import { styled } from '@mui/material/styles'
import { List } from '@mui/material'


//list for header buttons
export const MyList = styled(List)(({ type }) => ({
  display: type === 'row' ? 'flex' : 'block',
  justifyContent: 'space-evenly',
  alignitems: 'center'
}))