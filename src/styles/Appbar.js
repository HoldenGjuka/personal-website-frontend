import { styled } from '@mui/material/styles'
import { Button, List } from '@mui/material'

import theme from './Theme.js'


//list for header buttons
export const MyList = styled(List)(({ type }) => ({
  display: type === 'row' ? 'flex' : 'block',
  marginBottom: '1.5%',
  gap: '7%',
  justifyContent: 'center',
  [theme.breakpoints.down("md")]: {
    
    
    marginRight: '0',
    marginLeft: '0',
    gap: '1.5%',
  },
}))

//individual Buttons for appbar, further stylings in styles/theme
export const AppbarButton = styled(Button, theme)(({ type }) => ({
}))