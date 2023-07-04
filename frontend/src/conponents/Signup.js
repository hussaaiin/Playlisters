// import React from 'react'
// import {Container, Form, Button} from 'react-bootstrap'
// import { useState } from 'react';
// export default function Signup(props) {
//     const [newUser, setNewUser] = useState({})
// const changeHandler = (e) => {
//     const user = {...newUser}
//     user[e.target.name] = e.target.value
//     console.log(user)
//     setNewUser(user)
// }
// const registerHandler = (e) => {
//     props.register  (newUser)
// }
//   return (
//     <>
//     <h1 className="sign-logo">Signup</h1>
//     <Container>
//       <Form.Group>
//         <Form.Label>Name</Form.Label>
//         <Form.Control name="name" onChange={changeHandler}></Form.Control>
//       </Form.Group>

//       <Form.Group>
//         <Form.Label>Email</Form.Label>
//         <Form.Control name="email" onChange={changeHandler}></Form.Control>
//       </Form.Group>
//       <Form.Group>
//         <Form.Label>Password</Form.Label>
//         <Form.Control name="password" onChange={changeHandler}></Form.Control>
//       </Form.Group>
//       <Button onClick={registerHandler}
//       variant="primary">
//         Register
//       </Button>
//     </Container>
//   </>
//   )
// }

import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const SignInContainer = styled(Container)({
  backgroundColor: "#D90429",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const SignInText = styled(Grid)({
  backgroundColor: "transparent",
  padding: "32px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "-100px", // adjust the vertical position of the text
});

const SignInCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#161A1D",
  color: "##EDF2F4",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
  width: "390px",
  height: "460px",
}));

const SignInForm = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  color: "white",
});

const SignInButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: "#FF0000",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FF9999",
  },
}));

const SignInFooter = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "16px",
});

const WhiteOutlinedTextField = styled(TextField)({
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#FFFFFF",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#FFFFFF",
  },
  "& .MuiOutlinedInput-input": {
    color: "#FFFFFF",
  },
  "& .MuiInputLabel-outlined": {
    color: "#FFFFFF",
  },
});

export default function SignUp() {
  return (
    <SignInContainer maxWidth="100%">
      <Grid container>
        <Grid item xs={12} md={6}>
          <SignInText item>
            <p
              style={{
                color: "#EDF2F4",
                fontSize: "110px",
              }}
            >
              Share Your Cool Youtube Playlists With The World.
            </p>
          </SignInText>
        </Grid>
        <Grid item xs={12} md={6}>
          <SignInCard sx={{ marginLeft: "20%", marginTop: "10%" }}>
            <CardHeader title="Sign Up" sx={{ color: "#EDF2F4" }} />
            <SignInForm>
              <WhiteOutlinedTextField
                label="Username"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                autoFocus
                name="username"
              />
              <WhiteOutlinedTextField
                label="Email"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                autoFocus
                name="email"
              />
              <WhiteOutlinedTextField
                label="Password"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                type="password"
              />
              <SignInButton variant="contained" fullWidth>
                Register
              </SignInButton>
            </SignInForm>
            <SignInFooter container spacing={2}>
              <Grid item xs>
                <Button color="primary" fullWidth>
                  Forgot password?
                </Button>
              </Grid>
              <Grid item xs>
                <Button color="primary" fullWidth>
                  Sign In
                </Button>
              </Grid>
            </SignInFooter>
          </SignInCard>
        </Grid>
      </Grid>
    </SignInContainer>
  );
}
