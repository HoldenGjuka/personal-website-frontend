import { styled } from '@mui/material/styles'
import { Button, List } from '@mui/material'

import theme from '../theme/index.js'


//list for header buttons
export const MyList = styled(List)(({ type }) => ({
  display: type === 'row' ? 'flex' : 'block',
  marginLeft: '17%',
// justifyContent: 'space-evenly',
  [theme.breakpoints.down("md")]: {
    alignitems: 'center',
    justifyContent: 'space-evenly',
    marginRight: '0',
    marginLeft: '0',
  },
  [theme.breakpoints.between("md", "xl")]: {
    
  },
}))

export const AppbarButton = styled(Button, theme)(({ type }) => ({
  
  marginRight: '1.5%',
  '&:last-of-type': {
    marginRight: '0px'
  },
}))