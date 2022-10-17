import { Button } from "@mui/material";
import { MyList } from "../../styles/appbar";


export default function AppbarMobile({ matches }) {
  return (
    <MyList type='row'>
      <Button>Resume</Button>
      <Button>About Me</Button>
      <Button>Email Me</Button>
      <Button>Upcoming Projects</Button>
    </MyList>
  )
}