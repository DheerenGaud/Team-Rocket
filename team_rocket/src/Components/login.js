import { Button, FormControl, Stack } from "@mui/material";
import {useState  } from "react";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import {  TextField,  OutlinedInput,  InputAdornment,  InputLabel,} from "@mui/material";
import {  Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import {findUser} from "./api/user"
import "../style/style.css";


export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);


  const navigate = useNavigate();

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
          toast.success("Login Succesfully");
          navigate(`/tutorial/${id}`)
        }
        else{
          toast.error("Enter Correct possword");
          // navigate("/login");
        }
      }
      else{
        toast.error("Fill The Input");
        // navigate("/login");
      }
 
  }

  return (
    <div className="  container-fluid d-flex h-vh flex-column align-self-center px-5  justify-content-center" style={{height:"100vh"}}>
    <div className="main  d-flex col-12   justify-content-center align-items-center bg-white rounded-3 " style={{height:"80vh"}}>
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
          <Button variant="outlined" component={Link} to="/Ssingup" sx={{fontSize:'15px', fontFamily:'serif',mr:2}    } color='secondary' >Student-Signup</Button>
          <Button variant="outlined" component={Link} to="/Csingup" sx={{fontSize:'15px', fontFamily:'serif'}    } color='secondary' >Collage-Signup</Button> </span>
        </Stack>
        </form>
        </div>
       </div>
    </div>
    <ToastContainer />
</div>
  );
}
