import React from "react";
import {
  AppBar,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  Button,
  SpeedDialIcon,
} from "@mui/material";
import { Box } from "@mui/system";

const Header = () => {
  return (
    <>
      <AppBar position="sticky" sx={{background:"blue"}}>
        <Toolbar>
          <SpeedDialIcon/>
          <Typography>logo</Typography>

          {/* <Tabs sx={{"margin-left":"auto"}} textColor='white'>
                    <Tab textColor="inherit" label= "sign in"/>
                    <Tab label= "get started"/>
                </Tabs> */}
          
            <Button variant="contained" sx={{color:'white', marginLeft:"auto"}}> Sign in</Button>
            <Button variant="contained" sx={{marginLeft:"10px"}}> Get started</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
