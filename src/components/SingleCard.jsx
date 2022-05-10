import {
  Avatar,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SingleCard = () => {
  return (
    <>
      <Stack
        justifyContent={"flex-start"}
        flexDirection={"row"}
        gap={1}
        sx={{ maxWidth: "400px" }}
        border={"1px solid green"}
      >
        <Box padding={1}>
          <Avatar>01</Avatar>
        </Box>
        <Stack
          gap={0.5}
          padding={1}
          sx={{ minWidth: "77px" }}
          border={"1px solid red"}
        >
          <Stack
            gap={1}
            flexDirection={"row"}
            //   alignItems="center"
            justifyItems={"center"}
          >
            <Avatar sx={{ width: "20px", height: "20px" }}>2</Avatar>
            <Typography>mitchel edah</Typography>
          </Stack>
          <Typography fontWeight={800}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit!
          </Typography>
          <Stack
            gap={1}
            flexDirection={"row"}
            alignItems="center"
            justifyContent={"flex -start"}
            color={"GrayText"}
          >
            <Typography variant="body2" S>
              May 5
            </Typography>
            <Typography >.</Typography>
            <Typography variant="body2">5min read</Typography>
          </Stack>
          <Stack></Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default SingleCard;
