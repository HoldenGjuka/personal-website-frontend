// import { useMediaQuery } from '@mui/material'
// import { useTheme } from "@mui/material/styles";
// import HeaderMobile from './HeaderMobile'
import HeaderDesktop from './HeaderDesktop'

export default function Header() {

  // const theme = useTheme()
  // const matches = useMediaQuery(theme.breakpoints.down('md'))
  // return (
  //   <>
  //     {matches ? <HeaderMobile /> :  <HeaderDesktop />}
  //   </>
  // )

  return (
    <HeaderDesktop />
  )
}