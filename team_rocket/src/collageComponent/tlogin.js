import { Button, FormControl, Stack } from "@mui/material";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Link, useParams } from "react-router-dom";
import {
  TextField,
  OutlinedInput,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { findTeacher } from "../Components/api/collage";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "../style/style.css";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { id } = useParams();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handlClick = async (event) => {
    event.preventDefault();

    console.log(data);
    const x = await findTeacher(id, data);
    console.log(x.data);
    if (data.email !== "" && data.password !== "") {
      if (x.data !== null) {
        const teacher = x.data.teachers.find((element) => {
          return element.email === data.email;
        });
        if(teacher.password===data.password&&teacher.email===data.email){
          navigate(`/collage/${id}/teacher/${teacher._id}`)
        }else{
          toast.error("Enter Correct possword");
        }
      }
      else{
        toast.error("Enter Correct possword");
      }
    }
    else{
      toast.error("Fill Input Block");
    }
  };

  return (
    <div className="  container-fluid d-flex h-vh flex-column align-self-center  justify-content-center ">
      <div
        className="main  d-flex col-12 h- justify-content-center align-items-center bg-white "
        style={{ height: "100vh" }}
      >
        <div className="left  bg-slate-300  col-5">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
            className="w-100 h-vh"
            alt=""
          />
        </div>
        <div className="right   col-5 bg-[url('images/hero.jpg)'] ">
          <div className=" flex items-center h-full justify-center bg-white ">
            <form className="w-100 d-flex justify-content-center">
              <Stack spacing={4} sx={{ width: "60%" }}>
                <TextField
                  label="Email"
                  variant="outlined"
                  type="email"
                  required
                  color="secondary"
                  onChange={handleChange}
                  name="email"
                ></TextField>
                <FormControl fullWidth sx={{ my: 0 }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {" "}
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    name="password"
                    onChange={handleChange}
                  />
                </FormControl>
                <Button
                  variant="contained"
                  sx={{ height: "50px", fontFamily: "serif", fontSize: "20px" }}
                  onClick={handlClick}
                  color="secondary"
                >
                  Login
                </Button>
                <Button
                  variant="outlined"
                  component={Link}
                  to={`/collage/${id}/Tsingup`}
                  sx={{ fontSize: "15px", fontFamily: "serif", mr: 2 }}
                  color="secondary"
                >
                  Techer-Signup
                </Button>
              </Stack>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
