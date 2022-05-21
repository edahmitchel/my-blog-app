import { Stack, Typography, Button, Tooltip, Avatar, Toolbar} from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";

const Topics = () => {
  return (
    <Stack padding={2}>
      <Stack flexDirection={"row"} height={"30px"} alignItems="center" gap={0.5}>
        <Typography>your topics</Typography>
        {["mindfulness", "programming", "technology"].map(
          (text, index) => (
            <Box key={text} margin={0.5}>
              
                <Button variant="outlined" sx={{borderRadius:"30px"}}>{text}</Button>
              
            </Box>
          )
        )}
      </Stack>
      
      <Stack flexDirection={"row"} gap={1} marginTop="20px">
        {/* {["first","second"].map(text,index)=>(<Box key={text}></Box>)} */}

        {["mindfulness", "programming", "technology"].map(
          (text, index) => (
            
              
              <Tooltip title={text} key={text}>
  <Avatar >a</Avatar>
  </Tooltip>
              
          
          )
        )}
       
       
      </Stack>
      {/* <Toolbar/> */}
    </Stack>
  );
};

export default Topics;
