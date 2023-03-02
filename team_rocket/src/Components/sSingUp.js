import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {useNavigate} from "react-router-dom"
import { useState } from "react";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import {newuser} from "./api/user"

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [user,setUser]=useState({
    Fname:"",
    Lname:"",
    password:"",
    rpassword:"",
    email:"",
    collage:"",
    standard:"",
    profilePic:""
  }) 


 

  const navigate=useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user)
    if(user.password===user.rpassword){
         await newuser(user);
          navigate("/login")
    }
    else{
      console.log("password and r-password differ")
      navigate("/Ssingup")
    }

  };

  const imgUplode = (e)=>{
    setUser({...user,profilePic:e.target.files[0]})
  }
  
  const handlechange=(e)=>{
       const {name,value}=e.target;
      setUser({...user,[name]:value})
  }

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
         
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Fname"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handlechange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="Lname"
                  autoComplete="family-name"
                  onChange={handlechange}
                />
              </Grid>
              <Grid item xs={12} >
              <FormControl variant="standard" sx={{ m: 1, minWidth: 420 }}>
        <InputLabel id="demo-simple-select-standard-label">College Name</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={user.collage}
          name="collage"
          onChange={handlechange}
          label="Enter Collage name"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Hindi Primary School"}>Hindi Primary School</MenuItem>
          <MenuItem value={"Swami Vivekanand College of Engineering"}>Swami Vivekanand College of Engineering</MenuItem>
          <MenuItem value={"Bharati Vidyapeeth College of Engineering"}>Bharati Vidyapeeth College of Engineering</MenuItem>
          <MenuItem value={"Fr. Agnel College of Engineering"}>Fr. Agnel College of Engineering</MenuItem>
          <MenuItem value={"Datta Meghe College of Engineering"}>Datta Meghe College of Engineering</MenuItem>
        </Select>
      </FormControl>
      </Grid>
              {/* <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="collage"
                  label="Collage Name"
                  name="collage"
                  autoComplete="family-name"
                  onChange={handlechange}
                />
              </Grid> */}
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="standard"
                  label="Standard"
                  name="standard"
                  autoComplete="family-name"
                  onChange={handlechange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handlechange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handlechange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="rpassword"
                  label="Repte-Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handlechange}
                />
              </Grid>
              <Grid item xs={12}>
              <label  className="form-label">Disabled file input example</label>
              <input type="file" className="form-control" name='profilePic'   onChange={imgUplode}  />
            
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>

    </ThemeProvider>
  );
}