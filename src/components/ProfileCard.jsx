import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ProfileCard = () => {
  return (
    <>
      <Stack paddingY={1.5} gap={0.5} border="1px solid red">
        <Box><Avatar sx={{width:"100px", height:"100px"}} variant="square" src="https:picsum.photos/200">pic</Avatar></Box>
        <Box><Typography>occupation: web dev</Typography></Box>
        <Box><Typography>about: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, ne</Typography></Box>
        <Stack display={"flex"} flexDirection={"row"} gap={2}>
          <Box><Typography>followers 99</Typography></Box>
          <Box><Typography>following 100</Typography></Box>
        </Stack>
      </Stack>
    </>
  )
}

export default ProfileCard