import React from "react";
import {
  Google,
  Close,
  Facebook,
  EmailTwoTone,
  Apple,
  Twitter,
} from "@mui/icons-material";
import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
  Button,
  SpeedDialIcon,
  Card,
  Dialog,
  Slide,
  CardHeader,
  IconButton,
  CardContent,
} from "@mui/material";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Header = () => {
  const [signInOpen, setSignInOpen] = React.useState(false);

  const handleSignInClickOpen = () => {
    setSignInOpen(true);
  };

  const handleSignInClose = () => {
    setSignInOpen(false);
  };
  // sign up
  const [signUpOpen, setSignUpOpen] = React.useState(false);

  const handleSignUpClickOpen = () => {
    setSignUpOpen(true);
  };

  const handleSignUpClose = () => {
    setSignUpOpen(false);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ background: "blue" }}>
        <Toolbar>
          <SpeedDialIcon />
          <Typography>logo</Typography>

          <Button
            variant="contained"
            sx={{ color: "white", marginLeft: "auto" }}
            onClick={handleSignInClickOpen}
          >
            {" "}
            Sign in
          </Button>
          <Button
            variant="contained"
            sx={{ marginLeft: "10px" }}
            onClick={handleSignUpClickOpen}
          >
            {" "}
            Get started
          </Button>
        </Toolbar>
      </AppBar>
      {/*signin modal */}
      <Dialog
        fullScreen
        open={signInOpen}
        onClose={handleSignInClose}
        TransitionComponent={Transition}
      >
        <Stack width={"100%"} alignItems={"center"}>
          <Card sx={{ width: "100%", maxWidth: "670px", minHeight: "100vh" }}>
            <CardHeader
              action={
                <IconButton onClick={handleSignInClose} aria-label="close">
                  <Close />
                </IconButton>
              }
            />{" "}
            <CardContent alignItems="center">
              <Stack justifyContent={"center"} alignItems={"center"} gap={5}>
                <Typography variant="h5" sx={{ margin: "50px 0px" }}>
                  Welcome back
                </Typography>
                <Stack flexDirection={"column"} gap={1} maxWidth="300px">
                  <Button
                    startIcon={<Google />}
                    variant="outlined"
                    sx={{ borderRadius: "30px" }}
                  >
                    sign in with google
                  </Button>
                  <Button
                    startIcon={<Facebook />}
                    sx={{ borderRadius: "30px" }}
                    variant="outlined"
                  >
                    sign in with facebook
                  </Button>
                  <Button
                    startIcon={<Apple />}
                    sx={{ borderRadius: "30px" }}
                    variant="outlined"
                  >
                    sign in with apple
                  </Button>
                  <Button
                    startIcon={<Twitter />}
                    variant="outlined"
                    sx={{ borderRadius: "30px" }}
                  >
                    sign in with twitter
                  </Button>
                  <Button
                    startIcon={<EmailTwoTone />}
                    variant="outlined"
                    sx={{ borderRadius: "30px" }}
                  >
                    sign in with email
                  </Button>
                </Stack>

                <Typography>No account?Create one</Typography>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Dialog>
      {/* sign up modal */}
      <Dialog
        fullScreen
        open={signUpOpen}
        onClose={handleSignUpClose}
        TransitionComponent={Transition}
      >
        <Stack width={"100%"} alignItems={"center"} background="transparent">
          <Card sx={{ width: "100%", maxWidth: "670px", minHeight: "100vh" }}>
            <CardHeader
              action={
                <IconButton onClick={handleSignUpClose} aria-label="close">
                  <Close />
                </IconButton>
              }
            />{" "}
            <CardContent alignItems="center">
              <Stack justifyContent={"center"} alignItems={"center"} gap={5}>
                <Typography variant="h5" sx={{ margin: "50px 0px" }}>
                  Join us
                </Typography>
                <Stack
                  flexDirection={"column"}
                  gap={1}
                  minWidth="250px"
                  maxWidth="300px"
                >
                  <Button
                    startIcon={<Google />}
                    variant="outlined"
                    sx={{ borderRadius: "30px", fontSize: "12px" }}
                  >
                    sign up with google
                  </Button>
                  <Button
                    startIcon={<Facebook />}
                    sx={{ borderRadius: "30px", fontSize: "12px" }}
                    variant="outlined"
                    alignItems="center"
                  >
                    sign up with facebook
                  </Button>
                  <Button
                    startIcon={<EmailTwoTone />}
                    variant="outlined"
                    sx={{ borderRadius: "30px", fontSize: "12px" }}
                  >
                    sing up with email
                  </Button>
                </Stack>

                <Typography>got an account?sign in</Typography>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Dialog>
    </>
  );
};

export default Header;
