import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Button, TextField, InputAdornment } from "@mui/material";
import DrawerSide from "./DrawerSide";
import Topics from "./Topics";
import { Search } from "@mui/icons-material";
import TabArea from "./TabArea";
import SingleCard from "./SingleCard";
import BarTwo from "./BarTwo";
import NotificationsPage from "../pages/NotificationsPage";
import MainPage from "../pages/MainPage";

// const drawerWidth = 80;

export default function SideBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar> */}

      <DrawerSide />
      {/* first box */}
     <Box display={"flex"} height={"100vh"}>
     <Box
        component="main"
        sx={{
          flexGrow: 2,
          bgcolor: "background.default",
          padding: "0 50px",
          border: "1px solid pink",
          position: "sticky",overflowY:"scroll",
        }}
      >
        {/* <MainPage/> */}
       <NotificationsPage/>
      </Box>
      <Divider />
      <Box
        component="main"
        sx={{
          Width: "200px",
          maxWidth: "350px",
          flexGrow: 1,
          padding: "0 20px",border:"1px solid purple",overflowY:"scroll"
        }}
      >
        <BarTwo />
      </Box>
     </Box>
    </Box>
  );
}
