import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import React from 'react'
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Avatar, IconButton, ScopedCssBaseline } from "@mui/material";
import { Stack } from "@mui/material";
const drawerWidth = 60;

const DrawerSide = () => {
  return (
      <>
      {/* <ScopedCssBaseline/> */}
      <Drawer
      sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
        width: drawerWidth,
        boxSizing: "border-box",
      },
    }}
    variant="permanent"
    anchor="left"
  >
  
    <Typography>hello</Typography>
    <Divider />
    <List >
      {["home", "notification", "bookmark", "stories"].map((text, index) => (
        <ListItem key={text} disableGutters >
          <ListItemButton>
            <ListItemIcon>
              {text === "home" ? <HomeIcon /> :text === "notification" ? <NotificationsNoneIcon />:text ==="bookmark"?<BookmarksOutlinedIcon/>:<AutoStoriesOutlinedIcon/>}
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    {/* <Stack border="1px solid blue" justifyItems={"center"}>
      
    <IconButton>
      <DriveFileRenameOutlineIcon/>
    </IconButton>
    <Avatar /> */}

    
    <List>
      {["edit", "avatar",].map((text, index) => (
          <ListItem key={text} disableGutters>
          <ListItemButton>
          {index   === 0? <ListItemIcon><DriveFileRenameOutlineIcon/> </ListItemIcon>  :<Box ><Avatar  sx={{ width: 26, height: 26 }}/></Box> }
          
          </ListItemButton>
          </ListItem>
          ))}
        </List>
  </Drawer>
        </>
  )
}

export default DrawerSide