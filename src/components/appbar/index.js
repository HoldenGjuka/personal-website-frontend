import {useMediaQuery } from '@mui/material'
import { useTheme } from "@mui/material/styles";
import AppbarDesktop from './AppbarDesktop';
import AppbarMobile from './AppbarMobile';


export default function Appbar() {
  
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
      {matches ? <AppbarMobile /> :  <AppbarDesktop />}
    </>
  )
}