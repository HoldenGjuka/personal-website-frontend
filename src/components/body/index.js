import { useMediaQuery } from '@mui/material'
import { useTheme } from "@mui/material/styles";

import BodyDesktop from './BodyDesktop';
import BodyMobile from './BodyMobile';


export default function Body() {
  
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
      {matches ? <BodyMobile /> :  <BodyDesktop />}
    </>
  )
}

