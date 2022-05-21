import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import Topics from "./mainpage/Topics";
import TabArea from "../mainpage/TabArea";

const FirstSection = () => {
  return (
    <>
     <Toolbar />
        <Topics />
        <Divider />
        <TabArea /></>
  )
}

export default FirstSection