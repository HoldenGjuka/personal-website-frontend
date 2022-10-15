import { ListItemText } from "@mui/material";
import { AppbarContainer, MyList } from "../../styles/appbar";


export default function AppbarDesktop({matches}) {
  return (
    <AppbarContainer>
      <MyList type='row'>
        <ListItemText primary="Resume"></ListItemText>
        <ListItemText primary="About Me"></ListItemText>
        <ListItemText primary="Email Me"></ListItemText>
        <ListItemText primary="Upcoming Projects"></ListItemText>
      </MyList>
    </AppbarContainer>
  )
}