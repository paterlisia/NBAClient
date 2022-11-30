import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import UserService from '../service/UserService';

import { useNavigate } from "react-router-dom";


const theme = createTheme();

const service = new UserService();
export default function Login(props) {
  const { setName, setStatus } = props;
    // TODO: login request
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  // request to login
  const rsp = service.login(data);
  rsp
    .then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        console.log(response.data);
        if (response.data.status === "valid") {
          setName(response.data.firstName);
          setStatus(true);
          navigate("/");
          // return (<Alert severity="success">Successefully sign in!</Alert>)
        } else {
          if (response.data.comment === "invalid password")
          return (<Alert severity="error">Invalid password, try again~</Alert>)
        }
        // navigate(response.data.url);
      } else {
        console.log(response.status);
        // navigate("https://ec2-18-219-149-124.us-east-2.compute.amazonaws.com:5011/index");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  };
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate("/");
  }
  const onClickGG = (event) => {
    event.preventDefault();
  // request to login
  const rsp = service.loginGoogle();
  rsp
    .then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        // console.log(response.data);
        console.log(response.data);
        // if (response.data.status === "unauthorized") {
        //     console.log("???");
        //     window.location.replace('https://ec2-18-219-149-124.us-east-2.compute.amazonaws.com:5011/login');
        //     // navigate("https://ec2-18-219-149-124.us-east-2.compute.amazonaws.com:5011/login");
        // } else {
        //     navigate("/");
        // }
      } else {
        console.log(response.status);
        
      }
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            <Button
              fullWidth
              variant="contained"
              onClick = {onClickBack}
              sx={{ mb: 2 }}
            >
              Back to home
            </Button>

            <Button
              fullWidth
              variant="contained"
              onClick = {onClickGG}
            >
              Login with Google account
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="https://ec2-18-219-149-124.us-east-2.compute.amazonaws.com:5011/index" variant="body2">
                  Login with Google account
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="http://localhost:3000/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}