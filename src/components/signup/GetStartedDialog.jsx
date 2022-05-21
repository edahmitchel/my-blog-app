import React from 'react'
// import { makeStyles } from '@material-ui/material/styles';
import {Close } from '@mui/icons-material';
import { Google } from '@mui/icons-material'
// import Slide from '@material-ui/core/Slide';
import { forwardRef } from 'react';
import {Typography, Button, Card, Dialog, Slide,CardHeader,IconButton } from '@mui/material';
import GetStartedModal from '../GetStartedModal';
import { Stack } from '@mui/material';
import { CardContent } from '@mui/material';
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function GetStartedDialog() {
//   const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleSignInClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      
      <Button variant="outlined" color="primary" onClick={handleSignInClickOpen}>
        Open full-screen dialog
      </Button>
      
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} >
      <Stack width={"100%"} alignItems={"center"}>
       
      <Card sx={{ width:"100%", maxWidth:"670px",minHeight:"100vh" }} >
      <CardHeader
        action={
          <IconButton onClick={handleClose} aria-label="close">
            <Close />
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

          </Stack>
      </Dialog>
    </>
  );
}
