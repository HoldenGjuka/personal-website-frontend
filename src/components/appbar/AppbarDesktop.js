import { ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import { SearchIcon } from '@mui/icons-material/Search'


export default function AppbarDesktop({matches}) {
  return (
    /**
     * Appbar Container
     * Header
     * List
     */
    <AppbarContainer>
      <AppbarHeader>My Bags</AppbarHeader>
      <MyList type='row'>
        <ListItemText primary="Home"></ListItemText>
        <ListItemText primary="Categories"></ListItemText>
        <ListItemText primary="Products"></ListItemText>
        <ListItemText primary="Contact Us"></ListItemText>
      </MyList>
    </AppbarContainer>
  )
}