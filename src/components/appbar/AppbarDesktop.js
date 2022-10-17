import { Button } from "@mui/material";
import { AppbarContainer, MyList } from "../../styles/appbar";


export default function AppbarDesktop({matches}) {
  return (
    <AppbarContainer>
      <MyList type='row'>
        <Button>Resume</Button>
        <Button>About Me</Button>
        <Button>Email Me</Button>
        <Button>Upcoming Projects</Button>
      </MyList>
    </AppbarContainer>
  )
}