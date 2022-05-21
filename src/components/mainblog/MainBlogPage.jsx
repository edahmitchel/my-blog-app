import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import DrawerSide from "../DrawerSide";
import SecondSection from "../secondsection/SecondSection";
import NotificationsPage from "../../pages/NotificationsPage";
import MainPage from "../../pages/MainPage";
import Posts from "../../pages/Posts";

// const drawerWidth = 80;

export default function MainBlogPage() {
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
        <Posts/>
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
        <SecondSection />
      </Box>
     </Box>
    </Box>
  );
}
