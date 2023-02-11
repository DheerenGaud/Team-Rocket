import { Button, FormControl, Stack } from "@mui/material";
import React, { useState, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import {
  TextField,
  OutlinedInput,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { Password, Visibility, VisibilityOff } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import "../style/style.css";
// import {getUser} from "../../api/user"

import { useNavigate } from "react-router-dom";

export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e)=>{
       const {name,value}=e.target;
       setInput({...input,[name]:value})
  }
  const handlClick = ()=>{
      console.log(input)
  }

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <div className="  container-fluid d-flex h-vh flex-column align-self-center  justify-content-center ">
    <div className="main  d-flex col-12 h- justify-content-center align-items-center bg-white " style={{height:"100vh"}}>
        <div className="left  bg-slate-300  col-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="w-100 h-vh" alt="" />
       </div>
       <div className="right   col-5 bg-[url('images/hero.jpg)'] ">
        <div className=" flex items-center h-full justify-center bg-white ">
        <form  className="w-100 d-flex justify-content-center">
             <Stack spacing={4} sx={{width:'60%'}} > 
             <TextField label='Email' variant="outlined" type="email" required color="secondary"  onChange={handleChange}  name="email"  ></TextField>
             <FormControl fullWidth sx={{ my: 0 }} variant="outlined">
           <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput id="outlined-adornment-password"  type={showPassword ? 'text' : 'password'}
          endAdornment={ 
           <InputAdornment position="end">
            <IconButton  aria-label="toggle password visibility"  onClick={handleClickShowPassword}  edge="end"> {showPassword ? <VisibilityOff /> : <Visibility />}</IconButton>
          </InputAdornment>
        }
        label="Password"  name="password" onChange={handleChange} />
        </FormControl> 
          <Button variant="contained" sx={{height:'50px', fontFamily:'serif', fontSize:'20px'}} onClick={handlClick} color='secondary' >Login</Button>
          <span className="fs-4 font-serif text-blue">Don't have account ? <Button variant="outlined" component={Link} to="/singup" sx={{fontSize:'15px', fontFamily:'serif'}    } color='secondary' >Signup</Button> </span>
        </Stack>
        </form>
        </div>
       </div>
    </div>
</div>
  );
}
