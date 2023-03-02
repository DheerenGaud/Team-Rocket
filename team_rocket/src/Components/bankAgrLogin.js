import { Button, FormControl, Stack } from "@mui/material";
import {useState  } from "react";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import {  TextField,  OutlinedInput,  InputAdornment,  InputLabel,} from "@mui/material";
import {  Visibility, VisibilityOff } from "@mui/icons-material";

import { useNavigate ,useParams} from "react-router-dom";
import {findUser} from "./api/user"
import "../style/style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default () =>{
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);


  const navigate = useNavigate();
  const {sector} = useParams();

  const handleChange = (e)=>{
       const {name,value}=e.target;
       setUser({...user,[name]:value})
  }



  
  const handlClick = async (event)=>{
      event.preventDefault();
      console.log(user)
      if (user.email !== "" && user.password !== "") {
        const data = await findUser(user)
        console.log("data.data._id => "+data.data._id)
       const id=data.data._id
        if (id > -1) {
          navigate(`/${sector}/${id}`)
        }
        else{
          console.log("helow")
          toast.error("Enter Correct possword");
          // navigate(`/${sector}/BALogin`);
        }
      }
      else{
        toast.error("Fill The Input");
        // navigate(`/${sector}/BALogin`);
      }
 
  }

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
          <span className=" font-serif text-blue"> 
          <Button variant="outlined" component={Link} to={`/:sector/BASingup`} sx={{fontSize:'15px', fontFamily:'serif',mr:2}    } color='secondary' >Signup</Button>
         </span>
        </Stack>
        </form>
        </div>
       </div>
    </div>
    <ToastContainer />
</div>
  );
}
