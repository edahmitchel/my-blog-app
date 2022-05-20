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

const BarOne = () => {
  return (
    <>
     <Toolbar />
        <Topics />
        <Divider />
        <TabArea /></>
  )
}

export default BarOne