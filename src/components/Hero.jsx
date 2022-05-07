import { Button, Stack, Typography } from '@mui/material'
import { border, Box } from '@mui/system'
import React from 'react'

const Hero = () => {
  return (
    
    <Stack gap={1} padding={3} sx={{
      boxSizing:"border-box"  ,maxHeight:"800px", 
    alignItems:"center", justifyContent:"center"}} flexDirection="row" border={"1px solid blue"} >
        <Stack padding={1} border={"1px solid blue"} spacing={3} flex={1}>
            <Typography variant='h1'>STAY CURIOUS</Typography>
            <Typography>discover stories,thinking,and expertise from writers on any topic</Typography>
            <Box>
            <Button variant='contained' sx={{borderRadius:"10px"}}>START READING</Button>
            </Box>
        </Stack>
        <Stack flex={1} border={"1px solid blue"} ></Stack>
    </Stack>
    
  )
}

export default Hero