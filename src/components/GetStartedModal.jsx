import React from 'react'
import { Button, Card, CardContent, CardHeader, Stack, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material'
const GetStartedModal = () => {
  return (
    <>
    
    <Card sx={{ width:"100%", maxWidth:"670px",minHeight:"100vh" }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <CloseIcon />
          </IconButton>
        }/>          <CardContent alignItems="center" >
            <Stack justifyContent={"center"} alignItems={"center"} gap={5}>
          <Typography variant='h5' sx={{margin:"50px 0px"}}>Welcome back</Typography>
          <Stack flexDirection={"column"} gap={1} maxWidth="300px">
            <Button startIcon={<Google/>} variant="outlined" sx={{borderRadius:"30px"}}>sign in with google</Button>
            <Button sx={{borderRadius:"30px"}}variant="outlined" >sign in with facebook</Button>
            <Button sx={{borderRadius:"30px"}}variant="outlined">sign in with apple</Button>
            <Button variant="outlined" sx={{borderRadius:"30px"}}>sign in with twitter</Button>
            <Button variant="outlined" sx={{borderRadius:"30px"}}>sing in with email</Button></Stack>
        
        <Typography>No account?Create one</Typography>
        </Stack>
        </CardContent>
        </Card>

  


    </>
  )
}

export default GetStartedModal