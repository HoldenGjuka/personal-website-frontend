import { Button } from "@mui/material";
import { MyList } from "../../styles/appbar";


export default function AppbarDesktop({matches}) {
  return (
    <MyList type='row'>
      <Button variant='bold'>Resume</Button>
      <Button variant='bold'>About Me</Button>
      <Button variant='bold'>Email Me</Button>
      <Button variant='bold'>Upcoming Projects</Button>
    </MyList>
  )
}