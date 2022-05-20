import { Bookmark, Image, MoreHoriz } from "@mui/icons-material";
import { Avatar, Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const PostCard = () => {
  return (
    <>
      {/* fisrt stack flex row */}
      <Stack


        gap={1}
        sx={{ minWidth: "400px",width:"100%"}}
        
      >
        <Stack gap={1} flexDirection={"row"} padding={2} justifyItems={"center"}>
          <Avatar sx={{ width: "20px", height: "20px" }}>2</Avatar>
          <Typography>mitchel edah</Typography>
        </Stack>
        <Stack flexDirection={"row"} width="100%">
          <Stack
            gap={0.5}
            padding={2}
            sx={{ minWidth:"77px",width:"100%" }}
            
          >
            <Typography fontWeight={800}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit!
            </Typography>
            <Typography fontWeight={800}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo sed praesentium sequi perspic pariatur earum impedit laboriosam nobis fuga distinctio, a tempora assumenda molestias. Quasi!
            </Typography>
            <Stack
              gap={1}
              flexDirection={"row"}
              alignItems="center"
              justifyContent={"flex -start"}
              color={"GrayText"}
            >
              <Button variant="text" size="small" sx={{borderRadius:"10px",border:"Gray",background:"grey",color:"black"}}  >topic</Button>
              <Typography variant="body2" S>
                May 5
              </Typography>
              <Typography>.</Typography>
              <Typography variant="body2">5min read</Typography>
              <Stack marginLeft={"auto"} flexDirection={"row"}>
            <Box >
              <IconButton>
                <Bookmark />
              </IconButton>
            </Box>
            <Box>
              <IconButton>
                <MoreHoriz />
              </IconButton>
            </Box>

            </Stack>
            </Stack>
          </Stack>

          <Box padding={2} minWidth={"150px"} maxWidth={"200px"}>
           
            <img width={"100%"} src="https:picsum.photos/200" />
          </Box>
        </Stack>
        <Divider/>
      </Stack>
    </>
  );
};

export default PostCard;
