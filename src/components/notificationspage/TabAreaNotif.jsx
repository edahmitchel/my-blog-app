import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PostCard from "../PostCard";

export default function TabAreaNotif() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" >
            <Tab label="comments" value="1" sx={{textlign:"start"}} />
            <Tab label="likes" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{border:"1px solid red",padding:"0",margin:"0"}}>
            {/* <div>hello</div> */}
            
          <PostCard />
          <PostCard />
        </TabPanel>
        <TabPanel value="2">
        <PostCard />
          <PostCard />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
